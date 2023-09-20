import { cn } from "@/app/lib/utils"

type TypeProps = {
    className?: string
}

export const HorizontalDivider = ({ className }: TypeProps) => {
    return (
        <div className={cn("w-full my-8 border-b border-b-gray-800", className)} />
    )
}