type TypeProps = {
    text: string
    type?: 'default' | 'info' | 'success' | 'warning' | 'danger'
}

export const Badge = ({ text, type = 'default' }: TypeProps) => {
    return (
        <span className="text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg">
            {text}
        </span>
    )
}