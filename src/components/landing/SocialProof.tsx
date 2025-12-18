'use client';
import Image from 'next/image';

export function SocialProof() {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Quem Usa, Recomenda</h2>
          <p className="text-lg text-foreground/70 mt-2">Veja o que terapeutas de todo o Brasil estão dizendo.</p>
        </div>
        <div className="flex justify-center">
            <Image
              src="https://eduprofy.com/wp-content/uploads/2025/07/a-2.png"
              alt="Depoimentos de clientes satisfeitos"
              width={1000}
              height={800}
              className="rounded-lg shadow-2xl"
              data-ai-hint="customer testimonials"
            />
        </div>
      </div>
    </section>
  );
}
