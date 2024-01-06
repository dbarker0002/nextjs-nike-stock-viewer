"use client";

import { useState, useEffect } from 'react';
import { getProductData, ProductData } from "@/utils/nike/product";
import CardGrid from '@/components/cardGrid';
import { AddModal } from '@/components/addModal';
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { DarkToggle } from '@/components/darkToggle';
import { HiOutlineRefresh } from "react-icons/hi";
import { BsCartCheck, BsQuestionCircle } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from "@/components/ui/separator"
import { PiStudentFill } from "react-icons/pi";
import { LuDollarSign } from "react-icons/lu";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { StatusFilterDropdown, PlatformFilterDropdown, AvailabilityFilterDropdown, PriceFilterDropdown } from '@/components/filterDropdown';
import { HelpModal } from './helpModal';



export default function AppContainer({products}: {products:ProductData[]}) {
    const [cards, setCards] = useState<ProductData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [selectedStatusFilters, setSelectedStatusFilters] = useState<string[]>([]);
    const [selectedPlatformFilters, setSelectedPlatformFilters] = useState<string[]>([]);
    const [selectedAvailabilityFilters, setSelectedAvailabilityFilters] = useState<string[]>([]);
    const [selectedPriceFilters, setSelectedPriceFilters] = useState<number[]>([0, 9999]);

    const { toast } = useToast()

    useEffect(() => {
        setIsLoading(true);
        if ('cards' in window.localStorage) {
            setCards(JSON.parse(window.localStorage.getItem('cards') || `[]`));
        } else if (products.length > 0) {
            setCards(products);
            window.localStorage.setItem('cards', JSON.stringify(products));
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

    const handleStatusFilterChange = (filters: string[]) => {
        setSelectedStatusFilters(filters);
    };

    const handlePlatformFilterChange = (filters: string[]) => {
        setSelectedPlatformFilters(filters);
    };

    const handleAvailabilityFilterChange = (filters: string[]) => {
        setSelectedAvailabilityFilters(filters);
    }

    const handlePriceFilterChange = (filters: number[]) => {
        setSelectedPriceFilters(filters);
    }

    const filteredCards = cards.filter((card) => {
        const cardValues = Object.values(card);
        const hasInStockSize = card.sizes.some((size) => size.availability !== "OOS");
        return (
            cardValues.some(
                (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(searchValue.toLowerCase())
            ) &&
            (selectedStatusFilters.length === 0 ||
                selectedStatusFilters.includes(card.status.toLowerCase())) &&
            (selectedPlatformFilters.length === 0 ||
                selectedPlatformFilters.includes(card.publishType.toLowerCase())) &&
            (selectedAvailabilityFilters.length === 0 ||
                (selectedAvailabilityFilters.includes("in stock") && hasInStockSize) ||
                (selectedAvailabilityFilters.includes("out of stock") && !hasInStockSize)) &&
            (selectedPriceFilters[0] <= card.currentPrice && (selectedPriceFilters[1] === 0 || card.currentPrice <= selectedPriceFilters[1]))
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
        <div className="w-full min-h-screen">
            <div className="fixed top-0 z-10 mt-0 bg-white">
            <div className="mx-4 my-4 space-x-1 flex flex-wrap items-center justify-between">
                <div className="flex space-x-8 items-baseline">
                    <h3 className="flex-shrink-0 font-extrabold" style={{ display: 'flex', alignItems: 'center' }}>
                        Swoosh Spy
                    </h3>
                    <div className="hidden md:block">
                    <HelpModal />
                    <HelpModal />
                    <HelpModal />
                    </div>
                    {/* <DarkToggle /> */}
                </div>
                <div className="flex flex-col items-center">
                    {/* <Alert className="pb-1 mb-0 outline-dashed outline-1 outline-slate-400 lg:block sm:hidden">
                        <PiStudentFill className="w-6 h-6 mt-2" />
                        <AlertTitle className="text-sm font-medium ml-2 mb-0 mt-0">Consider checking my work out below ↓</AlertTitle>
                        <AlertDescription>
                             <div className="flex items-center justify-start">
                                <Button variant="link" className="p-2" id="linkedin">My LinkedIn</Button>
                                <Separator orientation="vertical" className="h-[16px] bg-slate-400" />
                                <Button variant="link" className="p-2" id="resume">My Resume</Button>
                                <Separator orientation="vertical" className="h-[16px] bg-slate-400" />
                                <Button variant="link" className="pl-2 pb-2 pr-0" id="github">View on GitHub</Button>
                            </div>
                        </AlertDescription>
                    </Alert> */}
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={""} alt={""} />
                        <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="mx-4 mb-5 mt-4 space-x-0 2xl:space-x-52 flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-wrap space-x-2 mr-2 2xl:mr-0">
                    <StatusFilterDropdown
                        button={
                            <Button variant="outline" className="focus:ring-0 hidden md:flex" id="statusFilter">
                                <FaRegCheckCircle className="mr-1" />Status<FaAngleDown className="ml-1" />
                            </Button>
                        }
                        onFilterChange={handleStatusFilterChange}
                    ></StatusFilterDropdown>
                    <AvailabilityFilterDropdown
                        button={
                            <Button variant="outline" className="focus:ring-0 hidden md:flex" id="availabilityFilter">
                                <BsCartCheck className="mr-1" />Availability<FaAngleDown className="ml-1" />
                            </Button>
                        }
                        onFilterChange={handleAvailabilityFilterChange}
                    ></AvailabilityFilterDropdown>
                    <PlatformFilterDropdown
                        button={
                            <Button variant="outline" className="focus:ring-0 hidden md:flex" id="platformFilter">
                                <RiComputerLine className="mr-1" />Platform<FaAngleDown className="ml-1" />
                            </Button>
                        }
                        onFilterChange={handlePlatformFilterChange}
                    ></PlatformFilterDropdown>
                    <PriceFilterDropdown onFilterChange={handlePriceFilterChange}>
                    </PriceFilterDropdown>
                    <AddModal className="flex md:hidden" onAdd={handleAddCard}></AddModal>
                    <Input
                        id="search"
                        placeholder="Search Products"
                        className="focus:ring-0 xl:w-96 lg:w-64 w-48"
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                </div>
                <div className="flex space-x-2 ml-auto flex-wrap">
                    <AddModal className="hidden md:flex" onAdd={handleAddCard}></AddModal>
                    <Button variant="outline" id="refreshProducts" className="hidden md:flex" onClick={() => handleRefresh() }>
                        <HiOutlineRefresh className="mr-1.5" />Refresh</Button>
                    <Button variant="outline" id="exportCsv" className="hidden md:flex" onClick={handleExportCSV}>
                        <GrDocumentDownload className="mr-1.5" />Export CSV</Button>
                    {/* <HelpModal />
                    <DarkToggle /> */}
                </div>
            </div>
            <div>
                <hr className="pb-0 pt-0 hr-full-width"></hr>
            </div>
            </div>
            <div className="mt-28">
                <CardGrid products={filteredCards} onDelete={handleDelete} isLoading={isLoading} isAdding={isAdding}></CardGrid>
            </div>
        </div>
    );
}