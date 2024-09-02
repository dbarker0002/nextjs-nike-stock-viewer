import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { ProductData } from "@/utils/nike/product"
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { GrCircleQuestion } from "react-icons/gr";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LuSettings } from "react-icons/lu";
import { DarkSelect, DarkToggle } from "./darkToggle";
 
export function SettingsModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" id="helpBtn" className="hidden md:flex">
                <GrCircleQuestion className="mr-1.5" />Help</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        Help and Settings
                    </DialogTitle>
                    <DialogDescription>
                        
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <Label>Theme</Label>
                    <DarkSelect />
                </div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>I am trying to add a product and I get an error.</AccordionTrigger>
                        <AccordionContent>
                        Please verify that you are using a valid SKU (XXXXXX-XXX format) or Nike US product link.
                        If you are adding multiple SKUs at once, separate them with commas. If you are certain the SKU is correct,
                        the product may have been removed from the Nike product feed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Why is the link to the product not working?</AccordionTrigger>
                        <AccordionContent>
                        Some older products no longer have pages available on Nike.com or Nike SNKRS. You can still view 
                        the live data and stock levels for the product on Swoosh Spy.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What are the Active, Closeout, and Hold statuses?</AccordionTrigger>
                        <AccordionContent>
                        Active products are available for purchase. Closeout products are associated with final sale or outlet items
                        and may or may not be available for purchase. Hold products are not currently available for purchase, even
                        though there may be stock available.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What are the FLOW and LAUNCH publish types?</AccordionTrigger>
                        <AccordionContent>
                        FLOW products are associated with standard first come first serve product releases and are often available
                        on Nike.com. LAUNCH products typically release on the Nike SNKRS platform and use a queued release system.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>What regions are supported?</AccordionTrigger>
                        <AccordionContent>
                        Swoosh Spy uses data from the Nike US product channel. Data from other regions will not be reflected.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </DialogContent>
        </Dialog>
    )
}