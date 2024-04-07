
import { ModeToggle } from "@/components/theme";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
    <main>

      <Card className="max-w-[350px]">
        <CardHeader>
          <CardTitle>Top do card</CardTitle>
          <CardDescription>
            Essa é a descrição
          </CardDescription>
        </CardHeader>
        <CardContent>
          esse é o conteúdo
        </CardContent>
      </Card>
      <ModeToggle />
    </main>
  );
}
