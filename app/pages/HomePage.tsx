// React and Next.js imports
import Image from "next/image";
import Link from "next/link";
import elite_2k24 from "./logo_elite-removebg-preview.png";
// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Invitation from '../Invitation/page';
import { MapPin, CalendarPlus, ExternalLink } from "lucide-react";
// import {
//     HoverCard,
//     HoverCardContent,
//     HoverCardTrigger,
// } from "@/components/ui/hover-card"
// import qr from '../image/QR.jpeg'
// Asset imports
import './HomePage.css'
import About from "../About/page"
export default function Page() {
    return (
        <div className="head_first">
            <Craft.Section>
                <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
                    <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
                        <Image src={elite_2k24} alt="" className="bg_f"></Image>
                    </div>
                    <div className="flex flex-col gap-6 py-8">
                        <h3 className=" font_heading">Elite 2k24 Welcomes You!</h3>
                        <h1 id="blinking-text">Registration Closed !</h1>
                        {/* <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button className="w-fit" id="register" asChild>
                                    <Link href="https://forms.gle/44dMPuRyuXFd2pwH7" target="_blank"><ExternalLink />&emsp;Register Here</Link>
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-1">
                                    <h2 className="text-sm font-semibold">Click Button or Scan the QR Code to register through mobile device.</h2>
                                    <div className="flex items-center pt-2">
                                        <Image
                                            src={qr}
                                            width={100}
                                            height={100}
                                            alt="Scan Me"
                                        />
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard> */}
                        <p className="font-light leading-[1.4] opacity-70">
                            Consider this as an opportunity to participate and win prices.
                            Make sure to register early and get updates regarding the events you participate.
                            Let the competition bring fresh minds to explore and bring heat to the events.
                        </p>
                        <div className="not-prose flex items-center gap-2">
                            <Button className="w-fit" asChild>
                                <Link href="https://maps.app.goo.gl/MNPaTHBMQZcMkxr99" target="_blank"><MapPin />&emsp;Event Location</Link>
                            </Button>
                            <Button className="w-fit" variant="link" asChild>
                                <Link target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NW1pM2JsYXE3YXRmMGNjMXY3NzVkMDFycjggc2lyaXNoc2VraGFyMjBAbQ&tmsrc=sirishsekhar20%40gmail.com"><CalendarPlus />&emsp;Add to Calender&emsp;</Link>
                            </Button>
                        </div>
                    </div>
                </Craft.Container>
            </Craft.Section>
            <Invitation />
            <About />
        </div>
    )
}