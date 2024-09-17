import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";

// Custom Components
import { Section, Container } from "@/components/craft";
import {IdCard,Download} from "lucide-react";
// Assets
import invite from "./invitation.jpg";

export default function Invitation() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
        <Button className="w-fit not-prose mb-6 flex" size="sm" asChild><Link target="_blank" href="https://drive.usercontent.google.com/u/0/uc?id=1lu6I8SLLpNXia95CGTPUGWR1AO9CG5Vo&export=download" download="Elite_Invitation.jpg"><Download/>&emsp;Download Brochure</Link></Button>
          <Button
            asChild
            className="not-prose mb-6 flex w-fit"
            size="sm"
            variant="outline"
          >
            <Link href="mailto:elite2k24@kanchiuniv.ac.in">
            <IdCard/>&emsp;Enquire Us <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-0">
            <Balancer>
              Know more about the Elite from below brochure.
            </Balancer>
          </h1>
          <div className="my-8 h-500 w-500 overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="not-prose h-fit w-fit object-cover object-bottom"
              src={invite}
              width={500}
              height={500}
              alt="Invitation"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
