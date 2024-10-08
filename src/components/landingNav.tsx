"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DarkToggle } from "@/components/darkToggle"
import { useUser, SignOutButton, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { useRouter } from 'next/navigation'

export function LandingNav() {
    const {user, isLoaded} = useUser();
    const router = useRouter();

    return (
        <header className="container px-4 mx-auto h-16 flex items-center justify-between w-full">
            <Link className="flex items-center justify-center text-2xl font-bold" href="">
                Swoosh Spy
            </Link>
            {/* <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
                <Link className="text-lg font-normal hover:underline underline-offset-4 ml-4 text-center" href="#hero">
                    About
                </Link>
                <Link className="text-lg font-normal hover:underline underline-offset-4 m-7 text-center" href="#features">
                    Features
                </Link>
                <Link className="text-lg font-normal hover:underline underline-offset-4 text-center" href="#faq">
                    FAQ
                </Link>
            </nav> */}

            <SignedOut>
                <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
                    <Link className="text-lg font-normal hover:underline underline-offset-4 ml-4 text-center" href="#hero">
                        About
                    </Link>
                    <Link className="text-lg font-normal hover:underline underline-offset-4 m-7 text-center" href="#features">
                        Features
                    </Link>
                    <Link className="text-lg font-normal hover:underline underline-offset-4 text-center" href="#faq">
                        FAQ
                    </Link>
                </nav>
                <div className="space-x-2 flex items-center">
                    {/* <DarkToggle /> */}
                    <SignInButton redirectUrl="/dashboard">
                        {/* <Button variant="outline" onClick={() => router.push("/dashboard")}> */}
                        <Button variant="outline">
                            Sign In
                            {/* <Link href="/dashboard">Log In</Link> */}
                        </Button>
                    </SignInButton>
                    <SignUpButton redirectUrl="/dashboard">
                        {/* <Button onClick={() => router.push("/dashboard")}> */}
                        <Button>
                            Sign Up
                        </Button>
                    </SignUpButton>
                </div>
            </SignedOut>

            <SignedIn>
                <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
                    <Link className="text-lg font-normal hover:underline underline-offset-4 ml-12 text-center" href="#hero">
                        About
                    </Link>
                    <Link className="text-lg font-normal hover:underline underline-offset-4 m-7 text-center" href="#features">
                        Features
                    </Link>
                    <Link className="text-lg font-normal hover:underline underline-offset-4 text-center" href="#faq">
                        FAQ
                    </Link>
                </nav>
                <div className="space-x-2 flex items-center">
                    {/* <DarkToggle /> */}
                    <SignOutButton>
                        <Button variant="outline">
                            Sign Out
                        </Button>
                    </SignOutButton>
                    <Button className="" asChild>
                        <Link href="/dashboard">Dashboard</Link>
                    </Button>
                </div>
            </SignedIn>
        </header>
    )
}