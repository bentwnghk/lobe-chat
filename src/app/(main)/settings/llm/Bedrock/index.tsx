'use client';

import { Aws, Bedrock } from '@lobehub/icons';
import { Divider, Input, Select } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { ModelProvider } from '@/libs/agent-runtime';
import { GlobalLLMProviderKey } from '@/types/user/settings';

import ProviderConfig from '../components/ProviderConfig';
import { KeyVaultsConfigKey } from '../const';

const providerKey: GlobalLLMProviderKey = 'bedrock';

const BedrockProvider = memo(() => {
  const { t } = useTranslation('modelProvider');

  return (
    <ProviderConfig
      apiKeyItems={[
        {
          children: (
            <Input.Password
              autoComplete={'new-password'}
              placeholder={t(`${providerKey}.accessKeyId.placeholder`)}
            />
          ),
          desc: t(`${providerKey}.accessKeyId.desc`),
          label: t(`${providerKey}.accessKeyId.title`),
          name: [KeyVaultsConfigKey, providerKey, 'accessKeyId'],
        },
        {
          children: (
            <Input.Password
              autoComplete={'new-password'}
              placeholder={t(`${providerKey}.secretAccessKey.placeholder`)}
            />
          ),
          desc: t(`${providerKey}.secretAccessKey.desc`),
          label: t(`${providerKey}.secretAccessKey.title`),
          name: [KeyVaultsConfigKey, providerKey, 'secretAccessKey'],
        },
        {
          children: (
            <Select
              allowClear
              options={['us-east-1', 'us-west-2', 'ap-southeast-1'].map((i) => ({
                label: i,
                value: i,
              }))}
              placeholder={'us-east-1'}
            />
          ),
          desc: t(`${providerKey}.region.desc`),
          label: t(`${providerKey}.region.title`),
          name: [KeyVaultsConfigKey, providerKey, 'region'],
        },
      ]}
      checkModel={'anthropic.claude-3-haiku-20240307-v1:0'}
      provider={ModelProvider.Bedrock}
      title={
        <Flexbox align={'center'} gap={8} horizontal>
          <Aws.Color size={32} />
          <Divider style={{ margin: '0 4px' }} type={'vertical'} />
          <Bedrock.Combine size={26} type={'color'} />
        </Flexbox>
      }
    />
  );
});

export default BedrockProvider;