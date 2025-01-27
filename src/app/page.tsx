
import { Metadata } from "next";
import { SectionLeft } from "@/components/home/section-left";
import { SectionRight } from "@/components/home/section-right";

export const metadata: Metadata = {
  title: 'Dario | Home'
}
export default function Home() {
  return (
    <main className="h-[calc(100vh-145px)] flex justify-center items-center max-w-screen-lg mx-auto px-4 md:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <SectionLeft />
        <SectionRight />
      </div>
    </main>
  );
}
