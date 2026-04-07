import { ArrowRight, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { configuratorSteps } from '@/data/site';

export default function ConfiguratorPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container space-y-12">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <Badge>Configurateur</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">La future brique pour composer une baie librement.</h1>
            <p className="max-w-2xl text-muted-foreground md:text-lg">
              Cette page pose la vision du configurateur : une composition par grille, une liberté totale dans le mélange des formats et une lecture immédiate des dimensions globales.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Échanger sur le besoin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Card className="overflow-hidden bg-card/70">
            <CardContent className="p-4 md:p-6">
              <div className="rounded-[2rem] border border-border bg-background p-4 md:p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Vision 2D de la baie</div>
                    <div className="text-sm text-muted-foreground">Base simple aujourd’hui, évolutive demain vers quelque chose de plus riche.</div>
                  </div>
                </div>
                <div className="grid min-h-[420px] grid-cols-6 gap-2 rounded-[1.5rem] border border-border bg-black p-4 dark:bg-neutral-950">
                  {[
                    'S', 'M', 'L', 'S', 'XL', 'Trott',
                    'M', 'S', 'L', 'M', 'XL', 'Trott',
                    'S', 'S', 'M', 'L', 'S', 'XL',
                    'M', 'L', 'S', 'XL', 'S', 'S',
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
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {configuratorSteps.map((item, index) => (
            <Card key={item}>
              <CardContent className="space-y-4 p-6">
                <div className="text-sm font-medium text-primary">0{index + 1}</div>
                <p className="text-sm text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
