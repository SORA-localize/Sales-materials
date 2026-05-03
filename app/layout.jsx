import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "SORA Localize Demo",
    description: "SORA Localize Demo",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased`}>
                <StoreProvider>
                    <LanguageProvider>
                        <Toaster />
                        {children}
                    </LanguageProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
