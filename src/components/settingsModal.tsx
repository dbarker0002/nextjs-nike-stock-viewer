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
import { DarkToggle } from "./darkToggle";
 
export function SettingsModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" id="helpButton" className="p-0 mx-2 font-normal text-lg text-slate-400 hover:bg-transparent">
                        {/* <GrCircleQuestion className="mr-1" size="16px"/> */}
                        Settings</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex items-center"><LuSettings className="mr-1" size="16px" ></LuSettings>Settings</div>
                    </DialogTitle>
                    <DialogDescription>
                        Test
                    </DialogDescription>
                </DialogHeader>
                <DarkToggle />
            </DialogContent>
        </Dialog>
    )
}