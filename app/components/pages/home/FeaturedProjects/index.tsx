import { HorizontalDivider } from "@/app/components/Divider/HorizontalDivider"
import { SectionTitle } from "@/app/components/SectionTite"
import { ProjectCart } from "./ProjectCard"
import { Link } from "@/app/components/Link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const FeaturedProjects = () => {
    return (
        <section className="container py-16">
            <SectionTitle title="Projetos em destaque" subtitle="destaques"/>
            <HorizontalDivider className="mb-16"/>

            <div>
                <ProjectCart />
                <HorizontalDivider className="my-16"/>
                <ProjectCart />
                <HorizontalDivider className="my-16"/>
                
                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href="/projects" className="inline-flex">
                        Ver todos
                        <HiArrowNarrowRight />
                    </Link>
                </p>
            </div>
        </section>
    )
}