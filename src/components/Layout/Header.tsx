"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active link detection

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    const pathname = usePathname(); // Get current path for active link detection

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Toggle menu state
    };

    const getLinkClass = (path: string): string =>
        `block py-2 px-3 md:p-0 ${
            pathname === path
                ? "text-[#81B622] font-semibold" // Active link color
                : "text-gray-900"
        } rounded hover:bg-[#ECF87F] md:hover:bg-transparent md:hover:text-[#81B622] text-lg font-medium`;

    return (
        <nav className="bg-white text-black border-b-2 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/assets/logo.png"
                        alt="AgriSense Logo"
                        width={54}
                        height={54}
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        AgriSense
                    </span>
                </Link>
                <div className="flex md:order-2 space-x-3">
                    <button
                        type="button"
                        className="font-medium rounded-lg text-base px-5 py-2.5 border-2 border-[#59981A] text-black bg-transparent hover:bg-[#ECF87F]"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="font-medium rounded-lg text-base px-5 py-2.5 max-sm:mt-4 bg-[#81B622] text-white hover:bg-green-600"
                    >
                        Get started
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 max-sm:mt-4"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        isMenuOpen ? "" : "hidden"
                    }`}
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 text-black md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <Link href="/" className={getLinkClass("/")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={getLinkClass("/about")}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className={getLinkClass("/services")}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={getLinkClass("/contact")}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
