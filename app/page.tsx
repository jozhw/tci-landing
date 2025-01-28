import { Container, Main, Section } from "@/components/craft";
import Hero from "@/components/home-page/hero";
import Footer from "@/components/home-page/footer";
import Feature from "@/components/home-page/feature-four";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <Feature />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
