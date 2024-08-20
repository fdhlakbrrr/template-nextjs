import { Container } from "@/components/ui";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import wojakImage from "../assets/images/wojak_1.png";

export default function Home() {
  return (
    <Container
      direction="COL"
      align="CENTER"
      customClass="w-full h-full gap-5 xl:gap-10"
    >
      <Image
        src={wojakImage}
        alt="banner"
        className="drop-shadow-2xl h-[200px] w-[150px] md:h-[150px] xl:h-[300px] xl:w-[250px]"
      />

      <Container>
        <Text textCase="CAPITALIZE" variant="TITLE">
          Fadhil&apos;s next js template
        </Text>

        <Text variant="SUBTITLE">Good Job And Sleep Well! 👩‍💻</Text>
      </Container>

      <Text
        variant="SUBTITLE"
        customClass="bg-primary p-2 box-border rounded-md"
      >
        Edit this page at ./src/app/page.tsx
      </Text>
    </Container>
  );
}
