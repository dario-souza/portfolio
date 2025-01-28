import Image from "next/image"
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

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
      <h1 className="text-3xl font-bold">Seja bem vindo, me chamo Dário</h1>
      <p className="mt-2">
        Sou um desenvolvedor especializado em criar experiências digitais modernas e eficazes.
      </p>
      <div className="mt-4 flex gap-4">
        <Link href="https://www.linkedin.com/in/dario-souza/" target="_blank">
          <SiLinkedin color="#0A66C2" size={30} className="hover:scale-110" />
        </Link>
        <Link href='https://github.com/dario-souza' target='_blank'>
          <FaGithub size={30} className="hover:scale-110" />
        </Link>
        <Link href='/contact'>
          <MdEmail className="text-[#0A66C2] dark:text-white hover:scale-110" size={30} />
        </Link>
      </div>
    </div>
  )
}