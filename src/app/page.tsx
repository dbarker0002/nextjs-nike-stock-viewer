/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Lj1pp0Te9RY
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <header className="px-4 mx-auto h-16 flex items-center justify-between gap-6 w-full md:w-3/4">
            <div className="flex items-center justify-start gap-6">
                <Link className="flex items-center justify-center text-xl font-bold" href="#">
                Swoosh Spy
                </Link>
                <nav className="ml-4 hidden md:flex gap-4 sm:gap-6">
                    <Link className="text-md font-normal hover:underline underline-offset-4" href="#features">
                        Features
                    </Link>
                    <Link className="text-md font-normal hover:underline underline-offset-4" href="#faq">
                        FAQ
                    </Link>
                    <Link className="text-md font-normal hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
            </div>
            <div className="space-x-2">
                <Button className="" asChild>
                <Link href="/dashboard">Sign Up</Link>
                </Button>
                <Button variant="outline"className="" asChild>
                <Link href="/dashboard">Log In</Link>
                </Button>
            </div>
        </header>
      <main className="flex-1">
        <section className="w-full">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
            <span className="rounded-xl bg-muted px-4 py-1.5 text-sm font-medium">Placeholder for some sort of announcement!</span>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Keep track of any Nike product, whether it's in stock or not.
                </h1>
                <p className="mx-auto text-gray-500 md:text-2xl sm:text-xl lg:text-3xl dark:text-gray-400">
                  Any items, live data, beautifully visualized.
                </p>
              </div>
              <Button className="" asChild>
                <Link href="/dashboard">Get started for free</Link>
                </Button>
              <img
                alt="Product screenshot"
                // className="w-full"
                src="hero.png"
                style={{
                //   aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width="1250"
                // height="00"
              />
              
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>Feature 1</CardHeader>
                <CardContent>Description for Feature 1</CardContent>
              </Card>
              <Card>
                <CardHeader>Feature 2</CardHeader>
                <CardContent>Description for Feature 2</CardContent>
              </Card>
              <Card>
                <CardHeader>Feature 3</CardHeader>
                <CardContent>Description for Feature 3</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">Frequently Asked Questions</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>Question 1</CardHeader>
                <CardContent>Answer for Question 1.</CardContent>
              </Card>
              <Card>
                <CardHeader>Question 2</CardHeader>
                <CardContent>Answer for Question 2.</CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
