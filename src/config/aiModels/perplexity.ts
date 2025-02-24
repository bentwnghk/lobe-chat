import { AIChatModelCard } from '@/types/aiModel';

const perplexityChatModels: AIChatModelCard[] = [
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 127_072,
    description: '支持搜索上下文的高级搜索产品，支持高级查询和跟进。',
    displayName: 'Perplexity Sonar Reasoning Pro',
    enabled: true,
    id: 'sonar-reasoning-pro',
    maxOutput: 8192,
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 127_072,
    description: '支持搜索上下文的高级搜索产品，支持高级查询和跟进。',
    displayName: 'Perplexity Sonar Reasoning',
    enabled: true,
    id: 'sonar-reasoning',
    maxOutput: 8192,
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 200_000,
    description: '支持搜索上下文的高级搜索产品，支持高级查询和跟进。',
    displayName: 'Perplexity Sonar Pro',
    enabled: true,
    id: 'sonar-pro',
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 127_072,
    description: '基于搜索上下文的轻量级搜索产品，比 Sonar Pro 更快、更便宜。',
    displayName: 'Perplexity Sonar',
    enabled: true,
    id: 'sonar',
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
];

export const allModels = [...perplexityChatModels];

export default allModels;