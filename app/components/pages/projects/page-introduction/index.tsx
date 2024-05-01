import { SectionTitle } from "@/app/components/SectionTite"
import { HiArrowNarrowLeft } from "react-icons/hi"

import { Link } from "@/app/components/Link"

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-2">
      <SectionTitle 
        title="Meus Projetos"
        subtitle="projetos"
        clasName="text-center items-center [&>h3]:text-4xl"/>
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você encontrará uma seleção cuidadosamente escolhida dos meus projetos mais recentes e relevantes. Ao longo da minha jornada como desenvolvedor, tenho buscado constantemente desafios que me permitam expandir meu conhecimento e habilidades, resultando em soluções inovadoras e eficientes. Explore abaixo e descubra um pouco do meu trabalho.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20}/>
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}