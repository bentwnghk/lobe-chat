import { Icon } from '@bentwnghk/ui';
import { ChartColumnBigIcon, ShieldCheck, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import type { MenuProps } from '@/components/Menu';
import { isDeprecatedEdition } from '@/const/version';
import { ProfileTabs } from '@/store/global/initialState';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/slices/auth/selectors';

export const useCategory = () => {
  const { t } = useTranslation('auth');
  const [enableAuth, isLoginWithClerk] = useUserStore((s) => [
    authSelectors.enabledAuth(s),
    authSelectors.isLoginWithClerk(s),
  ]);

  const cateItems: MenuProps['items'] = [
    {
      icon: <Icon icon={UserCircle} />,
      key: ProfileTabs.Profile,
      label: (
        <Link href={'/profile'} onClick={(e) => e.preventDefault()}>
          {t('tab.profile')}
        </Link>
      ),
    },
    enableAuth &&
      isLoginWithClerk && {
        icon: <Icon icon={ShieldCheck} />,
        key: ProfileTabs.Security,
        label: (
          <Link href={'/profile/security'} onClick={(e) => e.preventDefault()}>
            {t('tab.security')}
          </Link>
        ),
      },
    !isDeprecatedEdition && {
      icon: <Icon icon={ChartColumnBigIcon} />,
      key: ProfileTabs.Stats,
      label: (
        <Link href={'/profile/stats'} onClick={(e) => e.preventDefault()}>
          {t('tab.stats')}
        </Link>
      ),
    },
  ].filter(Boolean) as MenuProps['items'];

  return cateItems;
};