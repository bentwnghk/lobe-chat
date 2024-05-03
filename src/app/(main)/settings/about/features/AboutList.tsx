'use client';

import { Grid, Icon } from '@bentwnghk/ui';
import { createStyles } from 'antd-style';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { ABOUT } from '@/const/url';

const useStyles = createStyles(({ css, token, responsive, isDarkMode }) => ({
  card: css`
    cursor: pointer;

    padding: 20px;

    background: ${isDarkMode ? token.colorFillTertiary : token.colorBgContainer};
    border: 1px solid ${token.colorFillSecondary};
    border-radius: ${token.borderRadiusLG}px;

    &:hover {
      background: ${isDarkMode ? token.colorFillSecondary : token.colorBgContainer};
      border: 1px solid ${token.colorFill};
    }

    ${responsive.mobile} {
      padding: 16px;
    }
  `,
  container: css`
    ${responsive.mobile} {
      padding-inline: 16px;
    }
  `,
}));

const AboutList = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('common');

  const items = [
    {
      href: ABOUT,
      icon: Heart,
      label: t('abouttext'),
      value: 'about',
    },
  ];

  return (
    <Grid className={styles.container} maxItemWidth={400} width={'100%'}>
      {items.map(({ value, icon, label, href }) => (
        <Link href={href} key={value} style={{ color: 'inherit' }} target={'_blank'}>
          <Flexbox className={styles.card} gap={8} horizontal>
            <Icon icon={icon} size={{ fontSize: 20 }} />
            {label}
          </Flexbox>
        </Link>
      ))}
    </Grid>
  );
});

export default AboutList;
