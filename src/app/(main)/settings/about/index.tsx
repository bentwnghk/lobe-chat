'use client';

import {
//  SiDiscord,
//  SiGithub,
//  SiMedium,
  SiRss,
//  SiX,
} from '@icons-pack/react-simple-icons';
import { Form } from '@bentwnghk/ui';
import { Divider } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { BRANDING_NAME } from '@/const/branding';
import {
//  BLOG,
//  DISCORD,
  EMAIL_BUSINESS,
  EMAIL_SUPPORT,
//  GITHUB,
//  MEDIDUM,
  OFFICIAL_SITE,
  PRIVACY_URL,
  TERMS_URL,
//  X,
  mailTo,
} from '@/const/url';
import { useServerConfigStore } from '@/store/serverConfig';
import { serverConfigSelectors } from '@/store/serverConfig/selectors';

import AboutList from './features/AboutList';
import Analytics from './features/Analytics';
import ItemCard from './features/ItemCard';
import ItemLink from './features/ItemLink';
import Version from './features/Version';

const useStyles = createStyles(({ css, token }) => ({
  title: css`
    font-size: 14px;
    font-weight: bold;
    color: ${token.colorTextSecondary};
  `,
}));

const Page = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { t } = useTranslation('common');
  const { styles } = useStyles();
  const enabledTelemetryChat = useServerConfigStore(serverConfigSelectors.enabledTelemetryChat);

  return (
    <>
      <Form.Group
        style={{ width: '100%' }}
        title={`${t('about')} ${BRANDING_NAME}`}
        variant={'pure'}
      >
        <Flexbox gap={20} paddingBlock={20} width={'100%'}>
          <Version mobile={mobile} />
          <div className={styles.title}>{t('version')}</div>
          <div className={styles.title}>{t('abouttext')}</div>
          <Divider style={{ marginBlock: 0 }} />
          <AboutList
            ItemRender={ItemLink}
            items={[
              {
                href: OFFICIAL_SITE,
                label: t('officialSite'),
                value: 'officialSite',
              },
              {
                href: mailTo(EMAIL_SUPPORT),
                label: t('mail.support'),
                value: 'support',
              },
              {
                href: EMAIL_BUSINESS,
                label: t('mail.business'),
                value: 'business',
              },
            ]}
          />
          <Divider style={{ marginBlock: 0 }} />
          <div className={styles.title}>{t('information')}</div>
          <AboutList
            ItemRender={ItemCard}
            grid
            items={[
              {
                href: 'https://ai2.mister5.net',
                icon: SiRss,
                label: 'Mr.🆖 AI Tutor',
                value: 'feedback',
              },
              {
                href: 'https://create.mister5.net',
                icon: SiRss,
                label: t('blog'),
                value: 'blog',
              },              
              {
                href: 'https://llm.mister5.net',
                icon: SiRss,
                label: 'Mr.🆖 DocChat',
                value: 'discord',
              },
            ]}
          />
          <Divider style={{ marginBlock: 0 }} />
          <div className={styles.title}>{t('legal')}</div>
          <AboutList
            ItemRender={ItemLink}
            items={[
              {
                href: TERMS_URL,
                label: t('terms'),
                value: 'terms',
              },
              {
                href: PRIVACY_URL,
                label: t('privacy'),
                value: 'privacy',
              },
            ]}
          />
        </Flexbox>
      </Form.Group>
      {enabledTelemetryChat && <Analytics />}
    </>
  );
});

Page.displayName = 'AboutSetting';

export default Page;
