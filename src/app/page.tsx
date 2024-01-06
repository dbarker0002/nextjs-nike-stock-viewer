/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Lj1pp0Te9RY
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <header className="container px-4 mx-auto h-16 flex items-center justify-between gap-6 w-full">
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
            <span className="rounded-xl bg-muted px-4 py-1.5 text-sm font-medium shadow-md hidden lg:flex">Swoosh Spy is free forever! Track unlimited SKUs at no cost.</span>
            <span className="rounded-xl bg-muted px-4 py-1.5 text-sm font-medium shadow-md flex lg:hidden">Swoosh Spy is free forever! Track at no cost.</span>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Keep track of any Nike product, whether it&#39;s in stock or not.
                </h1>
                <p className="mx-auto text-gray-500 md:text-2xl sm:text-xl lg:text-3xl dark:text-gray-400">
                  Any items. Live data. Beautifully visualized.
                </p>
              </div>
              <Button className="shadow-lg" asChild>
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
        <h4 className="text-3xl font-medium flex justify-center text-center items-center pb-4 pt-12">Helpful features to manage your products</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 py-6">
            <div className="col-span-1 hidden md:flex justify-center items-center rounded-xl py-0 border-4 border-gray-100 dark:border-gray-800 p-4 mt-0">
              <img
                alt="Product screenshot"
                // className=""
                src="card.png"
                style={{
                    aspectRatio: "350/400",
                    objectFit: "contain",
                }}
                width="350"
                height="400"
              />
            </div>
            <div className="col-span-3 md:col-span-2 rounded-xl border-4 border-gray-100 dark:border-gray-800 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-sm">
                        <CardHeader>Feature 1</CardHeader>
                        <CardContent>Description for Feature 1. This is a long description. Description for Feature 1. This is a long description. Description for Feature 1. This is a long description.</CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                        <CardHeader>Feature 2</CardHeader>
                        <CardContent>Description for feature 2. This is a long description. Description for feature 2. This is a long description. Description for feature 2. This is a long description.</CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                        <CardHeader>Feature 3</CardHeader>
                        <CardContent>Description for feature 3. This is a long description. Description for feature 3. This is a long description. Description for feature 3. This is a long description.</CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                        <CardHeader>Feature 4</CardHeader>
                        <CardContent>Description for feature 4. This is a long description. Description for feature 4. This is a long description. Description for feature 4. This is a long description.</CardContent>
                </Card>
                </div>
            </div>
        </div>
        <div className="flex md:hidden justify-center items-center rounded-xl m-4 mt-0 border-4 border-gray-100 dark:border-gray-800">
              <img
                alt="Product screenshot"
                className=""
                src="card.png"
                style={{
                  objectFit: "contain",
                }}
                width="350"
                height="470"
              />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6">
            <div className="col-span-3 md:col-span-2 rounded-xl border-4 border-gray-100 dark:border-gray-800 p-12">
                <h2 className="text-xl font-medium tracking-tighter sm:text-4xl text-center">Frequently Asked Questions</h2>
                <div className="mt-12 gap-6 flex justify-center">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>This is a placeholder question?</AccordionTrigger>
                        <AccordionContent>
                        This is a placeholder answer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>This is a placeholder question?</AccordionTrigger>
                        <AccordionContent>
                        This is a placeholder answer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>This is a placeholder question?</AccordionTrigger>
                        <AccordionContent>
                        This is a placeholder answer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>This is a placeholder question?</AccordionTrigger>
                        <AccordionContent>
                        This is a placeholder answer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>This is a placeholder question?</AccordionTrigger>
                        <AccordionContent>
                        This is a placeholder answer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
            <div className="col-span-1 hidden md:flex justify-center items-center rounded-xl border-4 border-gray-100 dark:border-gray-800 p-4 mt-0">
              <img
                alt="Product screenshot"
                // className="w-full"
                src="item.png"
                style={{
                //   aspectRatio: "500/500",

                  objectFit: "contain",
                }}
                // width="200"
                // height="00"
              />
            </div>
        </div>
        <div className="flex md:hidden justify-center items-center rounded-xl border-4 border-gray-100 dark:border-gray-800 p-4 mt-4 mx-4">
              <img
                alt="Product screenshot"
                // className="w-full"
                src="item.png"
                style={{
                //   aspectRatio: "500/500",

                  objectFit: "contain",
                }}
                // width="200"
                // height="00"
              />
            </div>
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
