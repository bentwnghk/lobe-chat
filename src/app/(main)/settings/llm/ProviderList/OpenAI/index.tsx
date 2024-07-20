'use client';

// import { OpenAI } from '@lobehub/icons';
import { LobeHub } from '@bentwnghk/ui/brand';
import { Flexbox } from 'react-layout-kit';

import { OpenAIProviderCard } from '@/config/modelProviders';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import { ProviderItem } from '../../type';

export const useOpenAIProvider = (): ProviderItem => {
  const { showOpenAIProxyUrl, showOpenAIApiKey } = useServerConfigStore(featureFlagsSelectors);
  return {
    ...OpenAIProviderCard,
    proxyUrl: showOpenAIProxyUrl && {
      placeholder: 'https://api.openai.com/v1',
    },
    showApiKey: showOpenAIApiKey,
    // title: <OpenAI.Combine size={24} />,
    title: (
      <Flexbox align={'center'} gap={4} horizontal>
        <LobeHub size={24} />
        <LobeHub size={24} type={'text'} />
      </Flexbox>
    ),
  };
};
