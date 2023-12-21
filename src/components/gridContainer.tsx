"use client";

import { useState, useEffect } from 'react';
import { getProductData, ProductData } from "@/utils/nike/product";
import CardGrid from '@/components/cardGrid';
import { AddModal } from '@/components/addModal';
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { HiOutlineRefresh } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function GridContainer({products}: {products:ProductData[]}) {
    const [cards, setCards] = useState<ProductData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(0);
    const [searchValue, setSearchValue] = useState("");

    const { toast } = useToast()

    useEffect(() => {
        setIsLoading(true);
        if ('cards' in window.localStorage) {
            setCards(JSON.parse(window.localStorage.getItem('cards') || `[]`));
            console.log('uhh');
        } else if (products.length > 0) {
            setCards(products);
            console.log(products);
            window.localStorage.setItem('cards', JSON.stringify(products));
            console.log('hmm');
        }
        setIsLoading(false);
    }, []);

    const handleDelete = (sku: string) => {
        const newCards = cards.filter((card: ProductData) => card.sku !== sku);
        setCards(newCards);
        window.localStorage.setItem('cards', JSON.stringify(newCards));
    }

    const handleAddCard = async (skus: string[]) => {
        setIsAdding(skus.length);
        const newProducts = await getProductData(skus);
        
        const existingCards = JSON.parse(localStorage.getItem('cards') || '[]');
        const updatedCards = existingCards.filter((card:any) => !skus.includes(card.sku));
        
        toast({
            description: newProducts.length < skus.length ? "Failed to add one or more products." : "Products added successfully.",
            variant: newProducts.length < skus.length ? "failure" : "success",
        });

        const updatedProducts = [...updatedCards, ...newProducts];
        localStorage.setItem('cards', JSON.stringify(updatedProducts));

        setCards(updatedProducts);
        setIsAdding(0);
    }

    const handleRefresh = async () => {
        setIsLoading(true);
        const skus = cards.map((card) => card.sku);
        const newProducts = await getProductData(skus);
        setCards(newProducts);
        setIsLoading(false);
    }

    const filteredCards = cards.filter((card) => {
        const cardValues = Object.values(card);
        return cardValues.some((value) =>
        typeof value === "string" && value.toLowerCase().includes(searchValue.toLowerCase())
        );
    });

    const handleExportCSV = () => {
        const csvData = [
            Object.keys(cards[0]).filter(key => key !== "sizes"), // Title row
            ...cards.map(card => Object.values(card).filter((_, index) => Object.keys(card)[index] !== "sizes")) // Data rows
        ];
        const csvContent = "data:text/csv;charset=utf-8," + csvData.map(row => row.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "cards.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="w-full">
            <div className="mx-4 my-4 space-x-1 flex flex-wrap justify-center items-center">
                <h1 className="flex-shrink-0 mr-6 mb-2">Nike Manager</h1>
                <div className="flex-grow">
                <   Input placeholder="Filter Products" className="w-full focus:ring-0"  
                    onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
                </div>
                {/* <div className="space-x-1"> */}
                    <Button variant="outline"><FaRegCheckCircle className="mr-1"/>Status<FaAngleDown className="ml-1"/></Button>
                    <Button variant="outline"><BsCartCheck className="mr-1"/>Availability<FaAngleDown className="ml-1"/></Button>
                    <Button variant="outline"><RiComputerLine className="mr-1"/>Platform<FaAngleDown className="ml-1"/></Button>
                {/* </div> */}
                <Separator orientation="vertical" className="h-[34px]" style={{marginLeft: "12px", marginRight: "8px"}} />
                {/* <div className="space-x-1"> */}
                    <AddModal onAdd={handleAddCard}></AddModal>
                    <Button variant="outline" onClick={() => handleRefresh()}><HiOutlineRefresh className="mr-1"/>Refresh</Button>
                    <Button variant="outline" onClick={handleExportCSV}><GrDocumentDownload className="mr-1"/>Export CSV</Button>
                {/* </div> */}
            </div>
            <div><hr className="pb-2 pt-0 mx-4"></hr></div>
            <CardGrid products={filteredCards} onDelete={handleDelete} isLoading={isLoading} isAdding={isAdding}></CardGrid>
        </div>
    );
}