'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[500px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
                            alt="Our store"
                            className="rounded-lg object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6 text-4xl font-bold">
                            About Fresh Market
                        </h2>
                        <p className="mb-6 text-gray-600">
                            Since 1995, Fresh Market has been your trusted
                            source for premium quality groceries. We work
                            directly with local farmers and suppliers to bring
                            you the freshest produce, meats, and seafood
                            available.
                        </p>
                        <p className="mb-8 text-gray-600">
                            Our commitment to quality, sustainability, and
                            customer satisfaction has made us the preferred
                            choice for families across the region.
                        </p>
                        <Button
                            size="lg"
                            className="bg-green-600 hover:bg-green-700"
                        >
                            Learn More About Us
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
