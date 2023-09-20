import Image from "next/image"

import { Badge } from "@/app/components/Badge"
import { Link } from "@/app/components/Link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCart = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                    src="https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-121231.jpg?w=740&t=st=1695232663~exp=1695233263~hmac=d7c51a6043222178c0bb050d1ceb8ea5c0da35a3952a05c2215df1c9cfc75f6a" 
                    alt="Project"
                    width={420}
                    height={304}
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"/>
            </div>

            <div>
                <h3 className="font-medium text-lg text-gray-50">Project name</h3>
                <p className="text-gray-400 my-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aum optio soluta d architecto voluptatem recusandae, vitae cupiditate perspiciatis nulla nam sed obcaecati fugiat! Non, impedit nulla sed provident magni quae!
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <Badge text="Next.js" type="success" />
                    <Badge text="Next.js" type="success" />
                    <Badge text="Next.js" type="success" />
                    <Badge text="Next.js" type="success" />
                    <Badge text="Next.js" type="success" />
                </div>

                <Link href="/projects/project-name">
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}