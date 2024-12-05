'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section className="bg-white py-20" id="contact">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold">Contact Us</h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        Have questions? We'd love to hear from you. Send us a
                        message and we'll respond as soon as possible.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <MapPin className="mt-1 h-6 w-6 text-green-600" />
                                <div>
                                    <h3 className="mb-1 font-semibold">
                                        Our Location
                                    </h3>
                                    <p className="text-gray-600">
                                        123 Market Street, City, Country
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="mt-1 h-6 w-6 text-green-600" />
                                <div>
                                    <h3 className="mb-1 font-semibold">
                                        Phone
                                    </h3>
                                    <p className="text-gray-600">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Mail className="mt-1 h-6 w-6 text-green-600" />
                                <div>
                                    <h3 className="mb-1 font-semibold">
                                        Email
                                    </h3>
                                    <p className="text-gray-600">
                                        contact@freshmarket.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <Input placeholder="First Name" />
                                <Input placeholder="Last Name" />
                            </div>
                            <Input type="email" placeholder="Email Address" />
                            <Input placeholder="Subject" />
                            <Textarea
                                placeholder="Your Message"
                                className="h-32"
                            />
                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
