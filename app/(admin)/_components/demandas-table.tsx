"use client";

import * as XLSX from "xlsx";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/(admin)/_components/ui/table";

// Dados fictícios para conexões entre cidades
export interface RelatorioConexao {
  cidadeIntermediadora: string;
  cidadesConectadas: number;
  transacoesIntermunicipais: number; // Valor das transações intermunicipais em R$.
  empregosGerados: number; // Empregos gerados nas cidades conectadas.
  impactoEconomico: string; // Descrição do impacto econômico.
}

const relatorioConexoes: RelatorioConexao[] = [
  {
    cidadeIntermediadora: "Porto Alegre",
    cidadesConectadas: 12,
    transacoesIntermunicipais: 15000000,
    empregosGerados: 5000,
    impactoEconomico: "Aumento da competitividade regional e exportações.",
  },
  {
    cidadeIntermediadora: "Caxias do Sul",
    cidadesConectadas: 8,
    transacoesIntermunicipais: 8000000,
    empregosGerados: 3000,
    impactoEconomico: "Fortalecimento do setor industrial e agrícola.",
  },
  {
    cidadeIntermediadora: "Pelotas",
    cidadesConectadas: 5,
    transacoesIntermunicipais: 6000000,
    empregosGerados: 2000,
    impactoEconomico: "Melhoria na exportação de produtos agrícolas.",
  },
  {
    cidadeIntermediadora: "Uruguaiana",
    cidadesConectadas: 10,
    transacoesIntermunicipais: 12000000,
    empregosGerados: 4000,
    impactoEconomico: "Facilitador de exportações no Porto Seco.",
  },
];

// Colunas da tabela de conexões
const columns: ColumnDef<RelatorioConexao>[] = [
  {
    accessorKey: "cidadeIntermediadora",
    header: "Cidade Intermediadora",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("cidadeIntermediadora")}</div>
    ),
  },
  {
    accessorKey: "cidadesConectadas",
    header: "Cidades Conectadas",
    cell: ({ row }) => <div>{row.getValue("cidadesConectadas")}</div>,
  },
  {
    accessorKey: "transacoesIntermunicipais",
    header: "Transações Intermunicipais (R$)",
    cell: ({ row }) => (
      <div>
        R$
        
      </div>
    ),
  },
  {
    accessorKey: "empregosGerados",
    header: "Empregos Gerados",
    cell: ({ row }) => <div>{row.getValue("empregosGerados")}</div>,
  },
  {
    accessorKey: "impactoEconomico",
    header: "Impacto Econômico",
    cell: ({ row }) => <div>{row.getValue("impactoEconomico")}</div>,
  },
];

// Exportar dados de conexões para Excel
function exportToXlsx(data: RelatorioConexao[]) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Relatorio Conexoes");

  const now = new Date();
  const filename = `Relatorio_Conexoes_${now.toISOString().slice(0, 10)}.xlsx`;

  XLSX.writeFile(wb, filename);
}

export function RelatorioConexoesTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] = React.useState<
    VisibilityState
  >({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: relatorioConexoes,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 w-full">
        <Input
          placeholder="Buscar por cidade..."
          value={
            (table.getColumn("cidadeIntermediadora")?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) =>
            table.getColumn("cidadeIntermediadora")?.setFilterValue(
              event.target.value
            )
          }
          className="w-full max-w-sm sm:w-auto"
        />
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          onClick={() => exportToXlsx(relatorioConexoes)}
        >
          Exportar Relatório
        </Button>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Nenhum dado encontrado...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
