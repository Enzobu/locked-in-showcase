import { valueProps } from '@/data/site';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function ValueSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <Badge>Pourquoi Locked&apos;In</Badge>
          <h2 className="text-3xl font-semibold md:text-4xl">Une solution pensée pour les lieux partagés.</h2>
          <p className="text-muted-foreground">
            Locked&apos;In ne se limite pas à un casier. C&apos;est un écosystème composé d&apos;une baie modulaire, d&apos;une électronique intégrée et d&apos;une plateforme de pilotage.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full bg-card/70">
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
      </div>
    </section>
  );
}
