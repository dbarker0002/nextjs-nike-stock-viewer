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
 
export function InfoModal({data}: {data: ProductData}) {
    const siteText = data.publishType === 'LAUNCH' ? 'SNKRS' : 'Nike.com';
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" className="hover:bg-slate-50">
                    View Info
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{data.title}</DialogTitle>
                    <DialogDescription>
                    {data.colorway}
                    </DialogDescription>
                </DialogHeader>
                <img src={data.imageURL} className="max-h-[220px] w-full object-cover"></img>
                <hr className="pb-2 pt-0"></hr>
                <div>{data.sku}</div>
                <DialogFooter>
                    <Button className="bg-red-500">Remove</Button>
                    <Button variant="outline" className="mx-2" asChild>
                        <Link href={data.url} rel="noopener noreferrer" target="_blank">
                            View on {siteText}
                        </Link>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}