import {
  Database,
  MapPin,
  FileText,
  BarChart,
  ChevronRightIcon,
} from "lucide-react";
import Link from "next/link";
import { Heading } from "../heading";

const visionData = [
  {
    title: "Associação Comercial",
    desc: "Dados sobre indústrias, comércios e empreendedores locais.",
    icon: <Database />,
    color: "#4caf50",
  },
  {
    title: "Secretaria de Desenvolvimento Econômico",
    desc: "Informações sobre MEIs e empresas de médio porte cadastradas.",
    icon: <MapPin />,
    color: "#00bcd4",
  },
  {
    title: "Notas Fiscais Emitidas",
    desc: "Análise da movimentação financeira intermunicipal e setores predominantes.",
    icon: <FileText />,
    color: "#ff9800",
  },
  {
    title: "FIERGS",
    desc: "Demanda por produtos e serviços em diferentes regiões.",
    icon: <BarChart />,
    color: "#9c27b0",
  },
];

export const VisionSection = () => {
  return (
    <>
      <div className="py-12 lg:py-24 relative container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
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

          <div className="lg:w-3/4">
            <Heading
              title="Bases de Dados Integradas"
              badge="Regionaliza+"
              classNameBadge="flex justify-center md:justify-start"
              classNameTitle="text-center md:text-start"
              id="visao"
            />
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              O Regionaliza+ utiliza dados de diversas fontes confiáveis para fornecer insights precisos e promover o desenvolvimento econômico regional.
            </p>
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              Integramos informações sobre indústrias, movimentações financeiras e demandas regionais para conectar cidades e facilitar tomadas de decisão estratégicas.
            </p>
            <p className="mt-5">
              <Link
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 text-sm md:text-base"
                href="/about"
              >
                Saiba mais sobre as nossas fontes de dados
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
