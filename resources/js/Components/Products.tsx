'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Salad } from 'lucide-react';

const products = [
    {
        title: 'Fruits & Vegetables',
        description: 'Fresh fruits and vegetables from local farms',
        icon: Salad,
        color: 'text-red-500',
    },
];

export default function Products() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold">Our Products</h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        We offer a wide range of fresh, high-quality products to
                        meet all your culinary needs
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="transition-shadow hover:shadow-lg">
                                <CardHeader>
                                    <product.icon
                                        className={`h-12 w-12 ${product.color} mb-4`}
                                    />
                                    <CardTitle>{product.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        {product.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
