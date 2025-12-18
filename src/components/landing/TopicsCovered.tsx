import { CheckCircle } from 'lucide-react';

const topics = [
  {
    title: "Autoconhecimento e identidade",
    description: "busca por entender quem você é, seus valores, crenças e características pessoais."
  },
  {
    title: "Traumas e cura",
    description: "lidar com experiências dolorosas, buscar superação de feridas emocionais ou encontrar caminhos para a recuperação."
  },
  {
    title: "Relacionamentos e conexões",
    description: "desafios para criar, manter ou aprofundar vínculos com outras pessoas, seja em amizades, família ou relações amorosas."
  },
  {
    title: "Emoções e regulação emocional",
    description: "dificuldades para lidar com sentimentos intensos, identificar emoções ou controlar reações impulsivas."
  },
  {
    title: "Memória e experiências passadas",
    description: "lembranças marcantes, situações não resolvidas ou dificuldades para lidar com o passado."
  },
  {
    title: "Medo e coragem",
    description: "enfrentamento de situações desafiadoras, superação de inseguranças ou busca por mais autoconfiança."
  },
  {
    title: "Crescimento e mudança",
    description: "adaptação a novas fases da vida, desenvolvimento pessoal ou aceitação de transformações."
  },
  {
    title: "Futuro e sonhos",
    description: "planejamento de objetivos, expectativas para o futuro ou inseguranças sobre o que está por vir."
  },
  {
    title: "Dinheiro e recursos",
    description: "preocupações financeiras, administração de recursos ou insegurança sobre estabilidade econômica."
  },
  {
    title: "Aprendizado e sabedoria",
    description: "busca por novos conhecimentos, desenvolvimento de habilidades ou reflexão sobre experiências de vida."
  }
];

export function TopicsCovered() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
            VEJA OS TEMAS ABORDADOS
          </h2>
          <p className="text-lg text-foreground/70 mt-2">
            Explore as áreas-chave que o nosso protocolo ajuda a desvendar.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground">{topic.title}</h3>
                  <p className="text-foreground/80">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center font-bold font-headline text-xl mt-12 text-foreground">
            E MUITOOO MAIS.....
          </p>
        </div>
      </div>
    </section>
  );
}
