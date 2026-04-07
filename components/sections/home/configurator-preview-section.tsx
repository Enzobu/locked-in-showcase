import Link from 'next/link';
import { ArrowRight, MoveRight } from 'lucide-react';
import { configuratorSteps } from '@/data/site';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function ConfiguratorPreviewSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="overflow-hidden bg-card/70">
          <CardContent className="p-4 md:p-6">
            <div className="rounded-[2rem] border border-border bg-background p-4 md:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-primary">Teaser configurateur</div>
                  <div className="mt-2 text-xl font-semibold">Composition libre de baie</div>
                </div>
                <div className="rounded-full border px-3 py-2 text-xs text-muted-foreground">bientôt</div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
                <div className="space-y-3 rounded-[1.5rem] border border-border bg-muted/40 p-4">
                  <div className="text-sm font-medium">Modules</div>
                  {['S', 'M', 'L', 'XL', 'Trottinette'].map((label, index) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm">
                      <span>{label}</span>
                      <span className="text-xs text-muted-foreground">{index < 4 ? 'standard' : 'spécifique'}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.5rem] border border-border bg-black p-4 dark:bg-neutral-950">
                  <div className="grid min-h-[340px] grid-cols-5 gap-2 rounded-[1.25rem] border border-white/10 bg-grid p-3 [background-size:32px_32px]">
                    {[
                      'S', 'M', 'S', 'L', 'XL',
                      'S', 'Trott', 'M', 'L', 'Trott',
                      'XL', 'S', 'M', 'L', 'S',
                      'M', 'XL', 'S', 'S', 'L',
                    ].map((slot, index) => (
                      <div
                        key={`${slot}-${index}`}
                        className={`rounded-xl border px-2 py-2 text-[11px] font-medium text-white/90 ${
                          slot === 'Trott' ? 'border-primary/40 bg-primary/20' : 'border-white/10 bg-white/5'
                        }`}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Badge>Configurateur</Badge>
          <h2 className="text-3xl font-semibold md:text-4xl">Préparez une installation sur mesure.</h2>
          <p className="max-w-xl text-muted-foreground">
            Le futur configurateur permettra de composer une baie selon une logique de grille, de mixer les formats et d’obtenir immédiatement les dimensions globales.
          </p>
          <div className="space-y-3">
            {configuratorSteps.map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-border bg-card/70 px-4 py-4 text-sm">
                <span className="text-muted-foreground">{item}</span>
                <MoveRight className="h-4 w-4 text-primary" />
              </div>
            ))}
          </div>
          <Button asChild size="lg">
            <Link href="/configurator">
              Découvrir la vision configurateur
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
