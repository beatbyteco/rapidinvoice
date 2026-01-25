import Link from 'next/link';
import { FileText } from 'lucide-react';

const footerLinks = {
  product: [
    { href: '/templates', label: 'Invoice Generator' },
    { href: '/invoices', label: 'My Invoices' },
    { href: '/settings', label: 'Settings' },
    { href: '/blog', label: 'Blog' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/about', label: 'About Us' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16">
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">RapidInvoice</span>
            </Link>

            <p className="text-white/60 text-sm">
              Free professional invoice generator. No login required. Your data stays on your device.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} RapidInvoice. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            100% Free • No Login Required
          </p>
        </div>
      </div>
    </footer>
  );
};
