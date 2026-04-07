import Link from 'next/link';
import { ArrowRight, Check, Grid2X2, PlugZap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { productSizes, sectors, solutionHighlights } from '@/data/site';

export default function SolutionsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container space-y-16">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <Badge>Solutions</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Une gamme claire, une logique modulaire, une intégration sur mesure.</h1>
            <p className="max-w-2xl text-muted-foreground md:text-lg">
              Locked&apos;In associe une gamme standard de casiers connectés à une capacité de composition sur mesure. Le résultat : des baies adaptées à vos usages, vos espaces et vos contraintes.
            </p>
          </div>
          <Card className="overflow-hidden bg-card/70">
            <CardContent className="grid gap-3 p-4 sm:grid-cols-2 md:p-6">
              {solutionHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-background p-5">
                  <div className="mb-2 text-lg font-semibold">{item.title}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold md:text-4xl">Formats disponibles</h2>
            <p className="text-muted-foreground">
              Une base simple à comprendre, pensée pour couvrir les usages les plus fréquents tout en préparant des compositions mixtes dans une même baie.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {productSizes.map((item, index) => (
              <Card key={item.id} className="h-full">
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div className="flex min-h-40 items-end justify-center rounded-[1.75rem] border border-border bg-muted/50 p-4">
                    <div
                      className={`rounded-2xl ${item.id === 'scooter' ? 'w-16 border-2 border-dashed border-primary bg-primary/10' : 'w-16 bg-primary/85'}`}
                      style={{ height: item.id === 'scooter' ? 130 : [72, 96, 132, 168][index] }}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-semibold">{item.name}</div>
                    <div className="text-sm text-primary">{item.dimensions}</div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Card className="bg-card/70">
            <CardContent className="space-y-6 p-6 md:p-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <PlugZap className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold">Casier trottinette</h2>
                <p className="text-muted-foreground">
                  Un module spécifique dédié à la mobilité électrique avec passage guidon, sécurisation adaptée et recharge intégrée. Un vrai argument commercial pour les espaces tournés vers les nouveaux usages.
                </p>
              </div>
              <div className="grid gap-3">
                {['Recharge intégrée', 'Sécurisation dédiée', 'Intégration dans une baie mixte'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-card/70">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                <Grid2X2 className="h-4 w-4" />
                Exemple de baie mixte
              </div>
              <div className="grid min-h-[360px] grid-cols-4 gap-3 rounded-[2rem] border border-border bg-black p-4 dark:bg-neutral-950">
                {[
                  'S', 'M', 'S', 'Trott',
                  'XL', 'L', 'M', 'Trott',
                  'S', 'S', 'L', 'XL',
                ].map((slot, index) => (
                  <div
                    key={`${slot}-${index}`}
                    className={`rounded-2xl border px-4 py-4 text-sm font-medium text-white/90 ${
                      slot === 'Trott' ? 'border-primary/40 bg-primary/20' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4">
            <Badge>Usages</Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">Pensé pour des secteurs aux contraintes différentes.</h2>
            <p className="max-w-xl text-muted-foreground">
              La logique standard + sur mesure permet de déployer Locked&apos;In dans des contextes variés sans perdre en lisibilité ni en qualité d’expérience.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {sectors.map((item) => (
              <div key={item} className="rounded-3xl border border-border bg-card/70 px-5 py-5 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-[2rem] border border-border bg-card/70 p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="text-2xl font-semibold">Préparez déjà votre future composition.</div>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Le configurateur viendra prolonger cette logique en permettant de composer librement une baie et de visualiser l’installation finale.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/configurator">
              Voir le configurateur
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
