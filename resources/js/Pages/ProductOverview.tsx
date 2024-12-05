import MainLayout from '@/Layouts/MainLayout';
import { ProductType } from '@/types/global';

const ProductOverview = ({ product }: { product: ProductType }) => {
    return (
        <MainLayout>
            <section className="relative">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-0">
                    <div className="mx-auto grid grid-cols-1 gap-16 max-md:px-2 lg:grid-cols-2">
                        <div className="img">
                            <div className="img-box h-full max-lg:mx-auto">
                                <img
                                    src={`/storage/${product.image}`}
                                    alt={product.name}
                                    className="h-full object-cover max-lg:mx-auto lg:ml-auto"
                                />
                            </div>
                        </div>
                        <div className="data my-0 flex w-full items-center justify-center pr-0 max-lg:pb-10 lg:my-5 lg:pr-8 xl:my-2 xl:justify-start">
                            <div className="data w-full max-w-xl">
                                <p className="mb-4 text-lg font-medium leading-8 text-green-600">
                                    {product.category.name}
                                </p>
                                <h2 className="font-manrope mb-2 text-3xl font-bold capitalize leading-10 text-gray-900">
                                    {product.name}
                                </h2>
                                <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                                    <h6 className="font-manrope mr-5 border-gray-200 pr-5 text-2xl font-semibold leading-9 text-gray-900 sm:border-r">
                                        KES {product.price} /{' '}
                                        {product.quantity_unit.unit} (
                                        {product.quantity_unit.description})
                                    </h6>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <svg
                                                        key={index}
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clip-path="url(#clip0_12029_1640)">
                                                            <path
                                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                                fill="#FBBF24"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_12029_1640">
                                                                <rect
                                                                    width="20"
                                                                    height="20"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ),
                                            )}
                                        </div>
                                        <span className="pl-2 text-sm font-normal leading-7 text-gray-500">
                                            1624 review
                                        </span>
                                    </div>
                                </div>
                                <p className="mb-5 text-base font-normal text-gray-500">
                                    {product.description}
                                </p>
                                <ul className="mb-8 grid gap-y-4">
                                    <li className="flex items-center gap-3">
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="26"
                                                height="26"
                                                rx="13"
                                                fill="#4F46E5"
                                            />
                                            <path
                                                d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        <span className="text-base font-normal text-gray-900">
                                            Garden-picked delight
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="26"
                                                height="26"
                                                rx="13"
                                                fill="#4F46E5"
                                            />
                                            <path
                                                d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        <span className="text-base font-normal text-gray-900">
                                            Juicy and vibrant
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="26"
                                                height="26"
                                                rx="13"
                                                fill="#4F46E5"
                                            />
                                            <path
                                                d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        <span className="text-base font-normal text-gray-900">
                                            Rich and wholesome
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="26"
                                                height="26"
                                                rx="13"
                                                fill="#4F46E5"
                                            />
                                            <path
                                                d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                stroke="white"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        <span className="text-base font-normal text-gray-900">
                                            Bright and tangy
                                        </span>
                                    </li>
                                </ul>

                                <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-2">
                                    <div className="flex w-full sm:items-center sm:justify-center">
                                        <button className="group rounded-l-full border border-gray-400 bg-white px-6 py-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                            <svg
                                                className="stroke-gray-900 group-hover:stroke-black"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-opacity="0.2"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-opacity="0.2"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            className="w-full cursor-pointer border-y border-gray-400 bg-transparent px-6 py-[13px] text-center text-lg font-semibold text-gray-900 outline-0 placeholder:text-gray-900 hover:bg-gray-50 sm:max-w-[118px]"
                                            placeholder="1"
                                        />
                                        <button className="group rounded-r-full border border-gray-400 bg-white px-6 py-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                            <svg
                                                className="stroke-gray-900 group-hover:stroke-black"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke="#9CA3AF"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke="black"
                                                    stroke-opacity="0.2"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke="black"
                                                    stroke-opacity="0.2"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-green-50 px-5 py-4 text-lg font-semibold text-green-600 transition-all duration-500 hover:bg-green-100">
                                        <svg
                                            className="stroke-green-600"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                                stroke=""
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        Add to cart
                                    </button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="flex w-full items-center justify-center rounded-[100px] bg-green-600 px-5 py-4 text-center text-lg font-semibold text-white shadow-sm transition-all duration-500 hover:bg-green-700 hover:shadow-green-400">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default ProductOverview;
