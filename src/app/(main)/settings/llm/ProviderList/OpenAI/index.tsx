'use client';

import { OpenAIProviderCard } from '@/config/modelProviders';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import { ProviderItem } from '../../type';

export const useOpenAIProvider = (): ProviderItem => {
  const { showOpenAIProxyUrl, showOpenAIApiKey } = useServerConfigStore(featureFlagsSelectors);
  return {
    ...OpenAIProviderCard,
    proxyUrl: showOpenAIProxyUrl && {
      placeholder: 'https://api.mr5ai.com/v1',
    },
    showApiKey: showOpenAIApiKey,
  };
};
