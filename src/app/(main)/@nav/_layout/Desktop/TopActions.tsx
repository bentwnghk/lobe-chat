import { ActionIcon } from '@bentwnghk/ui';
import { Compass, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGlobalStore } from '@/store/global';
import { SidebarTabKey } from '@/store/global/initialState';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useSessionStore } from '@/store/session';

export interface TopActionProps {
  tab?: SidebarTabKey;
}

const TopActions = memo<TopActionProps>(({ tab }) => {
  const { t } = useTranslation('common');
  const switchBackToChat = useGlobalStore((s) => s.switchBackToChat);
  const { showMarket } = useServerConfigStore(featureFlagsSelectors);

  return (
    <>
      <Link
        aria-label={t('tab.chat')}
        href={'/chat'}
        onClick={(e) => {
          e.preventDefault();
          switchBackToChat(useSessionStore.getState().activeId);
        }}
      >
        <ActionIcon
          active={tab === SidebarTabKey.Chat}
          icon={MessageSquare}
          placement={'right'}
          size="large"
          title={t('tab.chat')}
        />
      </Link>
      {showMarket && (
        <Link aria-label={t('tab.market')} href={'/market'}>
          <ActionIcon
            active={tab === SidebarTabKey.Market}
            icon={Compass}
            placement={'right'}
            size="large"
            title={t('tab.market')}
          />
        </Link>
      )}
    </>
  );
});

export default TopActions;
