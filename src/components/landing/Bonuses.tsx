import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const mainProduct = {
  src: 'https://eduprofy.com/wp-content/uploads/2025/07/a-5.png',
  alt: 'Capa do Protocolo Sessão de Ouro',
};

const bonuses = [
  {
    src: 'https://eduprofy.com/wp-content/uploads/2025/07/a-7-1024x1024.png',
    alt: 'Bônus 1: A Arte de Capturar e Manter a Atenção',
    title: 'Bônus #1',
    description: 'A Arte de Capturar e Manter a Atenção em Sessões Terapêuticas',
  },
  {
    src: 'https://eduprofy.com/wp-content/uploads/2025/07/a-6-1024x1024.png',
    alt: 'Bônus 2: Sessões Transformadoras',
    title: 'Bônus #2',
    description: 'Sessões Transformadoras: A Arte de Conduzir Terapias Mais Leves e Eficazes',
  },
  {
    src: 'https://eduprofy.com/wp-content/uploads/2025/07/a-9-1024x1024.png',
    alt: 'Bônus 3: Os segredos da terapia de casal',
    title: 'Bônus #3',
    description: 'Exclusivo Hoje: Os segredos da terapia de casal',
  },
];

export function Bonuses() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">O Que Você Vai Receber</h2>
          <p className="text-lg text-foreground/70 mt-2">
            Um arsenal completo para transformar suas sessões.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Main Product */}
          <div className="flex-shrink-0">
            <Card className="overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <Image
                  src={mainProduct.src}
                  alt={mainProduct.alt}
                  width={400}
                  height={400}
                  className="object-cover"
                  data-ai-hint="book cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Bonuses */}
          <div className="flex flex-col gap-8">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-center gap-6 transform hover:scale-105 transition-transform duration-300">
                <Card className="overflow-hidden shadow-lg flex-shrink-0">
                  <CardContent className="p-0">
                    <Image
                      src={bonus.src}
                      alt={bonus.alt}
                      width={120}
                      height={120}
                      className="object-cover"
                       data-ai-hint="book cover"
                    />
                  </CardContent>
                </Card>
                <div>
                  <h3 className="text-xl font-bold font-headline text-primary">{bonus.title}</h3>
                  <p className="text-lg text-foreground/80">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
