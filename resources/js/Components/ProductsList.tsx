import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/cartSlice';
import { ProductType } from '@/types/global';
import { useDispatch } from 'react-redux';

export default function ProductsList({
    products,
}: {
    products: ProductType[];
}) {
    const dispatch = useDispatch();
    const handleAddToCart = (product: ProductType) => {
        dispatch(addToCart({ product, quantity: 1 }));
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Available Products
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.uuid} className="group relative">
                            <a href={`/products/${product.uuid}`}>
                                <img
                                    alt={product.name}
                                    src={`/storage/${product.image}`}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <div>
                                                <span aria-hidden="true" />
                                                {product.name}
                                            </div>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.quantity_unit.unit} (
                                            {product.quantity_unit.description})
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        KES {product.price}
                                    </p>
                                </div>
                            </a>
                            <div>
                                <Button
                                    type="button"
                                    className="mt-6 w-full bg-green-600"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
