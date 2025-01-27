import Image from "next/image"
import { Button } from "../ui/button"

export const SectionLeft = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <Image
        src="/dario.jpg"
        alt="Dario"
        width={150}
        height={150}
        title="Dario"
        className="rounded-full shadow-lg mb-4 w-[50%] sm:max-w-sm md:max-w-md"
      />
      <h1 className="text-3xl font-bold">Olá, eu sou Dário</h1>
      <p className="mt-2">
        Sou um desenvolvedor especializado em criar experiências digitais modernas e eficazes.
      </p>
      <Button className="mt-4">Saiba Mais</Button>
    </div>
  )
}