import { ShieldCheck, Lock, Award } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export function AppFooter() {
  return (
    <>
      <div className="bg-foreground text-background sticky bottom-0 z-40 py-3 shadow-2xl">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center">
          <CountdownTimer initialMinutes={25} />
        </div>
      </div>
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap mb-6">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-green-600" />
              <span className="font-semibold">Garantia Total de 7 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <span className="font-semibold">Site Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-blue-600" />
              <span className="font-semibold">Pagamento Criptografado</span>
            </div>
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Protocolo Sessão de Ouro. Todos os direitos reservados.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-foreground transition-colors">Políticas de Privacidade</a>
              <span>|</span>
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-xs text-muted-foreground/70 mt-8 border-t border-border pt-6">
            <p>
              Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
