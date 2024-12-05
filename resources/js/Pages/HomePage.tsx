import About from '@/Components/About';
import Contact from '@/Components/Contact';
import FloatingCTA from '@/Components/FloatingCTA';
import Hero from '@/Components/Hero';
import Newsletter from '@/Components/Newsletter';
import Products from '@/Components/Products';
import Services from '@/Components/Services';
import Testimonials from '@/Components/Testimonials';
import MainLayout from '@/Layouts/MainLayout';

export default function HomePage() {
    return (
        <MainLayout>
            <main className="min-h-screen">
                <Hero />
                <Products />
                <Services />
                <About />
                <Testimonials />
                <Newsletter />
                <Contact />
                <FloatingCTA />
            </main>
        </MainLayout>
    );
}
