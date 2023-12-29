import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { ProductData, Size } from '@/utils/nike/product';
import { InfoModal } from '@/components/infoModal';
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function CardItem({ product, onDelete }: { product: ProductData, onDelete: Function }) {

    const { toast } = useToast()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    })
    const renderStatusBadge = (status: string, text: string, color: string, darkColor: string) => {
        return (
        product.status === status && (
            <Badge variant="outline" className={`px-1.5 mx-0.5 ${color} ${darkColor} mb-3`}>
            {text}
            </Badge>
        )
        );
    };

    const renderPublishTypeBadge = () => {
        const text = product.publishType === 'LAUNCH' ? 'SNKRS Launch' : 'Nike.com';
        return (
        <Badge variant="outline" className="px-1.5 mx-0.5 mb-3">
            {text}
        </Badge>
        );
    };

    const renderSizeBadges = () => {
        return (
        <div>
            {product.sizes.map((size: Size) => (
            <Badge key={size.code} variant="outline" className="px-1.5 mx-0.5 bg-gray-50 dark:bg-slate-800">
                {size.code}
            </Badge>
            ))}
        </div>
        );
    };

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 pb-3 items-center">
        <Avatar className="h-14 w-14">
          <AvatarImage src={product.imageURL} alt={product.title} />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="pt">{product.title}</CardTitle>
          <CardDescription className="pt-0">{product.colorway}</CardDescription>
        </div>
        <Button
          variant="ghost"
          className="text-slate-400 hover:bg-transparent hover:text-red-400 self-start ml-auto p-0 h-0"
          id={"deleteProduct" + product.sku}
          aria-label={"Delete " + product.sku}
          onClick={() => {
            onDelete(product.sku);
            toast({
                description: `${product.title} (${product.sku}) has been removed.`,
                variant: "default",
            });
          }}
        >
          <FaRegTrashAlt />
        </Button>
      </CardHeader>
      <CardContent className="gap 4 pl-5 pr-5 pb-2">
        <div>
          {renderStatusBadge('ACTIVE', 'Active', 'bg-green-100', 'dark:bg-green-700')}
          {renderStatusBadge('HOLD', 'Hold','bg-red-100', 'dark:bg-red-700')}
          {renderStatusBadge('CLOSEOUT', 'Closeout', 'bg-amber-100', 'dark:bg-amber-500')}
          {renderPublishTypeBadge()}
          <Badge variant="outline" className="px-1.5 mx-0.5 mb-3">
            Quantity Limit {product.maxQty}
          </Badge>
        </div>
        <hr className="pb-2 pt-0"></hr>
        {renderSizeBadges()}
      </CardContent>
      <CardFooter className="flex self-start ml-auto pl-4 pr-4 pt-4">
        <div>
          <Button variant="outline" className="mx-2" id={"nikeLink" + product.sku} asChild>
            <Link href={product.url} rel="noopener noreferrer" target="_blank">
              ${product.currentPrice}
            </Link>
          </Button>
          <InfoModal data={product}></InfoModal>
        </div>
      </CardFooter>
    </Card>
  );
}
