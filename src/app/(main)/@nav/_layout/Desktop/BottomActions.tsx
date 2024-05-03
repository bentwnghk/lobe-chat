import { ActionIcon } from '@bentwnghk/ui';
import { Book, Github } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { DISCORD, DOCUMENTS } from '@/const/url';

const BottomActions = memo(() => {
  const { t } = useTranslation('common');

  return (
    <>
      <Link aria-label={'GitHub'} href={DISCORD} target={'_blank'}>
        <ActionIcon icon={Github} placement={'right'} title={'Mr.🆖 AiSpeak'} />
      </Link>
      <Link aria-label={t('document')} href={DOCUMENTS} target={'_blank'}>
        <ActionIcon icon={Book} placement={'right'} title={t('document')} />
      </Link>
    </>
  );
});

export default BottomActions;
