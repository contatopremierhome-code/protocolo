'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Hand } from 'lucide-react';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md text-center p-8">
        <DialogHeader className="items-center">
          <div className="bg-primary/20 text-primary p-3 rounded-full mb-4">
            <Hand className="h-8 w-8" />
          </div>
          <DialogTitle className="text-3xl font-bold font-headline">ESPERA!</DialogTitle>
          <DialogDescription className="text-lg mt-2">
            Não deixe sua carreira estagnar. Garanta o Protocolo Sessão de Ouro agora por <strong>menos de R$ 20,00</strong>.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <a href="#offers" onClick={() => setIsOpen(false)}>
            <Button size="lg" className="w-full text-lg font-bold py-7 animate-pulse-glow">
              SIM, QUERO GARANTIR MEU ACESSO
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
