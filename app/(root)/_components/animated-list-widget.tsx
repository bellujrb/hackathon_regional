"use client"

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/app/(root)/_components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Nova oportunidade de mercado identificada",
    description: "Painel de Insights Personalizados",
    time: "15m atrás",
    icon: "📈",
    color: "#5B8DEE",
  },
  {
    name: "Demanda crescente por serviços detectada",
    description: "Painel de Demanda Regional",
    time: "10m atrás",
    icon: "🌍",
    color: "#FF5722",
  },
  {
    name: "Novo relatório de transações intermunicipais disponível",
    description: "Painel de Análise Econômica",
    time: "5m atrás",
    icon: "📘",
    color: "#4CAF50",
  },
  {
    name: "Alerta: disparidade na distribuição de renda regional",
    description: "Painel de Indicadores Socioeconômicos",
    time: "2m atrás",
    icon: "⚠️",
    color: "#E91E63",
  },
  {
    name: "Meta de incentivo fiscal definida",
    description: "Painel de Políticas Públicas",
    time: "30m atrás",
    icon: "♻️",
    color: "#1E88E5",
  },
  {
    name: "Volume de mercadorias no porto seco atualizado",
    description: "Painel Logístico de Uruguaiana",
    time: "1h atrás",
    icon: "📦",
    color: "#D32F2F",
  },
  {
    name: "Progresso no projeto de cooperação regional",
    description: "Painel de Projetos",
    time: "20m atrás",
    icon: "🚀",
    color: "#66BB6A",
  },
  {
    name: "Queda na competitividade setorial detectada",
    description: "Painel de Competitividade",
    time: "45m atrás",
    icon: "📊",
    color: "#FFC107",
  },
  {
    name: "Atualização no modelo de análise de dados regionais",
    description: "Painel de Inteligência Regional",
    time: "2h atrás",
    icon: "🤖",
    color: "#29B6F6",
  },
  {
    name: "Feedback incorporado às estratégias regionais",
    description: "Painel de Planejamento Estratégico",
    time: "15m atrás",
    icon: "💡",
    color: "#673AB7",
  },
];



notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-md p-3 sm:p-4 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
      )}
    >
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <div
          className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-base sm:text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-base sm:text-lg font-medium dark:text-white whitespace-pre">
            <span className="text-sm sm:text-base">{name}</span>
            <span className="mx-1 hidden sm:inline">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs sm:text-sm font-normal dark:text-white/60 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};


export function AnimatedListWidget({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[595px] w-full flex-col p-6 overflow-hidden rounded-lg",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
