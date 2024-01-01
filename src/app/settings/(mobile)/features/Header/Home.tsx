import { Logo, MobileNavBar } from '@bentwnghk/ui';
import { memo } from 'react';

const Header = memo(() => {
  return <MobileNavBar center={<Logo type={'text'} />} />;
});

export default Header;
