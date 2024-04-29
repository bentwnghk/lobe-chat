'use client';

import { ActionIcon, DiscordIcon } from '@bentwnghk/ui';
import { useTheme } from 'antd-style';
import { Book, Github } from 'lucide-react';
import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { DISCORD, DOCUMENTS, GITHUB } from '@/const/url';

const Footer = memo(() => {
  const theme = useTheme();
//  const { t } = useTranslation('common');

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        © 2023 - {new Date().getFullYear()} Mr.🆖 Chat
      </span>
      <Flexbox horizontal>
        <ActionIcon
          icon={DiscordIcon}
          onClick={() => window.open(DISCORD, '__blank')}
          size={'site'}
          title={'Mr.🆖 AiSpeak'}
        />
        <ActionIcon
          icon={Book}
          onClick={() => window.open(DOCUMENTS, '__blank')}
          size={'site'}
          title={'Mr.🆖 朗文詞典'}
        />
        <ActionIcon
          icon={Github}
          onClick={() => window.open(GITHUB, '__blank')}
          size={'site'}
          title={'Mr.🆖 雲端儲存'}
        />
      </Flexbox>
    </Flexbox>
  );
});

export default Footer;
