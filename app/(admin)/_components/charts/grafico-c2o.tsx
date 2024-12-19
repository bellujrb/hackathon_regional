"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const COLORS = ["#4caf50", "#e0e0e0"]; // Verde para redução de CO₂, cinza para emissões restantes.

type GraficoReducaoCO2Props = {
  nome: string; // Título do gráfico
  subtitle: string; // Subtítulo descritivo
  reducao: number; // Porcentagem de CO₂ reduzido
  impactoFinal: string; // Texto sobre impacto positivo
};

export function GraficoReducaoCO2({
  nome,
  subtitle,
  reducao,
  impactoFinal,
}: GraficoReducaoCO2Props) {
  const chartData = [
    { name: "Reduzido", value: reducao },
    { name: "Restante", value: 100 - reducao },
  ];

  return (
    <Card className="border-none drop-shadow-md flex flex-col items-center">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>C2O </CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="mt-6 flex justify-center relative">
        <ResponsiveContainer width={220} height={220}>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
          style={{ transform: "translateY(-5%)" }}
        >
          <span className="text-4xl font-bold text-green-600">{reducao}%</span>
          <span className="text-sm text-muted-foreground">CO₂ Reduzido</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2 text-sm mt-4">
        <div className="text-center font-medium text-green-700">
          {impactoFinal}
        </div>
      </CardFooter>
    </Card>
  );
}
