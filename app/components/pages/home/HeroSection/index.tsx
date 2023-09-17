import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin, TbBrandYoutube, TbBrandWhatsapp } from "react-icons/tb"

import { Badge } from "@/app/components/Badge"
import { Button } from "./Button"

const MOCK_CONTACTS = [
    {
        url: "https://www.google.com",
        icon: <TbBrandGithub />
    },
    {
        url: "https://www.google.com",
        icon: <TbBrandLinkedin />
    },
    {
        url: "https://www.google.com",
        icon: <TbBrandYoutube />
    },
    {
        url: "https://www.google.com",
        icon: <TbBrandWhatsapp />
    },
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:py-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Flávio Santos</h2>
                    <p className="text-gray-400 my-6 text-sm sm:text-base">
                    Sou um programador apaixonado pela codificação, encantado com a tecnologia e comprometido com a inovação. Transformo ideias em soluções práticas, buscando constantemente aprender e contribuir para um mundo impulsionado pela tecnologia. Estou pronto para enfrentar qualquer desafio que o futuro nos traga.    
                    </p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => ( 
                            <Badge text="Alguma"/>
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="shadow-button w-max">Entre em contato <HiArrowNarrowRight size={18} /></Button>
                        
                        <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a href={contact.url} key={index} target="_blank" className="hover:text-gray-100 transition-colors">{contact.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image 
                    width={420}
                    height={404}
                    src="/images/profile-pic.webp"
                    alt="Foto de perfil do Flávio Santos"
                    className="mx-auto sm:mx-0 w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"/>
            </div>
        </section>
    )
}