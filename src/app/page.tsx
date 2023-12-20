import GridContainer from "@/components/gridContainer"
import { getProductData } from "@/utils/nike/product";

export default async function Home() {
    let skus = ['CT8012-170', 'FV4921-600', 'FB7921-060', 'AR0715-200', 'DO7097-100', 'DD1391-100', '553560-030', 'DC0350-100', 'CZ0790-101'];
    
    let products = await getProductData(skus);

    return (
    <main className="flex justify-center">
        <GridContainer products={products}></GridContainer>
    </main>
    )
}
