"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Card } from "@/components/ui/card";

interface Cidade {
    nome: string;
    conexoes: number; // Número de cidades conectadas.
    populacaoImpactada: number; // População total impactada.
    transacoesIntermunicipais: number; // Valor total das transações intermunicipais (em R$).
    empregosGerados: number; // Número de empregos gerados.
}

const cidades: Cidade[] = [
    {
        nome: "Porto Alegre",
        conexoes: 10, // Número moderado de conexões relevantes.
        populacaoImpactada: 120000, // População diretamente conectada.
        transacoesIntermunicipais: 25000000, // R$ 25 milhões em transações.
        empregosGerados: 1500, // Empregos formais gerados nas conexões.
    },
    {
        nome: "Caxias do Sul",
        conexoes: 7, // Conexões industriais e logísticas.
        populacaoImpactada: 80000, // População atendida nas conexões.
        transacoesIntermunicipais: 15000000, // R$ 15 milhões em negócios.
        empregosGerados: 1200, // Empregos locais e regionais gerados.
    },
    {
        nome: "Pelotas",
        conexoes: 5, // Conexões com foco no setor agrícola.
        populacaoImpactada: 60000, // População conectada no entorno.
        transacoesIntermunicipais: 10000000, // R$ 10 milhões em transações.
        empregosGerados: 800, // Empregos relacionados a comércio e agricultura.
    },
    {
        nome: "Uruguaiana",
        conexoes: 8, // Conexões regionais e internacionais.
        populacaoImpactada: 50000, // População impactada pelas transações.
        transacoesIntermunicipais: 12000000, // R$ 12 milhões movimentados.
        empregosGerados: 1000, // Empregos diretos e indiretos gerados.
    },
];


export function CityConnectionsPage() {
    const [selectedCity, setSelectedCity] = useState<Cidade | null>(cidades[0]);
    const [openCombobox, setOpenCombobox] = React.useState(false);

    return (
        <div className="w-full p-6">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-lg drop-shadow-md space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                    <p className="text-md text-muted-foreground">Selecione uma Cidade:</p>
                    <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-[200px] justify-center border-2 border-black bg-white"
                            >
                                {selectedCity ? (
                                    <>{selectedCity.nome}</>
                                ) : (
                                    <>+ Selecione uma Cidade</>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="p-0 border-2 border-black"
                            side="right"
                            align="start"
                        >
                            <Command>
                                <CommandInput placeholder="Procurar cidade..." />
                                <CommandList>
                                    <CommandEmpty>Nenhuma cidade encontrada.</CommandEmpty>
                                    <CommandGroup>
                                        {cidades.map((cidade, index) => (
                                            <CommandItem
                                                key={index}
                                                value={cidade.nome}
                                                onSelect={() => {
                                                    setSelectedCity(cidade);
                                                    setOpenCombobox(false);
                                                }}
                                            >
                                                <span>{cidade.nome}</span>
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {selectedCity && (
                <>
                    <div className="p-4 rounded-lg mb-6 drop-shadow-md bg-blue-500">
                        <h1 className="text-2xl font-bold text-center mb-8 text-white">
                            Detalhes da Cidade Intermediadora
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">Nome</p>
                                {selectedCity.nome}
                            </Card>
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">Conexões</p>
                                {selectedCity.conexoes}
                            </Card>
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">População Impactada</p>
                                {selectedCity.populacaoImpactada.toLocaleString()} pessoas
                            </Card>
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">Transações Intermunicipais</p>
                                R$ {selectedCity.transacoesIntermunicipais.toLocaleString()}
                            </Card>
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">Empregos Gerados</p>
                                {selectedCity.empregosGerados}
                            </Card>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
