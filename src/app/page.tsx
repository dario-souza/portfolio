
import { Metadata } from "next";
import HomePagePresentation from "@/components/home-page-presentation";


export const metadata: Metadata = {
  title: 'Dario | Home'
}
export default function Home() {
  return (
    <main className="flex justify-center items-center max-w-screen-lg mx-auto px-3 h-[calc(100vh-145px)]">
      <HomePagePresentation />
    </main>

  );
}
