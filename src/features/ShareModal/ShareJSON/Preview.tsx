import { Highlighter } from '@bentwnghk/ui';
import { memo } from 'react';

import { useContainerStyles } from '../style';

const Preview = memo<{ content: string }>(({ content }) => {
  const { styles } = useContainerStyles();

  return (
    <div className={styles.preview}>
      <Highlighter language={'json'} wrap>
        {content}
      </Highlighter>
    </div>
  );
});

export default Preview;
