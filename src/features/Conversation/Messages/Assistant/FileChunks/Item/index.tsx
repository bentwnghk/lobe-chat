import { Tooltip } from '@bentwnghk/ui';
import { Typography } from 'antd';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import FileIcon from '@/components/FileIcon';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useChatStore } from '@/store/chat';
import { ChatFileChunk } from '@/types/message';

import { useStyles } from './style';

export interface ChunkItemProps extends ChatFileChunk {
  index: number;
}

const ChunkItem = memo<ChunkItemProps>(({ id, fileId, text, filename, fileType }) => {
  const { styles, cx } = useStyles();
  const openFilePreview = useChatStore((s) => s.openFilePreview);

  const isMobile = useIsMobile();
  return (
    <Flexbox
      align={'center'}
      className={cx(styles.container, isMobile && styles.mobile)}
      gap={4}
      horizontal
      key={id}
      onClick={(e) => {
        e.stopPropagation();
        openFilePreview(fileId);
      }}
    >
      <FileIcon fileName={filename} fileType={fileType} size={20} variant={'pure'} />
      <Flexbox style={{ maxWidth: 200 }}>
        <Tooltip title={text.slice(0, 100) + '...'}>
          <Typography.Text ellipsis={{ tooltip: false }}>{filename}</Typography.Text>
        </Tooltip>
        {/*<Typography.Text*/}
        {/*  ellipsis={{ suffix: '...' }}*/}
        {/*  style={{ fontSize: 12, lineHeight: 1 }}*/}
        {/*  type={'secondary'}*/}
        {/*>*/}
        {/*  {text}*/}
        {/*</Typography.Text>*/}
      </Flexbox>
    </Flexbox>
  );
});

export default ChunkItem;