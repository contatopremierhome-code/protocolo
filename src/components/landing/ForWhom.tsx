import { Users, User, UserCog, GraduationCap } from 'lucide-react';

const targetAudience = [
  {
    name: "Psicólogos",
    icon: User
  },
  {
    name: "Psicanalistas",
    icon: UserCog
  },
  {
    name: "Terapeutas em geral",
    icon: Users
  },
  {
    name: "Estudantes da área",
    icon: GraduationCap
  },
];

export function ForWhom() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Para Quem É o Guia?</h2>
          <p className="text-lg text-foreground/70 mt-2">
            Se você se identifica com um dos perfis abaixo, este arsenal é para você.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {targetAudience.map((audience) => (
            <div key={audience.name} className="flex flex-col items-center gap-4 p-4 rounded-lg transition-transform hover:scale-105 hover:bg-accent">
              <div className="bg-primary/20 text-primary p-4 rounded-full">
                <audience.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold font-headline text-foreground">{audience.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
