import { BrainCircuit } from 'lucide-react';

export function PowerfulQuestions() {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <div className="bg-primary/20 text-primary p-4 rounded-full mb-2">
            <BrainCircuit className="h-10 w-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
            DESCUBRA AS 600 PERGUNTAS MAIS PODEROSAS DA TERAPIA
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-body">
            Para conduzir sessões mais profundas, fortalecer vínculos com seus pacientes e se tornar referência na escuta terapêutica.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 font-body font-semibold">
            Pare de repetir sempre as mesmas perguntas. Desperte o melhor da escuta terapêutica com perguntas que abrem portas internas.
          </p>
        </div>
      </div>
    </section>
  );
}
