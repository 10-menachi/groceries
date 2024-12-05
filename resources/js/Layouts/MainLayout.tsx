import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Toaster } from '@/components/ui/toaster';
import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Provider store={store}>
                <Header />
                <main>{children}</main>
                <Footer />
                <Toaster />
            </Provider>
        </>
    );
}
