import CardItem from "@/components/cardItem"
import { ProductData } from "@/utils/nike/product";
import SkeletonCard from "./skeletonCard";

export default function CardGrid({products, onDelete, isLoading, isAdding}: 
    {products:ProductData[], onDelete:Function, isLoading: boolean, isAdding:number }) {
    
        if (isLoading) {
            return (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-6 m-4 w-120">
                    {products.map((item) => (
                        <SkeletonCard key={item.sku}></SkeletonCard>
                    ))}
                </div>
            )
        } else {
            if (products.length === 0) {
                return (
                    <div>
                        <p className="flex justify-center">No products found. Try adding a new product or modifying the filters above.</p>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-6 m-4">
                        {Array.from({length: 12}, (_, index) => (
                            <SkeletonCard key={index}></SkeletonCard>
                        ))}
                    </div>
                    </div>
                )
            } else {
                return (
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-6 m-4">
                        {products.map((item) => (
                            <CardItem key={item.sku} product={item} onDelete={onDelete}></CardItem>
                        ))}
                        {Array.from({length: isAdding}, (_, index) => (
                            <SkeletonCard key={index}></SkeletonCard>
                        ))}
                    </div>
                )
            }
        }
    
}