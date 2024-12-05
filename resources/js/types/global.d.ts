import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';
import { PageProps as AppPageProps } from './';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    /* eslint-disable no-var */
    var route: typeof ziggyRoute;
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}

export interface QuantityUnitType {
    uuid: string;
    unit: string;
    description: string;
}

export interface CategoryType {
    uuid: string;
    name: string;
    description: string;
}

export interface ProductType {
    uuid: string;
    name: string;
    description: string;
    image: string;
    quantity_unit: QuantityUnitType;
    price: number;
    category: CategoryType;
}

export interface CartItemType {
    product: ProductType;
    quantity: number;
}
