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
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">SaaS Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to SaaS Inc
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We provide the best software solutions for your business. Reliable. Efficient. Scalable.
                </p>
              </div>
              <img
                alt="Product screenshot"
                className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3"
                height="500"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width="500"
              />
              <Button className="mt-4" asChild>
                <Link href="/dashboard">Dashboard</Link>
                </Button>
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
