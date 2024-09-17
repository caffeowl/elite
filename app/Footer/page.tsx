import { Button } from "@/components/ui/button"
import Link from "next/link"
// React and Next.js imports
import Logo from '../image/logo_elite.jpg'
// Third-party library imports
import Balancer from "react-wrap-balancer";
import Image from "next/image";
// Icon imports
import { Instagram, X, Facebook, Globe,Linkedin,Youtube } from "lucide-react";

// Local component imports
import { Section, Container } from "../../components/craft";
export default function Footer() {
    return (
        <section id="contact">
            <footer>
                <Section>
                    <Container className="grid gap-6">
                        <div className="not-prose flex flex-col gap-6">
                            <Link href="/">
                                <h3 className="sr-only">Contact Us :</h3>
                                <Image
                                        src={Logo}
                                        alt="Logo"
                                        width={100}
                                        height={27.27}
                                        className="transition-all hover:opacity-75 dark:invert"
                                    ></Image>
                            </Link>
                            <p>
                                <Balancer>
                                    President of Elite : A.R. Rithika<br />
                                    Mobile No :+91<Link href="tel:8870308344">8870308344</Link>
                                </Balancer>
                            </p>
                        </div>
                        <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
                            <Button variant="outline" size="icon">
                            <Link href="https://kanchiuniv.ac.in/" target="_blank"> <Globe /> </Link>
                            </Button>
                        </div>
                    </Container>
                    <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon">
                                <Link href="https://www.instagram.com/scsvmvdu/" target="_blank"><Instagram /></Link>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Link href="https://x.com/SCSVMVDU" target="_blank"><X /></Link>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Link href=" https://www.facebook.com/SCSVMVDU/" target="_blank"> <Facebook /></Link>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Link href="https://www.linkedin.com/school/scsvmvuniv/" target="_blank"> <Linkedin /></Link>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Link href="https://www.youtube.com/@SCSVMVDU" target="_blank"> <Youtube /></Link>
                            </Button>
                        </div>
                        <p className="text-muted-foreground">
                            <Button variant="link">
                                <Link href="https://github.com/caffeowl" target="_blank">© caffeowl/developer</Link>
                            </Button><br />
                            All rights reserved by Department of Computer Science and Applications.
                        </p>
                    </Container>
                </Section>
            </footer>

        </section>
    )
}