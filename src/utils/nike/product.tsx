'use server';

// Interfaces describing product endpoint response data
interface StockData {
    pages: PageData;
    objects: ObjectData[];
}

interface PageData {
    totalPages: number;
    totalResources: number;
}

interface ObjectData {
    productInfo: ProductInfoData[]; 
}

interface ProductInfoData {
    merchProduct: MerchProduct;
    merchPrice: MerchPrice;
    productContent: ProductContent;
    imageUrls: ImageUrls;
    skus: SkuData[];
    availableSkus: AvailableSkuData[];
}

interface MerchProduct {
    id: string;
    status: string;
    styleCode: string;
    colorCode: string;
    styleColor: string;
    pid: string;
    quantityLimit: number;
    productType: string;
    publishType: string;
    exclusiveAccess: boolean;
    hardLaunch: boolean;
}

interface MerchPrice {
    currentPrice: number;
}

interface ProductContent {
    colorDescription: string;
    title: string;
}

interface ImageUrls {
    productImageUrl: string;
}

interface SkuData {
    id: string;
    nikeSize: string;
}

interface AvailableSkuData {
    level: string;
}

export interface Size {
    code: string;
    availability: string;
}

export interface ProductData {
    sku: string;
    title: string;
    colorway: string;
    maxQty: string;
    currentPrice: number;
    status: string;
    publishType: string;
    sizes: Size[];
    imageURL: string;
    exclusive: boolean;
    url: string;
}

// Function to GET stock endpoint
async function fetchStock(sku: string): Promise<StockData> {
    if (sku.includes("nike.com")) {
        const regex = /\/(\w+-\w+)\b/;
        const match = sku.match(regex);
        const extractedSku = match ? match[1] : null;
        
        if (!extractedSku) {
            throw new Error('Invalid SKU format');
        }
        
        sku = extractedSku;

        console.log(sku);
    }


    const channelId = 'd9a5bc42-4b9c-4976-858a-f159cf99c647';
    const result = await fetch(`https://api.nike.com/product_feed/threads/v2?filter=productInfo.merchProduct.styleColor(${sku})&filter=channelId(${channelId})&filter=marketplace(US)&filter=language(en)`, {
        method: "GET",
        headers: {
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:79.0) Gecko/20100101 Firefox/79.0",
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.5",
            "cache-control": "no-cache, private, max-age=0",
            "pragma": "no-cache",
        },
    });

    await new Promise((resolve) => setTimeout(resolve, 250));

    return result.json();
}

async function parseProductData(stockData: StockData): Promise<ProductData> {
    const { totalPages, totalResources } = stockData.pages;

    if (totalPages === 0 && totalResources === 0) {
        throw new Error('Product Not Found');
    }

    const productData = stockData.objects[0].productInfo[0];

    const sizes = parseSizes(productData);

    const url = productData.merchProduct.publishType === 'LAUNCH'
        ? `https://www.nike.com/launch/r/${productData.merchProduct.styleColor}`
        : `https://www.nike.com/t/p/${productData.merchProduct.styleColor}`;

    return {
        sku:            productData.merchProduct.styleColor,
        title:          productData.productContent.title,
        colorway:       productData.productContent.colorDescription,
        maxQty:         productData.merchProduct.quantityLimit.toString(),
        currentPrice:   productData.merchPrice.currentPrice,
        status:         productData.merchProduct.status,
        publishType:    productData.merchProduct.publishType,
        sizes:          sizes,
        imageURL:       productData.imageUrls.productImageUrl,
        exclusive:      productData.merchProduct.exclusiveAccess,
        url:            url,
    };
}

function parseSizes(productData: ProductInfoData): Size[] {
    const filteredSizes = productData.skus
        .map((size, index) => ({
            code: size.nikeSize,
            availability: productData.availableSkus[index].level
        }))
        .filter((size) => size.availability !== 'OOS');

    if (filteredSizes.length === 0) {
        return [
            { code: 'Out of Stock', availability: 'OOS' }
        ];
    }

    return filteredSizes;
}

async function getProductData(skus: string[]): Promise<ProductData[]> {
    const results = await Promise.allSettled(skus.map(async (sku) => {
        const response = await fetchStock(sku);
        const product = await parseProductData(response);
        return product;
    }));

    const validProducts = results
        .filter((result) => result.status === 'fulfilled' && result.value != null)
        .map((result) => (result as PromiseFulfilledResult<any>).value);

    return validProducts;
}

export { getProductData }