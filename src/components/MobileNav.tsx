"use client";
import { useState } from "react";
import { navigationLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {open && (
        <div className="fixed inset-0 top-16 z-50 md:hidden">
          <div className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="container px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`px-4 py-3 rounded-md text-sm font-medium ${
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <Button asChild variant="default" className="mt-2">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Book a Call
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
