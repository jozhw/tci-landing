// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/tci-sign-up-qr-code.png";

const Feature = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Join Our Mailing List</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Scan the QR Code or click &#34;Get Started&#34; to be linked to our
            mailing list.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="https://forms.gle/vraxFYnJH35iNV27A">
                Get Started
              </Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border-none">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-contain border-none"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
