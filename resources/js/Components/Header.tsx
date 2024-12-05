'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import { updateQuantity } from '@/redux/cartSlice';
import { CartItemType, ProductType } from '@/types/global';
import { Link, useForm, usePage } from '@inertiajs/react';
import {
    LogInIcon,
    Menu,
    Search,
    ShoppingBasket,
    ShoppingCart,
} from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginSignup } from './LoginSignup';
export default function Header() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
        remember: false,
    });

    const login = () => {
        if (!data.email || !data.password) {
            toast({
                title: 'Empty Fields',
                description: 'Make sure all fields are filled',
                variant: 'destructive',
            });
        }

        post(route('login'), {
            onFinish: () => reset('password'),
            onError: (err) => {
                toast({
                    title: Object.keys(err)[0],
                    description: Object.values(err)[0],
                    variant: 'destructive',
                });
            },
            onSuccess: () => {
                setOpen(!open);
            },
        });
    };

    const user = usePage().props.auth.user;
    const items = useSelector(
        (state: { items: CartItemType[] }) => state.items,
    );
    const total = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
    );

    const signup = () => {
        if (
            !data.email ||
            !data.password ||
            !data.password_confirmation ||
            !data.name
        ) {
            toast({
                title: 'Empty Fields',
                description: 'Make sure all fields are filled',
                variant: 'destructive',
            });
        }

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
            onError: (err) => {
                toast({
                    title: Object.keys(err)[0],
                    description: Object.values(err)[0],
                    variant: 'destructive',
                });
            },
            onSuccess: () => {
                setOpen(!open);
            },
        });
    };

    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <ShoppingBasket className="h-6 w-6 text-green-600" />
                        <span className="text-xl font-bold">Fresh Market</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        <Link
                            href="/products"
                            className="text-gray-600 hover:text-green-600"
                        >
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-green-600"
                        >
                            About
                        </Link>
                    </nav>

                    {/* Search, Cart, and Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Search className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top">
                                <SheetHeader>
                                    <SheetTitle>Search Products</SheetTitle>
                                </SheetHeader>
                                <div className="py-4">
                                    <Input
                                        placeholder="Search for products..."
                                        className="mx-auto max-w-lg"
                                    />
                                </div>
                            </SheetContent>
                        </Sheet>

                        {/* Cart */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="relative"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center bg-green-600">
                                        {items.length}
                                    </Badge>
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Your Cart</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8">
                                    <CartPreview items={items} total={total} />
                                </div>
                            </SheetContent>
                        </Sheet>

                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage
                                            src=""
                                            alt="User Profile Pic"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="ml-4 mt-2 w-56">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Sheet>
                                                <SheetTrigger asChild>
                                                    <span>Profile</span>
                                                </SheetTrigger>
                                                <SheetContent>
                                                    <SheetHeader>
                                                        <SheetTitle>
                                                            Edit profile
                                                        </SheetTitle>
                                                        <SheetDescription>
                                                            Make changes to your
                                                            profile here. Click
                                                            save when you're
                                                            done.
                                                        </SheetDescription>
                                                    </SheetHeader>
                                                    <div className="grid gap-4 py-4">
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label
                                                                htmlFor="name"
                                                                className="text-right"
                                                            >
                                                                Name
                                                            </Label>
                                                            <Input
                                                                id="name"
                                                                value="Pedro Duarte"
                                                                className="col-span-3"
                                                            />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label
                                                                htmlFor="username"
                                                                className="text-right"
                                                            >
                                                                Username
                                                            </Label>
                                                            <Input
                                                                id="username"
                                                                value="@peduarte"
                                                                className="col-span-3"
                                                            />
                                                        </div>
                                                    </div>
                                                    <SheetFooter>
                                                        <SheetClose asChild>
                                                            <Button type="submit">
                                                                Save changes
                                                            </Button>
                                                        </SheetClose>
                                                    </SheetFooter>
                                                </SheetContent>
                                            </Sheet>
                                            <DropdownMenuShortcut>
                                                ⇧⌘P
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Team
                                        </DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                Invite users
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        Email
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Message
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        More...
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>
                                            New Team
                                            <DropdownMenuShortcut>
                                                ⌘+T
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuItem disabled>
                                        API
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Log out
                                        <DropdownMenuShortcut>
                                            ⇧⌘Q
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Dialog open={open} onOpenChange={setOpen}>
                                <DialogTrigger>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="relative"
                                    >
                                        <LogInIcon className="h-5 w-5" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <LoginSignup
                                        data={data}
                                        setData={setData}
                                        login={login}
                                        signup={signup}
                                    />
                                </DialogContent>
                            </Dialog>
                        )}

                        {/* Mobile Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <nav className="mt-8 flex flex-col space-y-4">
                                    <Link href="/products" className="text-lg">
                                        Products
                                    </Link>
                                    <Link href="/about" className="text-lg">
                                        About
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}

function CartPreview({
    items,
    total,
}: {
    items: CartItemType[];
    total: number;
}) {
    const dispatch = useDispatch();

    const handleQuantityChange = (
        product: ProductType,
        newQuantity: number,
    ) => {
        if (newQuantity > 0) {
            dispatch(updateQuantity({ product, quantity: newQuantity }));
        }
    };

    return (
        <div>
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.product.uuid}
                        className="flex items-center space-x-4 border-b pb-4"
                    >
                        <div className="relative h-16 w-16">
                            <img
                                src={`/storage/${item.product.image}`}
                                alt={item.product.name}
                                className="rounded object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium">{item.product.name}</h4>
                            <p className="text-sm text-gray-600">
                                {item.quantity} (
                                {item.product.quantity_unit.unit}) × KES{' '}
                                {item.product.price}
                            </p>
                            <div className="mt-2 flex items-center space-x-2">
                                <Button
                                    type="button"
                                    className="bg-gray-200 px-2 py-1 hover:bg-gray-300"
                                    onClick={() =>
                                        handleQuantityChange(
                                            item.product,
                                            item.quantity - 1,
                                        )
                                    }
                                >
                                    -
                                </Button>
                                <span className="px-4">{item.quantity}</span>
                                <Button
                                    type="button"
                                    className="bg-gray-200 px-2 py-1 hover:bg-gray-300"
                                    onClick={() =>
                                        handleQuantityChange(
                                            item.product,
                                            item.quantity + 1,
                                        )
                                    }
                                >
                                    +
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 space-y-4">
                <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>KES {total}</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/checkout">Checkout</Link>
                </Button>
            </div>
        </div>
    );
}
