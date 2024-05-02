
import { Metadata } from "next";
import HomePagePresentation from "@/components/home-page-presentation";
import Container from "@/components/container";



export const metadata: Metadata = {
  title: 'Dario | Home'
}
export default function Home() {
  return (
    <main>
      <Container className="fullscreen">
        <HomePagePresentation />
      </Container>
    </main>
  );
}
