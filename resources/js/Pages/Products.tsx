import ProductsList from '@/Components/ProductsList';
import MainLayout from '@/Layouts/MainLayout';
import { ProductType } from '@/types/global';
import { usePage } from '@inertiajs/react';

const Products = () => {
    const products: ProductType[] = usePage().props.products as ProductType[];
    console.log(products);

    return (
        <MainLayout>
            <ProductsList products={products} />
        </MainLayout>
    );
};

export default Products;
