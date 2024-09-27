// React and Next.js imports
import Image from "next/image";
import Link from "next/link";
import elite_2k24 from "./logo_elite-removebg-preview.png";
// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Invitation from '../Invitation/page';
import {MapPin,CalendarPlus} from "lucide-react";

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
                        <h3 className="!my-0">Elite 2k24 Welcomes You!</h3>
                        <h1 id="blinking-text">Last date for registration : 30th September.</h1>
                        <p className="font-light leading-[1.4] opacity-70">
                            Consider this as an opportunity to participate and win prices.
                            Make sure to register early and get updates regarding the events you participate.
                            Let the competition bring fresh minds to explore and bring heat to the events.
                        </p>
                        <div className="not-prose flex items-center gap-2">
                            <Button className="w-fit" asChild>
                                <Link href="https://maps.app.goo.gl/MNPaTHBMQZcMkxr99" target="_blank"><MapPin/>&emsp;Event Location</Link>
                            </Button>
                            <Button className="w-fit" variant="link" asChild>
                                <Link target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NW1pM2JsYXE3YXRmMGNjMXY3NzVkMDFycjggc2lyaXNoc2VraGFyMjBAbQ&tmsrc=sirishsekhar20%40gmail.com"><CalendarPlus/>&emsp;Add to Calender&emsp;</Link>
                            </Button>
                        </div>
                    </div>
                </Craft.Container>
            </Craft.Section>
            <Invitation/>
            <About />
        </div>
    )
}