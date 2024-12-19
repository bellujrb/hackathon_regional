import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsData = [
  {
    value: "item-1",
    trigger: "Simulação de Políticas Públicas",
    content:
      "Teste ações como introdução de subsídios e parcerias entre prefeituras e Sebrae, avaliando os impactos em indicadores regionais.",
  },
  {
    value: "item-2",
    trigger: "Insights Personalizados",
    content:
      "Receba relatórios automáticos sobre oportunidades de mercado, impacto de transações intermunicipais e sugestões de incentivos fiscais.",
  },
  {
    value: "item-3",
    trigger: "Visualização Logística",
    content:
      "Explore o impacto do porto seco de Uruguaiana e visualize dados de movimentação logística regional e internacional no mapa interativo.",
  },
];



export const TabsRealtime = () => {
  return (
    <div>
      <Tabs defaultValue="item-2">
        <TabsList className="flex flex-wrap gap-2 h-fit bg-white mt-4">
          {tabsData.map((tab, index) => (
            <TabsTrigger
              value={tab.value}
              className="border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[2px_2px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
              key={index}
            >
              <div className="text-xs md:text-sm text-black font-semibold text-center">
                {tab.trigger}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab, index) => (
          <TabsContent key={index} value={tab.value}>
            <div className="border-2 border-black rounded-md p-4 md:p-6 bg-white h-full">
              <p className="font-semibold text-xl"> {tab.content}</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
