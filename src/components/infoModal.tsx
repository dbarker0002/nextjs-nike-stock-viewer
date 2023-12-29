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
 
export function InfoModal({data}: {data: ProductData}) {
    const siteText = data.publishType === 'LAUNCH' ? 'SNKRS' : 'Nike.com';

    const lowAvailabilitySizes = data.sizes
        .filter((size) => size.availability === 'LOW')
        .map((size) => size.code);

    const medAvailabilitySizes = data.sizes
        .filter((size) => size.availability === 'MEDIUM')
        .map((size) => size.code);

    const highAvailabilitySizes = data.sizes
        .filter((size) => size.availability === 'HIGH')
        .map((size) => size.code);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button id="productInfo" variant="secondary" className="hover:bg-slate-50 dark:hover:bg-slate-500">
                    View Info
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{data.title}</DialogTitle>
                    <DialogDescription>
                    <div>{data.colorway}</div>
                    </DialogDescription>
                </DialogHeader>
                <img src={data.imageURL} className="max-h-[220px] w-full object-cover" alt="Nike product image."
                    width="375" height="220"></img>
                <hr className="pt-0"></hr>
                <div className="pb-2">
                    <div className="grid grid-cols-3 gap-x-2 pb-1">
                        <div className="text-center">
                            <Label>SKU</Label>
                        </div>
                        <div className="text-center">
                            <Label>Status</Label>
                        </div>
                        <div className="text-center">
                            <Label>Publish Type</Label>
                        </div>
                        <Button id="skuLabel" variant="outline" className="" disabled>{data.sku}</Button>
                        <Button id="statusLabel" variant="outline" className="" disabled>{data.status}</Button>
                        <Button id="publishLabel" variant="outline" className="" disabled>{data.publishType}</Button>
                        
                        
                    </div>
                    <div className="grid grid-cols-3 gap-x-2">
                        <div className="text-center">
                            <Label>Cart Limit</Label>
                        </div>
                        <div className="text-center">
                            <Label>Exclusive</Label>
                        </div>
                        <div className="text-center">
                            <Label>Price</Label>
                        </div>
                        <Button id="qtyLabel" variant="outline" className="" disabled>LIMIT {data.maxQty}</Button>
                        <Button id="eaLabel" variant="outline" className="" disabled>{data.exclusive.toString().toUpperCase()}</Button>
                        <Button id="priceLabel" variant="outline" className="" disabled>${data.currentPrice}</Button>
                        
                    </div>
                </div>
                <hr className="pb-2"></hr>
                <div className="pb-4">
                    {lowAvailabilitySizes.length > 0 && (
                        <>
                            <Label htmlFor="labtest" className="">Low Availability</Label>
                            <div className="m-1">
                            {lowAvailabilitySizes.map((size: string) => (
                                <Badge key={size} variant="outline" className="px-1.5 mx-0.5 bg-gray-50 dark:bg-slate-800">
                                {size}
                                </Badge>
                            ))}
                            </div>
                        </>
                    )}

                    {medAvailabilitySizes.length > 0 && (
                        <>
                            <Label>Medium Availability</Label>
                            <div className="m-1">
                            {medAvailabilitySizes.map((size: string) => (
                                <Badge key={size} variant="outline" className="px-1.5 mx-0.5 bg-gray-50 dark:bg-slate-800">
                                {size}
                                </Badge>
                            ))}
                            </div>
                        </>
                    )}

                    {highAvailabilitySizes.length > 0 && (
                        <>
                            <Label>High Availability</Label>
                            <div className="m-1">
                            {highAvailabilitySizes.map((size: string) => (
                                <Badge key={size} variant="outline" className="px-1.5 mx-0.5 bg-gray-50 dark:bg-slate-800">
                                {size}
                                </Badge>
                            ))}
                            </div>
                        </>
                    )}

                    {lowAvailabilitySizes.length === 0 && medAvailabilitySizes.length === 0 && highAvailabilitySizes.length === 0 && (
                        <div className="text-center">
                            <span className="font-semibold">Product out of stock.</span>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}