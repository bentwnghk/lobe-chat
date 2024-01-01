import { ActionIconGroup, useChatListActionsBar } from '@bentwnghk/ui';
import { ActionsBarProps } from '@bentwnghk/ui/es/ChatList/ActionsBar';
import { memo } from 'react';

export const ErrorActionsBar = memo<ActionsBarProps>(({ text, onActionClick }) => {
  const { regenerate, del } = useChatListActionsBar(text);

  return <ActionIconGroup items={[regenerate, del]} onActionClick={onActionClick} type="ghost" />;
});
