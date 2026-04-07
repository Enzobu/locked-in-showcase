import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { platformFeatures } from '@/data/site';

export default function PlatformPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container space-y-16">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <Badge>Plateforme</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Le logiciel qui donne toute sa valeur à la baie.</h1>
            <p className="max-w-2xl text-muted-foreground md:text-lg">
              Avec Locked&apos;In, toute l’expérience est pilotée depuis le mobile et le backoffice. L’utilisateur réserve et ouvre son casier. Le gestionnaire supervise ses installations en temps réel.
            </p>
          </div>
          <Card className="overflow-hidden bg-card/70">
            <CardContent className="grid gap-4 p-4 md:grid-cols-[0.8fr_1.2fr] md:p-6">
              <div className="rounded-[1.75rem] border border-border bg-background p-4">
                <div className="mx-auto max-w-[220px] rounded-[2rem] border border-border bg-card p-3 shadow-soft">
                  <div className="rounded-[1.4rem] bg-black p-4 text-white dark:bg-neutral-950">
                    <div className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">Application</div>
                    <div className="space-y-3">
                      {['Trouver une baie', 'Réserver un casier', 'Déverrouiller depuis le mobile'].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-background p-4 md:p-5">
                <div className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">Backoffice</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['Libre', '18'],
                    ['Réservé', '06'],
                    ['Occupé', '12'],
                    ['KO', '01'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-border bg-muted/50 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                      <div className="mt-2 text-3xl font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold md:text-4xl">Fonctionnalités clés</h2>
            <p className="text-muted-foreground">
              Une plateforme pensée pour garder un usage simple côté utilisateur et une supervision lisible côté exploitant.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="h-full">
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardContent className="space-y-3 p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-primary">Côté utilisateur</div>
              <h3 className="text-2xl font-semibold">Simple et immédiat</h3>
              <p className="text-sm text-muted-foreground">
                Trouver une baie, voir la disponibilité, réserver un casier et l’ouvrir sans friction.
              </p>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1">
            <CardContent className="space-y-3 p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-primary">Côté gestionnaire</div>
              <h3 className="text-2xl font-semibold">Pilotage centralisé</h3>
              <p className="text-sm text-muted-foreground">
                Une vue claire des baies, des casiers et de leurs états pour une exploitation plus sereine.
              </p>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1">
            <CardContent className="space-y-3 p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-primary">Côté matériel</div>
              <h3 className="text-2xl font-semibold">Serrure électronique native</h3>
              <p className="text-sm text-muted-foreground">
                La couche physique et la couche applicative sont pensées ensemble pour garder une expérience cohérente.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
