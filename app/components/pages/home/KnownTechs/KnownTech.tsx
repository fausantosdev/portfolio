import { ReactNode } from "react"
import { formatDistanceToNow } from "date-fns"
import { pt } from "date-fns/locale"

type TypeProps = {
    tech: {
        name: string
        icon: ReactNode
        date: string
    }
}

export const KnownTech = ({ tech }: TypeProps) => {
    const date = new Date(tech.date); // Substitua esta data pela data desejada

    const relativeTime = formatDistanceToNow(date, { 
        addSuffix: true,
        locale: pt
    }).replace('há ', '')

    return (
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                {tech.icon}
            </div>

            <span>{relativeTime} de experiência</span>
        </div>
    )
}