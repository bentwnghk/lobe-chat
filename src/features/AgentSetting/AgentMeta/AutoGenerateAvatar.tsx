import { ActionIcon } from '@bentwnghk/ui';
import { useTheme } from 'antd-style';
import { Wand2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useGlobalStore } from '@/store/global';
import { globalGeneralSelectors } from '@/store/global/selectors';

const EmojiPicker = dynamic(() => import('@bentwnghk/ui/es/EmojiPicker'), { ssr: false });

export interface AutoGenerateAvatarProps {
  background?: string;
  canAutoGenerate?: boolean;
  loading?: boolean;
  onChange?: (value: string) => void;
  onGenerate?: () => void;
  value?: string;
}

const AutoGenerateAvatar = memo<AutoGenerateAvatarProps>(
  ({ loading, background, value, onChange, onGenerate, canAutoGenerate }) => {
    const { t } = useTranslation('common');
    const theme = useTheme();
    const locale = useGlobalStore(globalGeneralSelectors.currentLanguage);

    return (
      <Flexbox>
        <div style={{ opacity: loading ? 0.6 : undefined }}>
          <EmojiPicker
            backgroundColor={background}
            locale={locale}
            onChange={onChange}
            value={value}
          />
        </div>
        <ActionIcon
          active
          disable={!canAutoGenerate}
          icon={Wand2}
          loading={loading}
          onClick={onGenerate}
          size="small"
          style={{
            bottom: -4,
            color: theme.colorInfo,
            insetInlineEnd: -4,
            position: 'absolute',
          }}
          title={!canAutoGenerate ? t('autoGenerateTooltipDisabled') : t('autoGenerate')}
        />
      </Flexbox>
    );
  },
);

export default AutoGenerateAvatar;
