import React from 'react';
import { cn } from '@/lib/utils';

import { Button } from "@/components/ui/button"


interface CustomButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, className = "" }) => {
    return (
        <Button
            className={cn("bg-[#FFC700] border-0 rounded-sm cursor-pointer font-sans text-lg font-semibold leading-8 px-5 py-6 align-middle text-center select-none  text-black hover:bg-[#FFD233]", className)}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default CustomButton;