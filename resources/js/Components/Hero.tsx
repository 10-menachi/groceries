'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBasket } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center">
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
                    alt="Fresh produce background"
                    className="object-cover brightness-[0.7]"
                />
            </div>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-white"
                >
                    <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                        Fresh Food, Delivered Fresh to Your Door
                    </h1>
                    <p className="mb-8 text-xl">
                        Premium quality groceries, meat, fish, and more. We
                        source the finest ingredients to bring quality and
                        freshness to your table.
                    </p>
                    <div className="flex gap-4">
                        <Button
                            size="lg"
                            className="bg-green-600 hover:bg-green-700"
                        >
                            Shop Now <ShoppingBasket className="ml-2" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white bg-white/10 text-white hover:bg-white hover:text-white/10"
                        >
                            Learn More <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
