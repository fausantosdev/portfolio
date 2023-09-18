import { cn } from "@/app/lib/utils"

type TypeProps = {
    title: string
    subtitle: string
    clasName?: string
}

export const SectionTitle = ({ title, subtitle, clasName }: TypeProps) => {
    return (
        <div className={cn("flex flex-col gap-4", clasName)}>
            <span className="font-mono text-sm text-emerald-400">{`../${subtitle}`}</span>
            <h3 className="text-3xl font-medium">{title}</h3>
        </div>
    )
}