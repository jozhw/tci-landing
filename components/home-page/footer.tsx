// React and Next.js imports
import Link from "next/link";

// Third-party library imports

// UI component imports
import { Button } from "../ui/button";

// Icon imports
import { Github, Twitter, Facebook } from "lucide-react";

// Local component imports
import { Section, Container } from "../craft";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Link href="https://github.com/thecrimsoninitiative">
              <Button variant="outline" size="icon">
                <Github />
              </Button>
            </Link>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © <a href="#">The Crimson Initiative Inc.</a>. All rights reserved.
            2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
