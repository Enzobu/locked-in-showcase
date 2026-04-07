import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactInfo } from '@/data/site';

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="space-y-5">
          <Badge>Contact</Badge>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">Parlons de votre projet.</h1>
          <p className="max-w-xl text-muted-foreground md:text-lg">
            Cette page est volontairement front-only pour l’instant. Elle permet déjà de poser une interface propre, claire et rassurante autour de la prise de contact.
          </p>
          <div className="grid gap-3">
            {contactInfo.map((item) => (
              <Card key={item.label}>
                <CardContent className="space-y-2 p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">{item.label}</div>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="bg-card/70">
          <CardContent className="p-6 md:p-8">
            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom
                  </label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Entreprise
                  </label>
                  <Input id="company" placeholder="Nom de l&apos;entreprise" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="contact@entreprise.fr" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre besoin, votre lieu, les usages visés ou le type de baie imaginé."
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">Formulaire visuel uniquement pour le moment, sans traitement côté serveur.</p>
                <Button type="submit" size="lg">
                  Envoyer
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
