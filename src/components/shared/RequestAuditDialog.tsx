import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

type Props = {
  trigger: React.ReactNode;
};

export default function RequestAuditDialog({ trigger }: Props) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    goals: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Richiesta Audit Gratuito - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nAzienda: ${formData.company || 'N/A'}\nSito Web: ${formData.website || 'N/A'}\n\nObiettivi e sfide:\n${formData.goals}`
    );
    window.location.href = `mailto:info@vesuviodigital.com?subject=${subject}&body=${body}`;

    toast({
      title: 'Email pronta!',
      description: 'Si aprirà il tuo client email per inviare la richiesta.',
    });

    setFormData({ name: '', email: '', company: '', website: '', goals: '' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Ricevi un audit gratuito</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Azienda</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Sito Web</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">Obiettivi e sfide *</Label>
            <Textarea
              id="goals"
              required
              rows={4}
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
            />
          </div>

          <Button type="submit" variant="lava" className="w-full">
            Invia richiesta
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Oppure scrivi a{' '}
            <a href="mailto:info@vesuviodigital.com" className="underline hover:text-foreground">
              info@vesuviodigital.com
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
