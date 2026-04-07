import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('inline-flex items-center gap-3 font-semibold tracking-tight', className)}>
      
      <Image
        src="/logo.png"
        alt="Locked'In"
        width={40}
        height={40}
        className="rounded-xl"
      />

      <span className="text-lg">Locked&apos;In</span>
    </Link>
  );
}