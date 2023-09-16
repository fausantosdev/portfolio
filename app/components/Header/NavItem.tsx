import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/app/lib/utils"

type TypeProps = {
    label: string
    href: string
}

export const NavItem = ({ label, href }: TypeProps) => {
    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Link href={href} className={cn(
            "text-gray-400 flex items-center gap-2 font-medium font-mono",
            {
                "text-gray-50": isActive
            }
        )}>
            <span className="text-emerald-400">#</span>{label}
        </Link>
    )
}