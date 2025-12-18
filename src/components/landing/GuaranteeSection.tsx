import { ShieldCheck, Download, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'GARANTIA INCONDICIONAL',
    description: 'Você tem 7 dias para experimentar o Protocolo Sessão de Ouro. Se por qualquer motivo você não gostar, basta enviar um e-mail para nosso suporte e nós devolveremos 100% do seu dinheiro, sem perguntas.',
  },
  {
    icon: Download,
    title: 'ACESSO IMEDIATO E VITALÍCIO',
    description: 'Após a confirmação do pagamento, você receberá um e-mail com acesso imediato e vitalício a todo o material. Pode baixar quantas vezes quiser.',
  },
  {
    icon: Lock,
    title: 'COMPRA SEGURA',
    description: 'Seus dados estão 100% seguros. Nosso site possui certificado de segurança e a transação é feita pela maior plataforma de produtos digitais do Brasil.',
  },
];

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Sua Compra é 100% Segura</h2>
          <p className="text-lg text-foreground/70 mt-2">
            Risco zero para você. Satisfação garantida ou seu dinheiro de volta.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="flex flex-col items-center p-6 shadow-md transition-transform hover:scale-105">
              <CardHeader className="items-center p-2">
                <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
                  <guarantee.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-headline">{guarantee.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
