import { ModelProviderCard } from '@/types/llm';

// ref https://docs.perplexity.ai/docs/model-cards
const Perplexity: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Perplexity 7B Online',
      enabled: true,
      id: 'llama-3-sonar-small-32k-online',
      tokens: 28_000,
    },
    {
      displayName: 'Perplexity 70B Online',
      enabled: true,
      id: 'llama-3-sonar-large-32k-online',
      tokens: 28_000,
    },
    {
      displayName: 'Perplexity 7B Chat',
      enabled: true,
      id: 'llama-3-sonar-small-32k-chat',
      tokens: 32_768,
    },
    {
      displayName: 'Perplexity 70B Chat',
      enabled: true,
      id: 'llama-3-sonar-large-32k-chat',
      tokens: 32_768,
    },
  ],
  checkModel: 'llama-3-8b-instruct',
  id: 'perplexity',
  name: 'Perplexity',
  proxyUrl: {
    placeholder: 'https://api.perplexity.ai',
  },
};

export default Perplexity;
