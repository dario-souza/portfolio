import { FaNodeJs, FaReact } from "react-icons/fa";
import { Card, CardContent } from "../ui/card"
import { SiJavascript, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri"
const technologies = [
  { name: "React", icon: <FaReact className="text-blue-500" size={30} /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" size={30} /> },
  { name: "Next.js", icon: <RiNextjsLine className="text-gray-800" size={30} /> },
  { name: "Styled-Components", icon: <SiStyledcomponents className="text-pink-500" size={30} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={30} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" size={30} /> },
];

export const SectionRight = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Tecnologias que domino:</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-3"
          >
            {tech.icon}
          </div>
        ))}
      </div>
      <Card className="mt-6 w-full shadow-md">
        <CardContent className="pt-6">
          Acesse as outras páginas para explorar mais sobre meu trabalho e projetos.
        </CardContent>
      </Card>
    </div>
  )
}