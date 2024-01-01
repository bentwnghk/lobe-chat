import { ChatListProps, RenderMessageExtra } from '@bentwnghk/ui';

import { AssistantMessageExtra } from './Assistant';
import { UserMessageExtra } from './User';

export const renderMessagesExtra: ChatListProps['renderMessagesExtra'] = {
  assistant: AssistantMessageExtra as unknown as RenderMessageExtra,
  user: UserMessageExtra as unknown as RenderMessageExtra,
};
