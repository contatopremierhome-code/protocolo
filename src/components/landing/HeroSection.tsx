'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, AlertTriangle } from 'lucide-react';

const highlightKeywords = (text: string, keywords: string[]) => {
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    const isKeyword = keywords.some(kw => kw.toLowerCase() === part.toLowerCase());
    return isKeyword ? (
      <span key={i} className="font-black" style={{ color: '#D4AF37' }}>
        {part}
      </span>
    ) : (
      part
    );
  });
};

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' }));
  }, []);

  const headlineText = "Assuma o Controle Total do Consultório com o PROTOCOLO SESSÃO DE OURO: O Arsenal que Transforma Sessões Comuns em Experiências INESQUECÍVEIS.";
  const headlineKeywords = ["Controle Total", "PROTOCOLO SESSÃO DE OURO", "INESQUECÍVEIS"];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight max-w-4xl">
            {highlightKeywords(headlineText, headlineKeywords)}
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-foreground/80 font-body">
            Chega de perguntas repetitivas e silêncios constrangedores. Use o método exato para destravar as emoções dos seus pacientes e se tornar a maior autoridade da sua região. Ou você evolui hoje, ou continuará sendo apenas mais um no mercado.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md shadow-md inline-flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <p className="font-bold font-headline">
              ATENÇÃO: Desconto exclusivo para terapeutas ativo somente HOJE: {currentDate}.
            </p>
          </div>
          <a href="#offers">
            <Button size="lg" className="text-lg font-bold px-10 py-7 mt-4 w-full sm:w-auto animate-pulse-glow">
              QUERO ACESSO IMEDIATO AO PROTOCOLO
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
