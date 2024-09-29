"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import * as React from "react"
import './nav.css'
import { FilePen } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import qr from './image/QR.jpeg'
import Image from "next/image"
export default function Navbar() {
    const [state, setState] = React.useState(false)
    const menus = [
        { title: "Events", path: "/Events" },
        { title: "About", path: "/About" },
        { title: "Contact", path: "#contact" },
    ]

    return (
        <header>
            <nav className="bg-white w-auto border-b md:border-5">
                <div className="items-center px-2 max-w-full mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <h1 className="text-3xl font-bold " id="title_el">ELITE 2k24</h1>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                <Menu />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                            }`}
                    >
                        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0" >
                            {menus.map((item, idx) => (
                                <li key={idx} id="navbar">
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button className="w-fit" id="register" asChild>
                                        <Link href="https://forms.gle/44dMPuRyuXFd2pwH7" target="_blank"><FilePen />&emsp;Register</Link>
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
                            </HoverCard>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}