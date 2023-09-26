import { SectionTitle } from "@/app/components/SectionTite"
import { ExperienceItem } from "./ExperienceItem"

export const WorkExperience = () => {
    return (
        <section className="container py-16 flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-16 ">
            <div className="w-full md:max-w-[420px]">
                <SectionTitle title="Experiência Profissional" subtitle="experiências"/>
                <p className="text-gray-400 mt-6">
                    Estou sempre pronto para encarar novos desafios e abraçar projetos empolgantes. Vamos unir forças e desenvolver soluções surpreendentes para impulsionar o sucesso da sua empresa!
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </section>
    )
}