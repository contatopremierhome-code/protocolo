import { AlertTriangle } from 'lucide-react';

export function Header() {
  const today = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
  });

  return (
    <header className="py-0 px-0 sm:px-0 lg:px-0 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="bg-yellow-100 border-b-4 border-yellow-500 text-yellow-800 p-3 text-center shadow-md flex items-center justify-center gap-3 w-full">
        <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
        <p className="font-headline text-sm md:text-base">
          <span className="font-extrabold">ATENÇÃO:</span> Desconto <span className="font-extrabold">exclusivo</span> somente <span className="font-extrabold underline">HOJE, {today}</span>.
        </p>
      </div>
      <div className="container mx-auto flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* O logo foi removido */}
        </div>
      </div>
    </header>
  );
}
