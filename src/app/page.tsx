import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dario | Home'
}
export default function Home() {
  return (
    <main className="flex justify-center items-center max-w-screen-lg mx-auto px-3 h-[calc(100vh-145px)]">
      <div>
        <h1 className="text-4xl mb-2 sm:text-5xl md:text-6xl lg:text-8xl">Dario de souza</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">I am <strong>Web Developer</strong></p>
      </div>
    </main>

  );
}
