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

const AUDIT_EMAIL = 'info@vesuviodigital.com';

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
  });

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Richiesta Audit Gratuito - ${auditFormData.name}`);
    const body = encodeURIComponent(
      `Nome: ${auditFormData.name}\nEmail: ${auditFormData.email}\nSito Web: ${auditFormData.website || 'N/A'}\n\nObiettivi:\n${auditFormData.goals}`
    );

    window.location.href = `mailto:${AUDIT_EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: language === 'it' ? 'Richiesta audit pronta!' : language === 'en' ? 'Audit request ready!' : 'Запрос аудита готов!',
      description:
        language === 'it'
          ? 'Si aprirà il tuo client email per inviare la richiesta.'
          : language === 'en'
            ? 'Your email client will open to send the request.'
            : 'Откроется ваш почтовый клиент для отправки запроса.',
    });

    setAuditFormData({ name: '', email: '', website: '', goals: '' });
    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger}
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{t.cta.freeAudit}</DialogTitle>
          <DialogDescription>
            {language === 'it'
              ? 'Compila i campi e ti prepariamo una email da inviare in un click.'
              : language === 'en'
                ? 'Fill the fields and we\'ll prepare an email you can send with one click.'
                : 'Заполните поля — мы подготовим письмо, которое вы отправите в один клик.'}
          </DialogDescription>
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
            {isSubmitting ? '...' : t.cta.freeAudit}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
