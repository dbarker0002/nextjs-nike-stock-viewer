"use client";

import { useState, useEffect } from 'react';
import { getProductData, ProductData } from "@/utils/nike/product";
import CardGrid from '@/components/cardGrid';
import { AddModal } from '@/components/addModal';
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { HiOutlineRefresh } from "react-icons/hi";
import { BsCartCheck, BsQuestionCircle } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { Input } from "@/components/ui/input"
import { StatusFilterDropdown, PlatformFilterDropdown, AvailabilityFilterDropdown, PriceFilterDropdown } from '@/components/filterDropdown';
import Link from 'next/link';
import { SettingsModal } from './settingsModal';
// import { UserButton } from "@clerk/nextjs";
import { UserButton } from '@/components/userButton';



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
        // set skus from newCards to user's db entry
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
        // set skus from updatedProducts to user's db entry
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
            <div className="fixed top-0 z-10 mt-0 bg-white dark:bg-[#020817]">
            <div className="mx-4 my-4 space-x-40 pl-2 md:pl-0 md:space-x-1 flex flex-wrap items-center justify-start md:justify-between">
                <div className="flex space-x-4 items-baseline">
                    <Link className="flex items-center justify-center flex-shrink-0 font-extrabold" href="/">
                        <h3>Swoosh Spy</h3>
                    </Link>

                    {/* <div className="hidden md:block">
                    <Button variant="ghost" id="helpButton" className="p-0 mx-4 font-normal text-lg text-slate-400 hover:bg-transparent" asChild>
                        <Link className="text-slate-800" href="/dashboard">
                            Dashboard
                        </Link>
                    </Button>
                    <SettingsModal />
                    </div> */}
                    
                </div>
                <UserButton />
            </div>
            <div className="mx-4 mb-5 mt-4 space-x-0 2xl:space-x-28 flex flex-wrap items-center justify-between">
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
                    <AddModal className="flex md:hidden" id="mobileAddButton" onAdd={handleAddCard}></AddModal>
                    <Input
                        id="search"
                        placeholder="Search Products"
                        className="focus:ring-0 2xl:w-96 xl:w-64 lg:w-48 w-48"
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                </div>
                <div className="flex space-x-2 ml-auto flex-wrap">
                    <AddModal className="hidden md:flex" id="addButton" onAdd={handleAddCard}></AddModal>
                    <Button variant="outline" id="refreshProducts" className="hidden md:flex" onClick={() => handleRefresh() }>
                        <HiOutlineRefresh className="mr-1.5" />Refresh</Button>
                    <Button variant="outline" id="exportCsv" className="hidden md:flex" onClick={handleExportCSV}>
                        <GrDocumentDownload className="mr-1.5" />Export CSV</Button>
                    <SettingsModal></SettingsModal>
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