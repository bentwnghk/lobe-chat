import {
  Ai360,
  AiMass,
  Anthropic,
  Baichuan,
  Claude,
  DeepSeek,
  Gemini,
  Google,
  Groq,
  Minimax,
  Mistral,
  Moonshot,
  Novita,
  OpenRouter,
  Perplexity,
  Stepfun,
  Together,
  Tongyi,
  ZeroOne,
  Zhipu,
} from '@lobehub/icons';
import { Divider } from 'antd';
import { useTheme } from 'antd-style';
import { useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import {
  Ai360ProviderCard,
  AnthropicProviderCard,
  BaichuanProviderCard,
  DeepSeekProviderCard,
  GoogleProviderCard,
  GroqProviderCard,
  MinimaxProviderCard,
  MistralProviderCard,
  MoonshotProviderCard,
  NovitaProviderCard,
  OpenRouterProviderCard,
  PerplexityProviderCard,
  QwenProviderCard,
  StepfunProviderCard,
  TaichuProviderCard,
  TogetherAIProviderCard,
  ZeroOneProviderCard,
  ZhiPuProviderCard,
} from '@/config/modelProviders';

import { ProviderItem } from '../type';
import { useAzureProvider } from './Azure';
import { useBedrockProvider } from './Bedrock';
import { useOllamaProvider } from './Ollama';
import { useOpenAIProvider } from './OpenAI';

const BASE_DOC_URL = 'https://www.google.com';

const AnthropicBrand = () => {
  const { isDarkMode } = useTheme();
  return <Anthropic.Text color={isDarkMode ? undefined : Claude.colorPrimary} size={15} />;
};

const MoonshotBrand = () => {
  const theme = useTheme();
  return (
    <Moonshot.Combine
      color={theme.isDarkMode ? theme.colorText : Moonshot.colorPrimary}
      size={22}
    />
  );
};

const GroqBrand = () => {
  const theme = useTheme();

  return <Groq.Text color={theme.isDarkMode ? theme.colorText : Groq.colorPrimary} size={20} />;
};

const GoogleBrand = () => (
  <Flexbox align={'center'} gap={8} horizontal>
    <Google.BrandColor size={22} />
    <Divider style={{ margin: '0 4px' }} type={'vertical'} />
    <Gemini.Combine size={22} type={'color'} />
  </Flexbox>
);

export const useProviderList = (): ProviderItem[] => {
  const azureProvider = useAzureProvider();
  const ollamaProvider = useOllamaProvider();
  const openAIProvider = useOpenAIProvider();
  const bedrockProvider = useBedrockProvider();

  return useMemo(
    () => [
      {
        ...openAIProvider,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=Mr.🆖 AI Hub'),
      },
      {
        ...ollamaProvider,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=ollama'),
      },
      {
        ...azureProvider,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=azure'),
      },
      {
        ...GoogleProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=gemini'),
        title: <GoogleBrand />,
      },
      {
        ...AnthropicProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=anthropic'),
        title: <AnthropicBrand />,
      },
      {
        ...bedrockProvider,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=bedrock'),
      },
      {
        ...GroqProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=groq'),
        title: <GroqBrand />,
      },
      {
        ...OpenRouterProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=openrouter'),
        title: <OpenRouter.Combine iconProps={{ color: OpenRouter.colorPrimary }} size={20} />,
      },
      {
        ...NovitaProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=novita'),
        title: <Novita.Combine size={20} type={'color'} />,
      },
      {
        ...TogetherAIProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=togetherai'),
        title: <Together.Combine size={26} type={'color'} />,
      },
      {
        ...QwenProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=qwen'),
        title: <Tongyi.Combine extra={'千问'} size={26} type={'color'} />,
      },
      {
        ...DeepSeekProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=deepseek'),
        title: <DeepSeek.Combine size={28} type={'color'} />,
      },
      {
        ...MinimaxProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=minimax'),
        title: <Minimax.Combine size={32} type={'color'} />,
      },
      {
        ...MistralProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=mistral'),
        title: <Mistral.Combine size={26} type={'color'} />,
      },
      {
        ...MoonshotProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=moonshot'),
        title: <MoonshotBrand />,
      },
      {
        ...PerplexityProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=perplexity'),
        title: <Perplexity.Combine size={24} type={'color'} />,
      },
      {
        ...ZhiPuProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=zhipu'),
        title: <Zhipu.Combine size={32} type={'color'} />,
      },
      {
        ...ZeroOneProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=01ai'),
        title: <ZeroOne.Text size={20} />,
      },
      {
        ...StepfunProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=stepfun'),
        title: <Stepfun.Combine size={20} type={'color'} />,
      },
      {
        ...BaichuanProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=baichuan'),
        title: <Baichuan.Combine size={ 20 } type={ 'color' } />,
      },
      {
        ...TaichuProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=taichu'),
        title: <AiMass.Combine size={ 28 } type={ 'color' } />,
      },
      {
        ...Ai360ProviderCard,
        docUrl: urlJoin(BASE_DOC_URL, 'search?q=ai360'),
        title: <Ai360.Combine size={ 20 } type={ 'color' } />,
      },
    ],
    [azureProvider, ollamaProvider, ollamaProvider, bedrockProvider],
  );
};
