'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = ['Ana P.', 'Beatriz M.', 'Carlos R.', 'Daniela F.', 'Eduardo S.', 'Fernanda L.'];
const cities = ['São Paulo/SP', 'Rio de Janeiro/RJ', 'Belo Horizonte/MG', 'Salvador/BA', 'Curitiba/PR', 'Porto Alegre/RS', 'Fortaleza/CE'];

export function RecentSalesPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [saleInfo, setSaleInfo] = useState({ name: '', city: '' });

  const showRandomSale = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    setSaleInfo({ name: randomName, city: randomCity });
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Popup stays visible for 5 seconds
  };

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showRandomSale();
      const interval = setInterval(showRandomSale, 20000); // Show a new popup every 20 seconds
      return () => clearInterval(interval);
    }, 5000); // First popup after 5 seconds

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 z-50 w-full max-w-sm rounded-lg border bg-card text-card-foreground shadow-xl transition-all duration-500',
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      )}
    >
      <div className="relative p-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-accent"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 text-primary p-3 rounded-full">
            <ShoppingCart className="h-6 w-6" />
          </div>
          <div>
            <p className="font-bold text-sm">
              {saleInfo.name} de {saleInfo.city}
            </p>
            <p className="text-sm text-muted-foreground">
              acaba de garantir o Protocolo Sessão de Ouro Elite!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
