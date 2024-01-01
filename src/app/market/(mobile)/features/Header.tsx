import { Logo, MobileNavBar } from '@bentwnghk/ui';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return <MobileNavBar center={<Logo type={'text'} />} right={<ShareAgentButton mobile />} />;
});

export default Header;
