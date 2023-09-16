'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { NavItem } from "./NavItem"

export const Header = () => {
    const [ navItens, _ ] = useState([
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Projetos",
            href: "/projects"
        },
    ])

    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        width={177}
                        height={147}
                        src="/images/logo.webp"
                        alt="Logo Fausantosdev"/>
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {navItens.map((item, index) => (
                        <NavItem {...item} key={index} />
                    ))}
                </nav>
            </div>
        </header>
    )
}