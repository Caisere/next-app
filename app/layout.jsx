import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageNav from "./components/pagenav";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Home",
    description: "This is the Homepage",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased text-stone-600`}
            >
                <header className="flex justify-center items-center py-4 bg-stone-400 text-amber-50 fixed top-0 right-0 left-0 z-50">
                    <PageNav /> 
                </header>
                <main className="px-4 py-2 mt-18">
                    {children}
                </main>
            </body>
        </html>
    );
}
