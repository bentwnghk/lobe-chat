import { Icon, MobileTabBar, type MobileTabBarProps } from '@bentwnghk/ui';
import { createStyles } from 'antd-style';
import { Bot, MessageSquare, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { rgba } from 'polished';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SidebarTabKey } from '@/store/global/initialState';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

const useStyles = createStyles(({ css, token }) => ({
  active: css`
    svg {
      fill: ${rgba(token.colorPrimary, 0.25)};
    }
  `,
}));

interface Props {
  className?: string;
  tabBarKey?: SidebarTabKey;
}

export default memo<Props>(({ className, tabBarKey }) => {
  const { t } = useTranslation('common');
  const { styles } = useStyles();
  const router = useRouter();
  const openSettings = () => {
    router.push('/settings/llm');
  };
  const { showMarket } = useServerConfigStore(featureFlagsSelectors);

  const items: MobileTabBarProps['items'] = useMemo(
    () =>
      [
        {
          icon: (active: boolean) => (
            <Icon className={active ? styles.active : undefined} icon={MessageSquare} />
          ),
          key: SidebarTabKey.Chat,
          onClick: () => {
            router.push('/chat');
          },
          title: t('tab.chat'),
        },
        showMarket && {
          icon: (active: boolean) => (
            <Icon className={active ? styles.active : undefined} icon={Bot} />
          ),
          key: SidebarTabKey.Discover,
          onClick: () => {
            router.push('/discover');
          },
          title: t('tab.discover'),
        },
        {
          icon: (active: boolean) => (
            <Icon className={active ? styles.active : undefined} icon={User} />
          ),
          key: SidebarTabKey.Setting,
          onClick: openSettings,
          title: t('tab.setting'),
        },
      ].filter(Boolean) as MobileTabBarProps['items'],
    [t],
  );

  return <MobileTabBar activeKey={tabBarKey} className={className} items={items} safeArea />;
});
