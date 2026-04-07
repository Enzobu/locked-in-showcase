import Link from 'next/link';
import { footerLinks, siteConfig } from '@/data/site';
import { Logo } from '@/components/layout/logo';

export function SiteFooter() {
  return (
    <footer className="border-t bg-card/50">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr] md:items-end">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xl text-sm text-muted-foreground">{siteConfig.description}</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Locked&apos;In. Concept vitrine front-end.</p>
        </div>
        <div className="grid gap-3 md:justify-end">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
