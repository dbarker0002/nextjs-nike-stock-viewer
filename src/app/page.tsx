/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Lj1pp0Te9RY
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MagicWandIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { PiShoppingCartLight, PiSneaker } from "react-icons/pi"
import Image from "next/image"
import { SampleCardItem } from "@/components/cardItem"
import { SampleInfoModal } from "@/components/infoModal"
import { LandingNav } from "@/components/landingNav"

// import { useUser } from '@clerk/nextjs'

export default function Home() {
    let item = {
        "sku": "DD1391-100",
        "title": "Nike Dunk Low Retro",
        "colorway": "White/White/Black",
        "maxQty": "1",
        "currentPrice": 115,
        "status": "ACTIVE",
        "publishType": "FLOW",
        "sizes": [{
            "code": "6",
            "availability": "LOW"
        }, {
            "code": "7",
            "availability": "LOW"
        }, {
            "code": "8",
            "availability": "HIGH"
        }, {
            "code": "8.5",
            "availability": "HIGH"
        }, {
            "code": "9",
            "availability": "HIGH"
        }, {
            "code": "9.5",
            "availability": "HIGH"
        }, {
            "code": "10",
            "availability": "HIGH"
        }, {
            "code": "10.5",
            "availability": "HIGH"
        }, {
            "code": "11",
            "availability": "HIGH"
        }, {
            "code": "11.5",
            "availability": "HIGH"
        }, {
            "code": "12",
            "availability": "HIGH"
        }, {
            "code": "12.5",
            "availability": "LOW"
        }, {
            "code": "13",
            "availability": "HIGH"
        }, {
            "code": "14",
            "availability": "HIGH"
        }, {
            "code": "15",
            "availability": "HIGH"
        }],
        "imageURL": "https://secure-images.nike.com/is/image/DotCom/DD1391_100",
        "exclusive": false,
        "url": "https://www.nike.com/t/p/DD1391-100"
    }

    // const { user, isLoaded } = useUser();

  return (
    <div className="flex flex-col min-h-screen">
        <LandingNav />
      <main className="flex-1 mt-2 md:mt-12">
        <section className="w-full">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
            <span className="rounded-xl bg-muted px-4 py-1.5 text-sm font-medium shadow-md hidden lg:flex">Swoosh Spy is free forever! Track unlimited SKUs at no cost.</span>
            <span className="rounded-xl bg-muted px-4 py-1.5 text-sm font-medium shadow-md flex lg:hidden">Swoosh Spy is free forever! Track at no cost.</span>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none px-6 md:px-0">
                  Keep track of any Nike product, whether it&#39;s 
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent animate-pulse"> in stock </span>
                or <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent animate-pulse">not</span>.
                </h1>
                <p className="mx-auto text-gray-500 md:text-2xl sm:text-xl lg:text-3xl dark:text-gray-400">
                  Any items. Live data. Beautifully visualized.
                </p>
              </div>
              <Button className="shadow-lg" asChild>
                <Link href="/dashboard">Get started for free</Link>
                </Button>
              <Image
                alt="Product screenshot"
                // className="w-full"
                src="/hero.png"
                priority={true}
                style={{
                  objectFit: "cover",
                }}
                width="1250"
                height="793"
              />
            </div>
          </div>
        </section>
        <h2 id="features" className="text-3xl font-medium flex justify-center text-center items-center px-8 pb-4 pt-12">Helpful features to view and organize your products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 py-6">
            <div className="col-span-1 hidden md:flex justify-center items-center rounded-xl py-0 border-4 border-gray-100 dark:border-gray-800 p-4 mt-0">
              <div className="flex flex-col items-center">
              <h3 className="text-2xl font-normal text-center border-b pb-2">Beautifully visualized product info</h3>
              <SampleCardItem className="border-0 shadow-none flex flex-col justify-between" key={item.sku + "Demo"} product={item} id="cardItem"></SampleCardItem>
              </div>
            </div>
            <div className="col-span-3 md:col-span-2 rounded-xl border-4 border-gray-100 dark:border-gray-800 px-4 md:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-sm hidden md:block">
                        <CardHeader><span className="font-medium flex items-center"><MagicWandIcon className="w-5 h-5 mr-2"/>View stock info for any Nike product</span></CardHeader>
                        <CardContent>View data for any product, even if it is no longer in stock. Track previously released products to see what stock is left!</CardContent>
                </Card>
                <Card className="border-0 shadow-sm block md:hidden">
                        <CardHeader><span className="font-medium flex items-center"><MagicWandIcon className="w-5 h-5 mr-2"/>Stock info for any Nike item</span></CardHeader>
                        <CardContent>View data for any product, even if it is no longer in stock. Track previously released products to see what stock is left!</CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                        <CardHeader><span className="font-medium flex items-center"><PiShoppingCartLight className="w-5 h-5 mr-2"/>Get in-depth product info</span></CardHeader>
                        <CardContent>View specific information about any product, such as current availability status, quantity limits, and release platform.</CardContent>
                </Card>
                <Card className="border-0 shadow-sm hidden md:block">
                        <CardHeader><span className="font-medium flex items-center"><PiSneaker className="w-5 h-5 mr-2"/>See which sizes are running low</span></CardHeader>
                        <CardContent>View which sizes have high, medium, and low stock numbers available. See when specific sizes are almost sold out.</CardContent>
                </Card>
                <Card className="border-0 shadow-sm block md:hidden">
                        <CardHeader><span className="font-medium flex items-center"><PiSneaker className="w-5 h-5 mr-2"/>See which sizes have stock </span></CardHeader>
                        <CardContent>View which sizes have high, medium, and low stock numbers available. See when specific sizes are almost sold out.</CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                        <CardHeader><span className="font-medium flex items-center"><MagnifyingGlassIcon className="w-5 h-5 mr-2"/>Filter and export data</span></CardHeader>
                        <CardContent>Filter and search products by name, price, availability, status, or platform. Export saved products to spreadsheets for offline storage.</CardContent>
                </Card>
                </div>
            </div>
        </div>
        <div className="flex md:hidden justify-center items-center rounded-xl m-4 mt-0 p-4 border-4 border-gray-100 dark:border-gray-800">
              <div className="flex flex-col items-center mt-4">
              <h2 className="text-xl font-normal text-center">Beautifully visualized products</h2>
              <SampleCardItem className="border-0 shadow-none flex flex-col justify-between" key={item.sku + "MobileDemo"} product={item} id="mobileCardItem"></SampleCardItem>
              </div>
        </div>
        <div className="flex md:hidden justify-center items-center rounded-xl border-4 border-gray-100 dark:border-gray-800 p-0 m-6 mx-4">
              <SampleInfoModal data={item}></SampleInfoModal>
            </div>
        <div id="faq" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6">
            <div className="col-span-3 md:col-span-2 rounded-xl border-4 border-gray-100 dark:border-gray-800 p-12">
                <h4 className="font-medium tracking-tighter text-3xl text-center">Frequently Asked Questions</h4>
                <div className="mt-12 gap-6 flex justify-center">
                <Accordion type="single" collapsible className="w-full md:w-3/4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Can I view products that aren&#39;t on Nike&#39;s site anymore?</AccordionTrigger>
                        <AccordionContent>
                        Yes! Swoosh Spy uses data directly from the Nike US product channel, which also stores products that you can no longer buy.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What&#39;s the point in tracking sold out products?</AccordionTrigger>
                        <AccordionContent>
                        Although some products may be sold out, they still have stock available that could be released at any point. Historically, Nike has made previously unavailable items available again. Viewing these products allows you to know which items still have sizes in stock.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What do the Active, Closeout, and Hold statuses on products mean?</AccordionTrigger>
                        <AccordionContent>
                        Active products are available for purchase. Closeout products are associated with final sale or outlet items
                        and may or may not be available for purchase. Hold products are not currently available for purchase, even
                        though there may be stock available.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What info do I need to track a product?</AccordionTrigger>
                        <AccordionContent>
                        All you need is the item&#39;s Nike SKU or product link. Nike SKUs will be in XXXXXX-XXX format.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>What regions can I track products from?</AccordionTrigger>
                        <AccordionContent>
                        Swoosh Spy uses data from the Nike US product channel. Data from other regions will not be reflected.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>What if I click a product link and no product is found?</AccordionTrigger>
                        <AccordionContent>
                        Some older products no longer have pages available on Nike.com or Nike SNKRS. You can still view 
                        the live data and stock levels for the product on Swoosh Spy.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
            <div className="col-span-1 hidden md:flex justify-center items-center rounded-xl border-4 border-gray-100 dark:border-gray-800 p-0 mt-0">
              <SampleInfoModal data={item}></SampleInfoModal>
            </div>
        </div>
        <footer className="flex flex-col items-center justify-center text-center h-12 mx-16 mt-24 font-light text-sm">
            <p>A learning project by Destin Barker. All product imagery property of Nike.</p>
            <p>Contact me: <a href="mailto:dbarker0002@gmail.com">dbarker0002@gmail.com</a></p>
        </footer>
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
