import Image from "next/image"

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image 
          src="https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-121231.jpg?w=740&t=st=1695232663~exp=1695233263~hmac=d7c51a6043222178c0bb050d1ceb8ea5c0da35a3952a05c2215df1c9cfc75f6a"
          width={380}
          height={200}
          alt="Thumbnail"
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"/>
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500">Nome do Projeto</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">Breve descrição do projeto, descrição do projeto, descrição do projeto, descrição do projeto, descrição do projeto, descrição do projeto, descrição do projeto, descrição do projeto, descrição do projeto, descrição do projeto, descrição do projeto</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">Next.js, Taiwind css, typescript</span>
      </div>
    </div>
  )
}