"use client";

import { useState, useEffect } from 'react';
import { getProductData, ProductData } from "@/utils/nike/product";
import CardGrid from '@/components/cardGrid';
import { AddModal } from '@/components/addModal';
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { HiOutlineRefresh } from "react-icons/hi";
import { Input } from "@/components/ui/input"

export default function GridContainer({products}: {products:ProductData[]}) {
    const [cards, setCards] = useState<ProductData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(0);
    const [searchValue, setSearchValue] = useState("");

    const { toast } = useToast()

    useEffect(() => {
        setIsLoading(true);
        const storedCards = JSON.parse(window.localStorage.getItem('cards') || '[]');
        if (storedCards.length > 0) {
            setCards(storedCards);
        } else {
            setCards(products);
        }
        setIsLoading(false);
    }, [products]);

    useEffect(() => {
        if (typeof window !== 'undefined' && cards.length > 0) {
            window.localStorage.setItem('cards', JSON.stringify(cards));
        }
    }, [cards]);

    const handleDelete = (sku: string) => {
        const newCards = cards.filter((card: ProductData) => card.sku !== sku);
        setCards(newCards);
    }

    const handleAddCard = async (skus: string[]) => {
        setIsAdding(skus.length);
        const newProducts = await getProductData(skus);
        
        toast({
          description: newProducts.length < skus.length ? "Failed to add one or more products." : "Products added successfully.",
          variant: newProducts.length < skus.length ? "failure" : "success",
        });

        setCards(prevCards => [...prevCards, ...newProducts]);
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

    return (
        <div>
            <div className="mx-4 my-4 space-x-2 flex justify-end items-center">
                <h1 className="flex-shrink-0 mr-6 mb-2">Nike Stock Viewer</h1>
                <Input placeholder="Search Products" className='focus:ring-0'  
                onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
                <AddModal onAdd={handleAddCard}></AddModal>
                <Button variant="outline" onClick={() => handleRefresh()}><HiOutlineRefresh className="mr-1"/>Refresh</Button>
            </div>
            <div><hr className="pb-2 pt-0 mx-4"></hr></div>
            <CardGrid products={filteredCards} onDelete={handleDelete} isLoading={isLoading} isAdding={isAdding}></CardGrid>
        </div>
    );
}