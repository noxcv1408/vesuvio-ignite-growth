import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

type Props = {
  trigger: React.ReactNode;
};

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdMWcv-rBA5JOyekAqcvEXwvlq-tsfAEhKDFq6usJnonqah0w/viewform?embedded=true';

export default function RequestAuditDialog({ trigger }: Props) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const title =
    language === 'it'
      ? 'Ricevi un audit gratuito'
      : language === 'en'
        ? 'Get a free audit'
        : 'Получить бесплатный аудит';

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger}
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6">
          <div className="w-full rounded-xl overflow-hidden border border-border bg-muted">
            <iframe
              title="Audit request form"
              src={GOOGLE_FORM_EMBED_URL}
              className="w-full"
              style={{ height: '70vh' }}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
            />
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            {language === 'it'
              ? 'Se il modulo non si carica, aprilo in una nuova scheda.'
              : language === 'en'
                ? 'If the form does not load, open it in a new tab.'
                : 'Если форма не загрузилась, откройте её в новой вкладке.'}{' '}
            <a
              href={GOOGLE_FORM_EMBED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {language === 'it' ? 'Apri modulo' : language === 'en' ? 'Open form' : 'Открыть форму'}
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
