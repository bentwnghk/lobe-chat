import { ModelProviderCard } from '@/types/llm';

// ref :https://docs.perplexity.ai/docs/model-cards
const Perplexity: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 127_072,
      description: '由 DeepSeek 推理模型提供支持的新 API 产品。',
      displayName: 'Perplexity Sonar Reasoning',
      enabled: true,
      id: 'sonar-reasoning',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 1,
        output: 5,
      },
      releasedAt: '2025-01-30',
    },
    {
      contextWindowTokens: 200_000,
      description: '支持搜索上下文的高级搜索产品，支持高级查询和跟进。',
      displayName: 'Perplexity Sonar Pro',
      enabled: true,
      id: 'sonar-pro',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 3,
        output: 15,
      },
      releasedAt: '2025-01-22',
    },
    {
      contextWindowTokens: 127_072,
      description: '基于搜索上下文的轻量级搜索产品，比 Sonar Pro 更快、更便宜。',
      displayName: 'Perplexity Sonar',
      enabled: true,
      id: 'sonar',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 1,
        output: 1,
      },
      releasedAt: '2025-01-22',
    },
  ],
  checkModel: 'sonar',
  description:
    'Perplexity 是一家领先的对话生成模型提供商，提供多种先进的Llama 3.1模型，支持在线和离线应用，特别适用于复杂的自然语言处理任务。',
  id: 'perplexity',
  modelsUrl: 'https://docs.perplexity.ai/guides/model-cards',
  name: 'Perplexity',
  proxyUrl: {
    placeholder: 'https://api.perplexity.ai',
  },
  settings: {
    // perplexity doesn't support CORS
    disableBrowserRequest: true,
    proxyUrl: {
      placeholder: 'https://api.perplexity.ai',
    },
    sdkType: 'openai',
    smoothing: {
      speed: 2,
      text: true,
    },
  },
  url: 'https://www.perplexity.ai',
};

export default Perplexity;
