import { SectionTitle } from "@/app/components/SectionTite"
import { TbBrandNextjs } from "react-icons/tb"

import { KnownTech } from "./KnownTech"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle title="Conhecimentos" subtitle="competências" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-60">
                {Array.from({ length: 7 }).map((_, index) => (
                    <KnownTech key={index} tech={{
                        name: "Next.js",
                        icon: <TbBrandNextjs />,
                        date: "2021-06-01"
                    }} />
                ))}
            </div>
        </section>
    )
}