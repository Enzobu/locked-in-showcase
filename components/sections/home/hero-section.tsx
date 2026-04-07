import Link from 'next/link';
import { ArrowRight, Grid2X2, LockKeyhole, Smartphone } from 'lucide-react';
import { heroStats, productSizes, sectorCards } from '@/data/site';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Slot = {
  label: string;
  span: number;
  accent?: boolean;
};

const bayLayout: Slot[][] = [
  [
    { label: 'S', span: 2 },
    { label: 'M', span: 3 },
    { label: 'S', span: 2 },
    { label: 'Trott', span: 5, accent: true },
  ],
  [
    { label: 'XL', span: 4 },
    { label: 'M', span: 3 },
    { label: 'L', span: 3 },
    { label: 'Trott', span: 5, accent: true },
  ],
  [
    { label: 'S', span: 2 },
    { label: 'S', span: 2 },
    { label: 'L', span: 4 },
    { label: 'XL', span: 4 },
  ],
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="hero-glow left-1/2 top-12 -translate-x-1/2" />
      <div className="container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <Badge>Solution B2B connectée</Badge>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
              Casiers connectés modulaires pour espaces professionnels.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Locked&apos;In combine mobilier modulaire, serrure électronique, application mobile et backoffice pour sécuriser et piloter les espaces partagés.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/solutions">
                Découvrir les solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/platform">Découvrir la plateforme</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <Card key={item.label} className="bg-card/60 backdrop-blur">
                <CardContent className="space-y-1 p-5">
                  <div className="text-3xl font-semibold text-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative">
          <Card className="overflow-hidden border-white/10 bg-card/80">
            <CardContent className="p-0">
              <div className="grid min-h-[560px] grid-cols-1 bg-card lg:grid-cols-[1fr_0.95fr]">
                <div className="flex flex-col justify-between border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-[0.28em] text-primary">Baie modulaire</div>
                    <h2 className="text-3xl font-semibold">Composez votre installation.</h2>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      Mélangez les formats S, M, L, XL et trottinette dans une même grille selon vos usages et vos contraintes d’espace.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2">
                        <LockKeyhole className="h-4 w-4 text-primary" />
                        Serrure électronique
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        App mobile
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {productSizes.map((item, index) => (
                        <div key={item.id} className="space-y-2 text-center">
                          <div
                            className="mx-auto flex w-full items-end justify-center rounded-2xl border border-white/10 bg-muted/60"
                            style={{ height: `${index === 0 ? 88 : index === 1 ? 112 : index === 2 ? 144 : index === 3 ? 176 : 176}px` }}
                          >
                            <div
                              className={`mb-3 rounded-xl ${item.id === 'scooter' ? 'h-24 w-10 border-2 border-dashed border-primary bg-primary/10' : 'w-10 bg-primary/80'}`}
                              style={{ height: item.id === 'scooter' ? undefined : `${index === 0 ? 50 : index === 1 ? 72 : index === 2 ? 102 : 132}px` }}
                            />
                          </div>
                          <div className="text-xs font-medium">{item.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-border bg-black p-4 dark:bg-neutral-950">
                  <div className="surface-grid flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-grid p-4 [background-size:34px_34px]">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.24em] text-white/45">Aperçu baie</div>
                        <div className="mt-1 text-sm font-medium text-white/85">Composition mixte sur grille modulaire</div>
                      </div>
                      <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">
                        3 colonnes · 12 modules
                      </div>
                    </div>

                    <div className="grid flex-1 grid-cols-4 gap-3">
                      {bayLayout.map((column, columnIndex) => (
                        <div key={`column-${columnIndex}`} className="flex min-h-[360px] flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-black/30 p-3">
                          {column.map((slot, slotIndex) => (
                            <div
                              key={`${slot.label}-${slotIndex}`}
                              className={`flex items-start justify-center rounded-[1.35rem] border px-2 py-3 text-sm font-medium ${
                                slot.accent
                                  ? 'border-primary/40 bg-primary/18 text-white shadow-[inset_0_0_0_1px_rgba(193,0,0,0.08)]'
                                  : 'border-white/10 bg-white/5 text-white/85'
                              }`}
                              style={{ flex: slot.span }}
                            >
                              {slot.label}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
                      {sectorCards.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.title} className="rounded-2xl border border-white/10 bg-black/55 px-3 py-3 text-white backdrop-blur">
                            <Icon className="mb-3 h-4 w-4 text-primary" />
                            <div className="text-xs text-white/80">{item.title}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="absolute -bottom-5 -left-5 hidden rounded-3xl border border-border bg-background p-4 shadow-soft lg:block">
            <div className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <Grid2X2 className="h-3.5 w-3.5 text-primary" />
              logique de grille
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Une structure claire pour préparer le futur configurateur et composer des baies mixtes simplement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
