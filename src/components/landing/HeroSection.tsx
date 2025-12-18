'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, PlayCircle } from 'lucide-react';

export function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="pb-10 md:pb-16 bg-background pt-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight max-w-4xl">
            DESCUBRA AS <span className="font-black" style={{ color: '#D4AF37' }}>600 PERGUNTAS MAIS PODEROSAS</span> DA TERAPIA
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-foreground/80 font-body">
            Para conduzir sessões mais profundas, fortalecer vínculos com seus pacientes e se tornar referência na escuta terapêutica.
          </p>

          <div className="w-full max-w-xs mx-auto my-4">
            <div className="aspect-[9/16] w-full relative rounded-lg shadow-2xl border-4 border-foreground overflow-hidden">
              {!playVideo && (
                <button
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 z-10 cursor-pointer group"
                >
                   <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: "url('https://i.imgur.com/s9454mx.png')"}}
                   >
                     <div className="absolute inset-0 bg-black/40"></div>
                   </div>
                   <div className='relative flex flex-col items-center justify-center'>
                    <PlayCircle className="h-20 w-20 text-white text-opacity-80 transition-transform group-hover:scale-110" />
                    <span className="mt-2 text-white font-semibold text-lg">Toque para iniciar</span>
                   </div>
                </button>
              )}
              {
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/edcO_SZhVug?${playVideo ? 'autoplay=1&' : ''}mute=0&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&loop=1&playlist=edcO_SZhVug`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              }
            </div>
          </div>

          
          <a href="#offers">
            <Button size="lg" className="text-base md:text-lg font-bold px-6 md:px-10 py-7 mt-4 w-full sm:w-auto animate-pulse-glow">
              BAIXAR O MEU GUIA
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
