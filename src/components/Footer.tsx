import { footer } from "@/constants";
import { fullName, slogan } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {fullName}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {slogan}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {footer.tagline}
            </p>
            <div className="flex space-x-4">
              {footer.socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <footer.contactIcons.mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                {footer.contact.email}
              </li>
              <li className="flex items-start">
                <footer.contactIcons.phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                {footer.contact.phone}
              </li>
              <li className="flex items-start">
                <footer.contactIcons.mapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                {footer.contact.address}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {footer.newsletterText}
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-white dark:bg-gray-800"
              />
              <Button variant="default" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
            {footer.legal}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {footer.legalLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-xs text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
