import { useState} from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { IoMdAdd } from "react-icons/io";
 
export function AddModal({onAdd, className, id}: {onAdd:Function, className?:string, id:string}) {
    const [inputValue, setInputValue] = useState("");


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" id={id} className={className} onClick={() => setInputValue("")}><IoMdAdd className="mr-1"/>Add Products</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add products</DialogTitle>
          <DialogDescription>
            Enter a SKU, Nike.com link, or list of SKUs/links.
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-2">
          <div className="flex items-center">
            <Input placeholder="CT8012-170, FV4921-600, FB7921-060" className="" 
                onChange={(e) => setInputValue(e.target.value)}/>
          </div>
        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button disabled={!inputValue} id="saveProducts" onClick={() => {
                    const skus = inputValue.split(",").map((sku) => sku.trim());
                    onAdd(skus); 
                }}>Save changes</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}