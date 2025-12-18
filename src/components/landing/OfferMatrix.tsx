import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const BasicFeatures = [
  '600 Perguntas Poderosas (PDF)',
];

const EliteFeatures = [
  "Acesso - As 600 perguntas mais poderosas para terapias",
  "Bônus 01 - A Arte de Capturar e Manter a Atenção em Sessões Terapêuticas",
  "Bônus 02 - Sessões Transformadora. A Arte de Conduzir Terapias Mais Leves e Eficazes",
  "Bônus 03 - Exclusivo Hoje. Os segredos da terapia de casal",
  "Garantia 7 dias - Reembolso total por qualquer motivo",
];

export function OfferMatrix() {
  return (
    <section id="offers" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Escolha o Arsenal Ideal para Você</h2>
          <p className="text-lg text-foreground/70 mt-2">Dê o próximo passo para se tornar um terapeuta de elite.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {/* Basic Card */}
          <Card className="shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-headline">Protocolo Básico</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="text-4xl font-extrabold font-headline mb-4">R$ 9<span className="text-2xl align-top">,90</span></p>
              <p className="text-muted-foreground mb-6 font-bold">Pagamento Único</p>
              <ul className="space-y-3 text-left w-full">
                {BasicFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full text-md font-bold py-6">
                <Link href="https://www.google.com" target="_blank">COMPRAR VERSÃO BÁSICA</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Elite Card */}
          <Card className="shadow-2xl relative border-2 border-[#D4AF37] scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-primary-foreground px-4 py-1 rounded-full text-sm font-bold font-headline shadow-lg">
              OFERTA RECOMENDADA
            </div>
            <CardHeader className="pt-10">
              <CardTitle className="text-3xl font-headline text-center">Protocolo Sessão de Ouro <span className="text-[#D4AF37]">ELITE</span></CardTitle>
              <CardDescription className="text-center pt-2">
                A solução definitiva para quem deseja a excelência clínica. Tudo o que você precisa para nunca mais ser ignorado ou perder um paciente.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <p className="text-lg text-muted-foreground mb-2">VOCÊ VAI RECEBER TODO ESSE CONTEÚDO</p>
              <p className="text-5xl font-extrabold font-headline mb-2 text-primary">R$ 19<span className="text-3xl align-top">,90</span></p>
              <p className="text-muted-foreground mb-6 font-bold">Pagamento Único (Não possui mensalidade)</p>
              <ul className="space-y-3 text-left w-full">
                {EliteFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
               <Button asChild size="lg" className="w-full text-lg font-bold py-8 animate-pulse-glow">
                <Link href="https://www.youtube.com.br" target="_blank">QUERO O PROTOCOLO COMPLETO + BÔNUS</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
