import { CartItemType } from '@/types/global';
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(
            localStorage.getItem('cart_items') || '[]',
        ) as CartItemType[],
    },
    reducers: {
        addToCart(state, action) {
            if (
                state.items.some(
                    (item) => item.product.uuid === action.payload.product.uuid,
                )
            ) {
                state.items = state.items.map((item) => {
                    if (item.product.uuid === action.payload.product.uuid) {
                        return {
                            ...item,
                            quantity: item.quantity + action.payload.quantity,
                        };
                    }

                    return item;
                });
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(
                (item) => item.product.uuid !== action.payload,
            );
        },
        updateQuantity(state, action) {
            state.items = state.items.map((item) => {
                if (item.product.uuid === action.payload.product.uuid) {
                    return {
                        ...item,
                        quantity: action.payload.quantity,
                    };
                }

                return item;
            });
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
