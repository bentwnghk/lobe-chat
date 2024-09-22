import { LobeHub, type LobeHubProps } from '@bentwnghk/ui/brand';
import { memo } from 'react';

import { ORG_NAME } from '@/const/branding';
import { isCustomORG } from '@/const/version';

export const OrgBrand = memo<LobeHubProps>((props) => {
  if (isCustomORG) {
    return <span>{ORG_NAME}</span>;
  }

  return <LobeHub {...props} />;
});
