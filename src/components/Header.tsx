import { fullName, slogan } from "@/constants";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {fullName}
              </h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {slogan}
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Navbar />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
