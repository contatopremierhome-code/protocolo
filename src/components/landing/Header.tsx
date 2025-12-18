import { Gem } from 'lucide-react';

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Gem className="h-6 w-6" style={{ color: '#D4AF37' }} />
        </div>
      </div>
    </header>
  );
}
