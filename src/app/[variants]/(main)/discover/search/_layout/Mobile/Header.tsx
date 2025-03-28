'use client';

import { MobileNavBar } from '@bentwnghk/ui/mobile';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import urlJoin from 'url-join';

import { useDiscoverTab } from '@/hooks/useDiscoverTab';
import { mobileHeaderSticky } from '@/styles/mobileHeader';

import StoreSearchBar from '../../../features/StoreSearchBar';

const Header = memo(() => {
  const router = useRouter();
  const type = useDiscoverTab();

  return (
    <MobileNavBar
      contentStyles={{ center: { display: 'none' }, left: { flex: 'none' } }}
      onBackClick={() => router.push(urlJoin('/discover', type as string))}
      right={<StoreSearchBar autoFocus={false} mobile style={{ width: '100%' }} />}
      showBackButton
      style={{
        ...mobileHeaderSticky,
        overflow: 'unset',
      }}
    />
  );
});

export default Header;
