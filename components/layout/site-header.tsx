'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import * as React from 'react';
import { siteConfig } from '@/data/site';
import { Logo } from '@/components/layout/logo';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href="/configurator">Configurateur</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-label="Ouvrir le menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <div className="container flex flex-col gap-4 py-5">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/configurator" onClick={() => setOpen(false)}>
              Configurateur
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
