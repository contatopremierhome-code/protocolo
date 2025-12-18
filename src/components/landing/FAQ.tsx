import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Para quem é indicado esse material?",
    answer: "O material é ideal para psicólogos, terapeutas, psicanalistas e estudantes que desejam aprofundar suas sessões, engajar pacientes resistentes, economizar tempo na preparação e conduzir atendimentos mais eficazes."
  },
  {
    question: "Como as perguntas podem ser usadas nas sessões?",
    answer: "As perguntas podem ser utilizadas como guia para iniciar, aprofundar ou destravar conversas durante a terapia, adaptando-se a diferentes perfis de pacientes e situações clínicas. Elas servem como apoio para promover reflexões e facilitar o autoconhecimento."
  },
  {
    question: "O material é adequado para todas as abordagens terapêuticas?",
    answer: "Sim, as perguntas foram elaboradas para serem flexíveis e abrangentes, podendo ser adaptadas a diversas linhas e estilos de atendimento, como psicoterapia cognitivo-comportamental, psicanálise, terapia humanista, entre outras."
  },
  {
    question: "Terei acesso imediato ao material após a compra?",
    answer: "Sim, após a confirmação do pagamento, o acesso ao material é liberado imediatamente, permitindo que você utilize as perguntas em suas sessões sem demora."
  },
  {
    question: "E se eu não gostar do material?",
    answer: "Você conta com uma garantia incondicional de 7 dias. Se não perceber resultados ou achar que o material não é para você, basta solicitar o reembolso dentro desse prazo e 100% do valor será devolvido, sem burocracia."
  }
];

export function FAQ() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Dúvidas Frequentes</h2>
          <p className="text-lg text-foreground/70 mt-2">
            Tudo o que você precisa saber antes de garantir seu acesso.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
