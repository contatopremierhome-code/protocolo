'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const testimonials = [
    {
      name: "Dra. Ana Costa",
      title: "Psicóloga Clínica",
      text: "As perguntas são incrivelmente eficazes para quebrar o gelo e aprofundar a conversa. Meus pacientes se sentem mais à vontade para explorar questões difíceis.",
      image: PlaceHolderImages.find(p => p.id === 'testimonial-1')
    },
    {
      name: "Dr. Carlos Silva",
      title: "Terapeuta Familiar",
      text: "Este protocolo economizou horas do meu tempo de preparação. As perguntas são bem estruturadas e aplicáveis a uma vasta gama de cenários.",
      image: PlaceHolderImages.find(p => p.id === 'testimonial-2')
    },
    {
        name: "Juliana Pereira",
        title: "Psicanalista",
        text: "Eu estava cética, mas a profundidade que alcancei com alguns pacientes 'resistentes' foi surpreendente. Um recurso indispensável.",
        image: PlaceHolderImages.find(p => p.id === 'testimonial-3')
    },
    {
        name: "Marcos Andrade",
        title: "Psicólogo Cognitivo-Comportamental",
        text: "As perguntas são um guia fantástico para explorar crenças centrais e padrões de pensamento. Altamente recomendado para colegas de TCC.",
        image: PlaceHolderImages.find(p => p.id === 'testimonial-4')
    },
    {
        name: "Beatriz Lima",
        title: "Terapeuta Humanista",
        text: "Um material riquíssimo que me ajuda a facilitar o processo de autoconhecimento dos meus clientes de forma genuína e empática.",
        image: PlaceHolderImages.find(p => p.id === 'testimonial-5')
    }
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
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="flex-grow p-6 flex flex-col items-center text-center">
                        <Avatar className="w-20 h-20 mb-4 border-4 border-primary/50">
                            {testimonial.image && <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-foreground/80 flex-grow">"{testimonial.text}"</p>
                        <div className="mt-4">
                            <p className="font-bold font-headline text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

      </div>
    </section>
  );
}
