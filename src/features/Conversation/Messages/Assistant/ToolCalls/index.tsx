import { Icon } from '@bentwnghk/ui';
import isEqual from 'fast-deep-equal';
import { Loader2, LucideChevronDown, LucideChevronRight, LucideToyBrick } from 'lucide-react';
import { CSSProperties, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useChatStore } from '@/store/chat';
import { chatSelectors } from '@/store/chat/selectors';
import { pluginHelpers, useToolStore } from '@/store/tool';
import { toolSelectors } from '@/store/tool/selectors';

import Arguments from '../../components/Arguments';
import { useStyles } from './style';

export interface InspectorProps {
  arguments?: string;
  identifier: string;
  index: number;
  messageId: string;
  style: CSSProperties;
}

const CallItem = memo<InspectorProps>(
  ({ arguments: requestArgs, messageId, index, identifier, style }) => {
    const { t } = useTranslation('plugin');
    const { styles } = useStyles();
    const [open, setOpen] = useState(false);
    const loading = useChatStore(chatSelectors.isToolCallStreaming(messageId, index));

    const pluginMeta = useToolStore(toolSelectors.getMetaById(identifier), isEqual);

    const pluginTitle = pluginHelpers.getPluginTitle(pluginMeta) ?? t('unknownPlugin');

    return (
      <Flexbox gap={8} style={style}>
        <Flexbox
          align={'center'}
          className={styles.container}
          distribution={'space-between'}
          gap={8}
          height={32}
          horizontal
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Flexbox align={'center'} gap={8} horizontal>
            {loading ? <Icon icon={Loader2} spin /> : <Icon icon={LucideToyBrick} />}
            {pluginTitle}
          </Flexbox>
          <Icon icon={open ? LucideChevronDown : LucideChevronRight} />
        </Flexbox>
        {(open || loading) && <Arguments arguments={requestArgs} />}
      </Flexbox>
    );
  },
);

export default CallItem;
