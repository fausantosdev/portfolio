import { Badge } from "@/app/components/Badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-1">
                    <Image 
                        src="/images/star.webp"
                        alt="Logo"
                        width={40}
                        height={40}
                        className=""
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div className="">
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href="http://goo gle.com" target="_blank" className="text-gray-500 hover:text-emerald-500 transition-colors">@ Nome da Empresa</a>
                    <h4 className="text-gray-300">Cargo</h4>
                    <span className="text-gray-500">
                        out 2019 . O momento . (6 meses)
                    </span>
                    <p className="text-gray-400">
                        Desenvolvimento backend utilizando NodeJS
                    </p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <Badge text="NodeJS"/>
                    <Badge text="NodeJS"/>
                    <Badge text="NodeJS"/>
                    <Badge text="NodeJS"/>
                    <Badge text="NodeJS"/>
                </div>
            </div>
        </div>
    )
}