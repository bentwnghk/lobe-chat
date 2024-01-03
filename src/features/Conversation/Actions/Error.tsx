import { ActionIconGroup } from '@bentwnghk/ui';
import { ActionsBarProps } from '@bentwnghk/ui/es/ChatList/ActionsBar';
import { memo } from 'react';

import { useChatListActionsBar } from '../hooks/useChatListActionsBar';

export const ErrorActionsBar = memo<ActionsBarProps>(({ text, onActionClick }) => {
  const { regenerate, del } = useChatListActionsBar(text);

  return <ActionIconGroup items={[regenerate, del]} onActionClick={onActionClick} type="ghost" />;
});
