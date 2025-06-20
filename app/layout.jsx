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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <PageNav /> 
                {children}
            </body>
        </html>
    );
}
