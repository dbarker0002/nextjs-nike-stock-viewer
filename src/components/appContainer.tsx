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
import { FaUserSecret } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc";
import { PiStudentFill } from "react-icons/pi";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function AppContainer({products}: {products:ProductData[]}) {
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
            <div className="mx-4 my-4 space-x-1 flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <h1 className="flex-shrink-0" style={{ display: 'flex', alignItems: 'center' }}>
                        Swoosh Spy<FaUserSecret className="ml-4" />
                    </h1>
                    <Separator orientation="vertical" className="h-[48px] flex bg-slate-500" style={{ marginLeft: '16px', marginRight: '16px' }} />
                    <h6>Nike Product Tracker</h6>
                </div>
                <div className="flex flex-col items-center">
                    <Alert className="pb-1 mb-0 outline-dashed outline-1 outline-slate-400 lg:block sm:hidden">
                        <PiStudentFill className="w-6 h-6 mt-2" />
                        <AlertTitle className="text-sm font-medium ml-2 mb-0 mt-0">Consider checking my work out below ↓</AlertTitle>
                        <AlertDescription>
                             <div className="flex items-center justify-start">
                                <Button variant="link" className="p-2">My LinkedIn</Button>
                                <Separator orientation="vertical" className="h-[16px] bg-slate-500 flex" />
                                <Button variant="link" className="p-2">My Resume</Button>
                                <Separator orientation="vertical" className="h-[16px] bg-slate-500 flex" />
                                <Button variant="link" className="pl-2 pb-2 pr-0">View on GitHub</Button>
                            </div>
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
            <div className="mx-4 mb-5 mt-4 space-x-4 flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-wrap space-x-2">
                    <Button variant="outline">
                        <FaRegCheckCircle className="mr-1" />Status<FaAngleDown className="ml-1" />
                    </Button>
                    <Button variant="outline">
                        <BsCartCheck className="mr-1" />Availability<FaAngleDown className="ml-1" />
                    </Button>
                    <Button variant="outline">
                        <RiComputerLine className="mr-1" />Platform<FaAngleDown className="ml-1" />
                    </Button>
                    <Input
                        placeholder="Search Products"
                        className="focus:ring-0 xl:w-96 lg:w-64 md:w-48 sm:w-32"
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                </div>
                <div className="flex space-x-2 ml-auto flex-wrap">
                    <AddModal onAdd={handleAddCard}></AddModal>
                    <Button variant="outline" onClick={() => handleRefresh() }>
                        <HiOutlineRefresh className="mr-1" />Refresh</Button>
                    <Button variant="outline" onClick={handleExportCSV}>
                        <GrDocumentDownload className="mr-1" />Export CSV</Button>
                    <Button variant="outline" onClick={() => handleRefresh() }>
                        <FcGoogle className="mr-1" />Login</Button>
                </div>
            </div>
            <div>
                <hr className="pb-2 pt-0 mx-4"></hr>
            </div>
            <CardGrid products={filteredCards} onDelete={handleDelete} isLoading={isLoading} isAdding={isAdding}></CardGrid>
        </div>
    );
}