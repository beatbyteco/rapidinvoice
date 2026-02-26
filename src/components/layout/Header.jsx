'use client';

import { FileText, Plus, Settings, FileStack, Calculator } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/templates', label: 'Create', icon: Plus },
  { href: '/invoices', label: 'My Invoices', icon: FileStack },
  { href: '/tools', label: 'Tools', icon: Calculator },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export const Header = () => {
  const pathname = usePathname();

  // Hide "New Invoice" button on these pages
  const hideNewInvoiceButton = ['/generate-invoice', '/invoices', '/settings', '/templates'].some(
    (path) => pathname.startsWith(path)
  );

  return (
    <header className="sticky top-0 z-50 w-full glass-effect">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
        
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              RapidInvoice
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* New Invoice Button */}
        {!hideNewInvoiceButton && (
          <div className="flex items-center gap-3">
            <Link href="/templates">
              <Button variant="gradient" className="gap-2">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">New Invoice</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
