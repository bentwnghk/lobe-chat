import { ActionIconGroup } from '@bentwnghk/ui';
import { memo } from 'react';

import { useChatListActionsBar } from '../hooks/useChatListActionsBar';
import { RenderAction } from '../types';

export const FunctionActionsBar: RenderAction = memo(({ onActionClick }) => {
  const { regenerate, divider, del } = useChatListActionsBar();
  return (
    <ActionIconGroup
      dropdownMenu={[regenerate, divider, del]}
      items={[regenerate]}
      onActionClick={onActionClick}
      type="ghost"
    />
  );
});
