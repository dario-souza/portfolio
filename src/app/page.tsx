
import { Metadata } from "next";
import HomePagePresentation from "@/components/home-page-presentation";
import Container from "@/components/container";



export const metadata: Metadata = {
  title: 'Dario | Home'
}
export default function Home() {
  return (
    <main className="h-[calc(100vh-145px)] flex justify-center items-center">

      <HomePagePresentation />

    </main>
  );
}
