'use server';

import MainLayout from '@/Layouts/MainLayout';
import { store } from '@/redux/store';
import { CartItemType } from '@/types/global';
import { Provider, useSelector } from 'react-redux';

const Checkout = ({ delivery_fees }: { delivery_fees: number }) => {
    const items = useSelector(
        (state: { cart: { items: CartItemType[] } }) => state.cart.items,
    );
    const total = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
    );

    return (
        <MainLayout>
            <Provider store={store}>
                <div className="grid p-10 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                    <div className="px-4 pt-8">
                        <p className="text-xl font-medium">Order Summary</p>
                        <p className="text-gray-400">
                            Check your items. And select a suitable shipping
                            method.
                        </p>
                        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                            <p className="text-lg font-medium">Items</p>
                            {items.length === 0 ? (
                                <p className="text-lg font-medium">
                                    No items in the cart
                                </p>
                            ) : (
                                items.map((item) => (
                                    <div
                                        key={item.product.uuid}
                                        className="flex flex-col rounded-lg bg-white sm:flex-row"
                                    >
                                        <img
                                            className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                                            src={`/storage/${item.product.image}`}
                                            alt={item.product.name}
                                        />
                                        <div className="flex w-full flex-col px-4 py-4">
                                            <span className="font-semibold">
                                                {item.product.name}
                                            </span>
                                            <span className="float-right text-gray-400">
                                                {item.quantity}{' '}
                                                {
                                                    item.product.quantity_unit
                                                        .unit
                                                }{' '}
                                                (
                                                {
                                                    item.product.quantity_unit
                                                        .description
                                                }
                                                )
                                            </span>
                                            <p className="text-lg font-bold">
                                                KES {item.product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <p className="mt-8 text-lg font-medium">
                            Shipping Methods
                        </p>
                        <form className="mt-5 grid gap-6">
                            <div className="relative">
                                <input
                                    className="peer hidden"
                                    id="radio_2"
                                    type="radio"
                                    name="radio"
                                    checked
                                    disabled
                                />
                                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
                                <label
                                    className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                                    htmlFor="radio_2"
                                >
                                    <img
                                        className="w-14 object-contain"
                                        src="/bodaboda.webp"
                                        alt=""
                                    />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold">
                                            Pay for Boda
                                        </span>
                                        <p className="text-sm leading-6 text-slate-500">
                                            Delivery: 1-2 Hours
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                        <p className="text-xl font-medium">Payment Details</p>
                        <p className="text-gray-400">
                            Complete your order by providing your payment
                            details.
                        </p>
                        <div className="">
                            <label
                                htmlFor="card-holder"
                                className="mb-2 mt-4 block text-sm font-medium"
                            >
                                Card Holder
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="card-holder"
                                    name="card-holder"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-14 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500"
                                    placeholder="Phone Number"
                                    maxLength={9}
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <span>+254</span>
                                </div>
                            </div>

                            <div className="mt-6 border-b border-t py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">
                                        Subtotal
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        KES {total}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">
                                        Shipping
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        KES {delivery_fees}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                    Total
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    KES {total + delivery_fees}
                                </p>
                            </div>
                        </div>
                        <button className="mb-8 mt-4 w-full rounded-md bg-green-600 px-6 py-3 font-medium text-white">
                            Place Order
                        </button>
                    </div>
                </div>
            </Provider>
        </MainLayout>
    );
};

export default Checkout;
