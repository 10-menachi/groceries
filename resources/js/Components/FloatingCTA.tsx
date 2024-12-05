'use client';

import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Phone } from 'lucide-react';

export default function FloatingCTA() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="lg"
                        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-green-600 shadow-lg hover:bg-green-700"
                        onClick={() =>
                            (window.location.href = 'tel:+15551234567')
                        }
                    >
                        <Phone className="h-6 w-6" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Call us now!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
