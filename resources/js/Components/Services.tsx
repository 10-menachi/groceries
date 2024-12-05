'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Clock, Shield, ThumbsUp, Truck } from 'lucide-react';

const services = [
    {
        title: 'Same Day Delivery',
        description: 'Get your groceries delivered within hours',
        icon: Truck,
    },
    {
        title: '24/7 Support',
        description: 'Our customer service team is always here to help',
        icon: Clock,
    },
    {
        title: 'Quality Guarantee',
        description: '100% satisfaction or your money back',
        icon: Shield,
    },
    {
        title: 'Best Prices',
        description: 'Competitive prices on all our products',
        icon: ThumbsUp,
    },
];

export default function Services() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold">Why Choose Us</h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        We pride ourselves on providing exceptional service and
                        value to our customers
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6 text-center transition-shadow hover:shadow-lg">
                                <CardContent className="pt-6">
                                    <service.icon className="mx-auto mb-4 h-12 w-12 text-green-600" />
                                    <h3 className="mb-2 text-xl font-semibold">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
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
