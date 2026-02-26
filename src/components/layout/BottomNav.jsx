'use client';

import { NavLink } from '@/components/NavLink';
import { LayoutDashboard, FileText, PlusCircle, Settings, Calculator } from 'lucide-react';

const navItems = [
  { to: '/templates', icon: PlusCircle, label: 'Create' },
  { to: '/invoices', icon: FileText, label: 'Invoices' },
    { to: '/tools', icon: Calculator, label: 'Tools' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
