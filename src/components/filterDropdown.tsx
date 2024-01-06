"use client"
 
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LuDollarSign } from "react-icons/lu"
import { FaAngleDown } from "react-icons/fa"
 
type Checked = DropdownMenuCheckboxItemProps["checked"]
 
export function StatusFilterDropdown({ button, onFilterChange }: { button: React.ReactNode, onFilterChange: (filters: string[]) => void }) {
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>(["active", "closeout", "hold"]);

    const handleCheckedChange = (filter: string, checked: boolean) => {
        setSelectedFilters((prevFilters) => {
            let updatedFilters;
            if (checked) {
                updatedFilters = [...prevFilters, filter];
            } else {
                updatedFilters = prevFilters.filter((f) => f !== filter);
            }
            onFilterChange(updatedFilters);
            return updatedFilters;
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {button}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("active")}
                    onCheckedChange={(checked) => handleCheckedChange("active", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5 bg-green-100 dark:bg-green-700`}>
                        Active
                    </Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("closeout")}
                    onCheckedChange={(checked) => handleCheckedChange("closeout", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5 bg-amber-100 dark:bg-amber-500`}>
                        Closeout
                    </Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("hold")}
                    onCheckedChange={(checked) => handleCheckedChange("hold", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5 bg-red-100 dark:bg-red-700`}>
                        Hold
                    </Badge>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function PlatformFilterDropdown({ button, onFilterChange }: { button: React.ReactNode, onFilterChange: (filters: string[]) => void }) {
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>(["flow", "launch"]);

    const handleCheckedChange = (filter: string, checked: boolean) => {
        setSelectedFilters((prevFilters) => {
            let updatedFilters;
            if (checked) {
                updatedFilters = [...prevFilters, filter];
            } else {
                updatedFilters = prevFilters.filter((f) => f !== filter);
            }
            onFilterChange(updatedFilters);
            return updatedFilters;
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {button}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("flow")}
                    onCheckedChange={(checked) => handleCheckedChange("flow", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5`}>
                        Nike.com
                    </Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("launch")}
                    onCheckedChange={(checked) => handleCheckedChange("launch", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5`}>
                        SNKRS Launch
                    </Badge>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function AvailabilityFilterDropdown({ button, onFilterChange }: { button: React.ReactNode, onFilterChange: (filters: string[]) => void }) {
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>(["in stock", "out of stock"]);

    const handleCheckedChange = (filter: string, checked: boolean) => {
        setSelectedFilters((prevFilters) => {
            let updatedFilters;
            if (checked) {
                updatedFilters = [...prevFilters, filter];
            } else {
                updatedFilters = prevFilters.filter((f) => f !== filter);
            }
            onFilterChange(updatedFilters);
            return updatedFilters;
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {button}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("in stock")}
                    onCheckedChange={(checked) => handleCheckedChange("in stock", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5`}>
                        In Stock
                    </Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("out of stock")}
                    onCheckedChange={(checked) => handleCheckedChange("out of stock", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5`}>
                        Out of Stock
                    </Badge>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function PriceFilterDropdown({ onFilterChange }: { onFilterChange: (filters: number[]) => void }) {
    const [selectedPriceFilters, setSelectedPriceFilters] = React.useState<number[]>([0, 9999]);

    const handleMinPriceChange = (price: number) => {
        setSelectedPriceFilters(prevFilters => [price, prevFilters[1]]);
        onFilterChange(selectedPriceFilters);
    };

    const handleMaxPriceChange = (price: number) => {
        setSelectedPriceFilters(prevFilters => [prevFilters[0], price]);
        onFilterChange(selectedPriceFilters);
    };

    React.useEffect(() => {
        onFilterChange(selectedPriceFilters);
    }, [selectedPriceFilters]);

    return (
        <Popover>
        <PopoverTrigger asChild>
            <Button id="priceFilter" variant="outline" className="hidden md:flex">
                <LuDollarSign className="mr-0.5" />Price<FaAngleDown className="ml-1" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-42">
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <div className="flex items-center gap-4">
                        <Label htmlFor="minPrice">Min. Price</Label>
                        <Input
                            id="minPrice"
                            defaultValue={selectedPriceFilters[0]}
                            type="number"
                            className="col-span-2 h-8 w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            onChange={(e) =>handleMinPriceChange(Number(e.target.value))}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Label htmlFor="maxPrice">Max Price</Label>
                        <Input
                            id="maxPrice"
                            defaultValue={selectedPriceFilters[1]}
                            type="number"
                            className="col-span-2 h-8 w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>
        </PopoverContent>
        </Popover>
    )
}