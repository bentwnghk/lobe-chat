import { ModelProviderCard } from '@/types/llm';

// ref https://docs.perplexity.ai/docs/model-cards
const Perplexity: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Perplexity 7B Online',
      enabled: true,
      id: 'llama-3.1-sonar-small-128k-online',
      tokens: 127_072,
    },
    {
      displayName: 'Perplexity 70B Online',
      enabled: true,
      id: 'llama-3.1-sonar-large-128k-online',
      tokens: 127_072,
    },
    {
      displayName: 'Perplexity 7B Chat',
      enabled: true,
      id: 'llama-3.1-sonar-small-128k-chat',
      tokens: 131_072,
    },
    {
      displayName: 'Perplexity 70B Chat',
      enabled: true,
      id: 'llama-3.1-sonar-large-128k-chat',
      tokens: 131_072,
    },
  ],
  checkModel: 'llama-3.1-8b-instruct',
  id: 'perplexity',
  name: 'Perplexity',
  proxyUrl: {
    placeholder: 'https://api.perplexity.ai',
  },
};

export default Perplexity;
