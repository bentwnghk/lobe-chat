import { Icon } from '@bentwnghk/ui';
import { LibraryBig } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { createModal } from '@/components/FunctionModal';

import CreateForm from './CreateForm';

const Title = () => {
  const { t } = useTranslation('knowledgeBase');
  return (
    <Flexbox gap={8} horizontal>
      <Icon icon={LibraryBig} />
      {t('createNew.title')}
    </Flexbox>
  );
};

export const useCreateNewModal = createModal((instance) => {
  return {
    content: (
      <Flexbox paddingInline={16} style={{ marginBlock: 24 }}>
        <CreateForm
          onClose={() => {
            instance.current?.destroy();
          }}
        />
      </Flexbox>
    ),
    focusTriggerAfterClose: true,
    footer: false,
    title: <Title />,
  };
});