import { Mail, Download, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: Mail,
    title: "Chega em seu e-mail",
    description: "O material é 100% digital. Assim que a compra for confirmada, você receberá o arquivo em PDF diretamente no seu e-mail e poderá fazer o download quantas vezes desejar."
  },
  {
    icon: Download,
    title: "Baixe ou imprima",
    description: "Tenha liberdade total: acesse pelo celular, tablet ou computador a qualquer hora, ou imprima para usar do seu jeito, onde quiser!"
  },
  {
    icon: Smartphone,
    title: "Use quando quiser",
    description: "O material pode ser usado sempre que quiser, depois de baixado, pode usar no celular, computador, ou impresso."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Como Você Recebe e Usa o Material</h2>
          <p className="text-lg text-foreground/70 mt-2">Acesso imediato, flexível e para sempre seu.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
              <p className="text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
