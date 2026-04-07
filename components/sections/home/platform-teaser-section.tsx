import Link from 'next/link';
import { ArrowRight, Smartphone, SquareTerminal } from 'lucide-react';
import { platformJourney } from '@/data/site';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function PlatformTeaserSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <Badge>Plateforme connectée</Badge>
          <h2 className="text-3xl font-semibold md:text-4xl">Une expérience fluide côté utilisateur comme côté gestionnaire.</h2>
          <p className="max-w-xl text-muted-foreground">
            L’application mobile permet de localiser, réserver et déverrouiller un casier. Le backoffice offre une vision claire des baies, des états et de l’exploitation.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/platform">
              Voir la plateforme
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden bg-card/70">
          <CardContent className="grid gap-4 p-4 md:grid-cols-[0.8fr_1.2fr] md:p-6">
            <div className="rounded-[1.75rem] border border-border bg-background p-4">
              <div className="mx-auto max-w-[220px] rounded-[2rem] border border-border bg-card p-3 shadow-soft">
                <div className="rounded-[1.4rem] bg-black p-4 text-white dark:bg-neutral-950">
                  <div className="mb-4 flex items-center justify-between text-xs text-white/70">
                    <span>Locked&apos;In</span>
                    <Smartphone className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-3">
                    {['Baie République', 'Baie Campus Nord', 'Baie Cinéma Centre'].map((item, index) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <div className="mb-1 text-sm">{item}</div>
                        <div className="text-xs text-white/70">{index + 3} casiers disponibles</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-background p-5">
              <div className="mb-5 flex items-center gap-2 text-sm font-medium">
                <SquareTerminal className="h-4 w-4 text-primary" />
                Vue gestionnaire
              </div>
              <div className="space-y-3">
                {platformJourney.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/50 p-4 text-sm">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
