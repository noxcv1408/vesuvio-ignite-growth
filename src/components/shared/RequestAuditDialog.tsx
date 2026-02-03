import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

type Props = {
  trigger: React.ReactNode;
};

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzqjgvq';

export default function RequestAuditDialog({ trigger }: Props) {
  const { language, t } = useLanguage();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [auditFormData, setAuditFormData] = useState({
    name: '',
    email: '',
    website: '',
    goals: '',
    company: '',
  });

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('name', auditFormData.name);
      payload.append('email', auditFormData.email);
      payload.append('website', auditFormData.website);
      payload.append('goals', auditFormData.goals);
      payload.append('company', auditFormData.company);

      // Honeypot for spam filtering
      payload.append('_gotcha', '');

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Form submission failed');
      }

      toast({
        title: language === 'it' ? 'Richiesta inviata!' : language === 'en' ? 'Request sent!' : 'Запрос отправлен!',
        description:
          language === 'it'
            ? 'Ti rispondiamo entro 1 giorno lavorativo.'
            : language === 'en'
              ? 'We\'ll get back to you within 1 business day.'
              : 'Ответим в течение 1 рабочего дня.',
      });

      setAuditFormData({ name: '', email: '', website: '', goals: '', company: '' });
      setOpen(false);
    } catch {
      toast({
        title: language === 'it' ? 'Errore invio' : language === 'en' ? 'Send error' : 'Ошибка отправки',
        description:
          language === 'it'
            ? 'Riprova tra poco o scrivici a info@vesuviodigital.com.'
            : language === 'en'
              ? 'Please try again or email info@vesuviodigital.com.'
              : 'Попробуйте ещё раз или напишите на info@vesuviodigital.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const dialogTitle =
    language === 'it'
      ? 'Ricevi un audit gratuito'
      : language === 'en'
        ? 'Get a free audit'
        : 'Получить бесплатный аудит';

  const dialogDescription =
    language === 'it'
      ? 'Compila i campi: ti mandiamo 5 azioni pratiche per migliorare risultati e conversioni.'
      : language === 'en'
        ? 'Fill the fields: we\'ll send 5 practical actions to improve results and conversions.'
        : 'Заполните поля: пришлём 5 практических шагов для роста и конверсий.';

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger}
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleAuditSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.contact.form.name} *</label>
              <Input
                required
                value={auditFormData.name}
                onChange={(e) => setAuditFormData({ ...auditFormData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.contact.form.email} *</label>
              <Input
                type="email"
                required
                value={auditFormData.email}
                onChange={(e) => setAuditFormData({ ...auditFormData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === 'it' ? 'Azienda' : language === 'en' ? 'Company' : 'Компания'}
            </label>
            <Input
              value={auditFormData.company}
              onChange={(e) => setAuditFormData({ ...auditFormData, company: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === 'it' ? 'Sito Web' : language === 'en' ? 'Website' : 'Сайт'}
            </label>
            <Input
              type="url"
              placeholder="https://"
              value={auditFormData.website}
              onChange={(e) => setAuditFormData({ ...auditFormData, website: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === 'it' ? 'Obiettivi principali' : language === 'en' ? 'Main goals' : 'Основные цели'} *
            </label>
            <Textarea
              required
              rows={4}
              value={auditFormData.goals}
              onChange={(e) => setAuditFormData({ ...auditFormData, goals: e.target.value })}
            />
          </div>

          <Button type="submit" variant="lava" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? '...' : language === 'it' ? 'Richiedi audit' : language === 'en' ? 'Request audit' : 'Запросить аудит'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
