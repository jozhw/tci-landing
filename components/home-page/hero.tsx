// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Placeholder from "@/public/tci-logo-f01-v01-dpi600__transparent.png";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <div className="not-prose my-4 h-60 w-full overflow-hidden rounded-lg border-none  md:my-8 md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom border-none"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>

          <h1 className="py-4 md:py-5">
            <Balancer>
              Building relationships between high-impact community-based
              nonprofits and funders for transformative change.
            </Balancer>
          </h1>

          <h3 className="text-muted-foreground">
            <Balancer>
              We are a 501c3 nonprofit that seeks to address the funding issues
              prevalent in community-based nonprofits, with particular focus on
              marginalized communities.
            </Balancer>
          </h3>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
