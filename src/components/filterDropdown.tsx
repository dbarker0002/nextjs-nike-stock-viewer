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
 
type Checked = DropdownMenuCheckboxItemProps["checked"]
 
export function StatusFilterDropdown({ button, onFilterChange }: { button: React.ReactNode, onFilterChange: (filters: string[]) => void }) {
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>(["active", "closeout", "hold"]);

    // New function to handle checked change
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
                    <Badge variant="outline" className={`px-1.5 mx-0.5 bg-green-100`}>
                        Active
                    </Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("closeout")}
                    onCheckedChange={(checked) => handleCheckedChange("closeout", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5 bg-amber-100`}>
                        Closeout
                    </Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={selectedFilters.includes("hold")}
                    onCheckedChange={(checked) => handleCheckedChange("hold", checked)}
                    onSelect={(event) => event.preventDefault()}
                >
                    <Badge variant="outline" className={`px-1.5 mx-0.5 bg-red-100`}>
                        Hold
                    </Badge>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}