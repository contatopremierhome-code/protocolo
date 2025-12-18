'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: 'Dr.ª Aline Santos',
    role: 'Psicóloga Clínica',
    quote: "Minhas sessões nunca mais foram as mesmas. O Protocolo Sessão de Ouro é um divisor de águas! Indispensável.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  },
  {
    name: 'Carlos Mendes',
    role: 'Terapeuta Holístico',
    quote: "Consegui destravar pacientes que estavam há meses sem evolução. O guia de perguntas é simplesmente genial.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
  },
  {
    name: 'Juliana Costa',
    role: 'Psicanalista',
    quote: "A confiança que eu passei a transmitir mudou o jogo. Meus pacientes sentem e os resultados aparecem.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
  },
  {
    name: 'Dr. Ricardo Faria',
    role: 'Psiquiatra',
    quote: "Uma ferramenta prática e de impacto imediato. Recomendo para todos os profissionais da saúde mental.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-4'),
  },
  {
    name: 'Sofia Bernardes',
    role: 'Coach de Relacionamentos',
    quote: "O retorno sobre o investimento é absurdo. O protocolo se paga na primeira sessão que você salva.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-5'),
  },
];

export function SocialProof() {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Quem Usa, Recomenda</h2>
          <p className="text-lg text-foreground/70 mt-2">Veja o que terapeutas de todo o Brasil estão dizendo.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col items-start gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                           {testimonial.image && <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint}/>}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-lg font-headline">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-base font-body text-foreground/90 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
