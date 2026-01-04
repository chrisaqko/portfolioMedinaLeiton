
"use client";

import { useRouter } from "next/navigation";
import { HeroUIProvider } from "@heroui/react";


export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const useHref = (href: string) => process.env.BASE_PATH + href;

    return <HeroUIProvider navigate={router.push} useHref={useHref}>
        {children}
    </HeroUIProvider>;
}