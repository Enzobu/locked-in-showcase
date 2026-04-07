import { useCases } from '@/data/site';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function UseCasesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <Badge>Secteurs</Badge>
          <h2 className="text-3xl font-semibold md:text-4xl">Conçu pour des usages professionnels variés.</h2>
          <p className="text-muted-foreground">
            Entreprises, établissements, commerces, lieux de loisirs ou collectivités : la solution s’adapte à votre espace et à votre flux d’utilisateurs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full overflow-hidden border-border/70">
                <CardContent className="space-y-12 p-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-primary">
                    <Icon className="h-6 w-6" />
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
