import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
const About = () => {
  return (
    <Section className="relative backdrop-blur-sm" id="about">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Avatar>
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/en/4/4c/Sri_Chandrasekharendra_Saraswathi_Viswa_Mahavidyalaya_logo.png" alt="SCSVMV" />
          </Avatar>
          <Link
            className="group flex items-center gap-1"
            target="_blank"
            href="https://kanchiuniv.ac.in/"
          >&emsp;
            Know more about SCSVMV
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">
          6th National Level Technical Symposium
        </h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Elite (Group of talented Students) is student Association of Computer Science and Applications Department. It has been functioning over the years with the objectives of promoting student activities of organizing and participating in co-curricular activities by the students of the Department.
        </h3>

        <div className="flex gap-4">
          <Button><Link href="/Events">Explore Events</Link></Button>
        </div>
      </Container>
    </Section>
  );
};

export default About;
