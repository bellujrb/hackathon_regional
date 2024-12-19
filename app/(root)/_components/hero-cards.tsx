import { GraficoReducaoCO2 } from "@/app/(admin)/_components/charts/grafico-c2o";
import { BarChart, Database, FileText, MapPin } from "lucide-react";

export const HeroCards = () => {

  const visionData = [
    {
      title: "Base de Dados",
      desc: "Base de dados integradas como: Associação Comercial, FIERGS e outras.",
      icon: <Database />,
      color: "#4caf50",
    },

  ]
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative">
        {visionData.map((vision, index) => (
              <a
                className="group flex flex-col justify-center p-5 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
                href={""}
                key={index}
              >
                <div
                  className="flex justify-center items-center w-12 h-12 border rounded-lg"
                  style={{ backgroundColor: vision.color }}
                >
                  <div className="flex-shrink-0 w-6 h-6 text-primary-foreground">
                    {vision.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{vision.title}</h3>
                  <p className="mt-1 text-muted-foreground">{vision.desc}</p>
                </div>
              </a>
            ))}
    </div>
  );
};