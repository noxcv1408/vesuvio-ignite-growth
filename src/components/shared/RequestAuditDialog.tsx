import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

type Props = {
  trigger: React.ReactNode;
};

export default function RequestAuditDialog({ trigger }: Props) {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    goals: '',
  });

  const title =
    language === 'it'
      ? 'Ricevi un audit gratuito'
      : language === 'en'
        ? 'Get a free audit'
        : 'Получить бесплатный аудит';

  const labels = {
    name: language === 'it' ? 'Nome' : language === 'en' ? 'Name' : 'Имя',
    email: 'Email',
    company: language === 'it' ? 'Azienda' : language === 'en' ? 'Company' : 'Компания',
    website: language === 'it' ? 'Sito Web' : language === 'en' ? 'Website' : 'Сайт',
    goals: language === 'it' ? 'Obiettivi e sfide' : language === 'en' ? 'Goals and challenges' : 'Цели и задачи',
    submit: language === 'it' ? 'Invia richiesta' : language === 'en' ? 'Submit request' : 'Отправить заявку',
    sending: language === 'it' ? 'Invio in corso...' : language === 'en' ? 'Sending...' : 'Отправка...',
  };

  const messages = {
    success: language === 'it' 
      ? 'Richiesta inviata! Ti contatteremo presto.' 
      : language === 'en' 
        ? 'Request sent! We will contact you soon.' 
        : 'Заявка отправлена! Мы скоро свяжемся с вами.',
    error: language === 'it'
      ? 'Errore durante l\'invio. Riprova o scrivi a info@vesuviodigital.com'
      : language === 'en'
        ? 'Error sending request. Try again or email info@vesuviodigital.com'
        : 'Ошибка отправки. Попробуйте снова или напишите на info@vesuviodigital.com',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-audit-request', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: '✅',
        description: messages.success,
      });

      setFormData({ name: '', email: '', company: '', website: '', goals: '' });
      setOpen(false);
    } catch (error: any) {
      console.error('Error submitting audit request:', error);
      toast({
        title: '❌',
        description: messages.error,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{labels.name} *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{labels.email} *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">{labels.company}</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">{labels.website}</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">{labels.goals} *</Label>
            <Textarea
              id="goals"
              required
              rows={4}
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" variant="lava" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {labels.sending}
              </>
            ) : (
              labels.submit
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            {language === 'it'
              ? 'Oppure scrivi a '
              : language === 'en'
                ? 'Or email '
                : 'Или напишите на '}
            <a href="mailto:info@vesuviodigital.com" className="underline hover:text-foreground">
              info@vesuviodigital.com
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
