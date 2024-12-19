import { cn } from '@/lib/utils'
import { Marquee } from '../ui/marquee'
import Image from 'next/image'

const reviews = [
   {
     name: "Thiago (Co-idealizador)",
     username: "@thiago_Regionaliza+",
     body: "O Dashboard Inteligente de Crescimento Regional conecta cidades e cria oportunidades para o desenvolvimento sustentável.",
     img: "https://github.com/Thiago.png",
   },
   {
     name: "Fernanda (Engenheira de Processos)",
     username: "@fernanda_eng",
     body: "A integração de dados regionais no dashboard permite decisões mais estratégicas para impulsionar o crescimento econômico.",
     img: "https://github.com/Fernanda.png",
   },
   {
     name: "Carlos (Especialista em Sustentabilidade)",
     username: "@carlos_sustentavel",
     body: "O impacto do porto seco de Uruguaiana no planejamento regional está agora ao alcance de todos com este dashboard.",
     img: "https://github.com/Carlos.png",
   },
   {
     name: "Juliana (Consultora de Energia Verde)",
     username: "@juliana_green",
     body: "Com o Dashboard Regional, identificar oportunidades de cooperação entre municípios nunca foi tão fácil.",
     img: "https://github.com/Juliana.png",
   },
   {
     name: "Ricardo (Diretor de Operações Logísticas)",
     username: "@ricardo_logistica",
     body: "A otimização logística com foco no porto seco transforma a conectividade entre cidades intermediadoras e pequenas cidades.",
     img: "https://github.com/Ricardo.png",
   },
   {
     name: "Ana (Analista de Planejamento)",
     username: "@ana_planejamento",
     body: "As ferramentas preditivas do dashboard nos ajudam a planejar políticas públicas que promovem equilíbrio regional.",
     img: "https://github.com/Ana.png",
   },
   {
     name: "Marcos (Especialista em Economia Regional)",
     username: "@marcos_economia",
     body: "Conectar indicadores de competitividade e renda em um só lugar facilita a tomada de decisão econômica.",
     img: "https://github.com/Marcos.png",
   },
   {
     name: "Carolina (Engenheira de Projetos)",
     username: "@carolina_proj",
     body: "O dashboard oferece análises precisas para viabilizar projetos que promovem crescimento equilibrado e sustentável.",
     img: "https://github.com/Carolina.png",
   },
   {
     name: "Pedro (Consultor em Políticas Públicas)",
     username: "@pedro_politicas",
     body: "A simulação de incentivos fiscais no dashboard é uma ferramenta revolucionária para governos locais.",
     img: "https://github.com/Pedro.png",
   },
   {
     name: "Mariana (Head de Estratégia)",
     username: "@mariana_strategy",
     body: "Decisões estratégicas baseadas em dados regionais transformam realidades. Este dashboard é essencial.",
     img: "https://github.com/Mariana.png",
   },
   {
     name: "Luiz (Diretor de Planejamento)",
     username: "@luiz_planning",
     body: "Reduzir desigualdades regionais agora é possível com a integração de dados e insights estratégicos.",
     img: "https://github.com/Luiz.png",
   },
 ];
 
 
const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({
   img,
   name,
   username,
   body,
}: {
   img: string
   name: string
   username: string
   body: string
}) {
   return (
      <figure
         className={cn(
            'relative w-64 cursor-pointer overflow-hidden p-4 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[2px_2px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none',
         )}
      >
         <div className="flex flex-row items-center gap-2">
            <Image className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
               <figcaption className="text-sm font-medium dark:text-white">
                  {name}
               </figcaption>
               <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
         </div>
         <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
   )
}

export function Testimonials() {
   return (
      <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden py-20 ">
         <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map(review => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map(review => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
   )
}

