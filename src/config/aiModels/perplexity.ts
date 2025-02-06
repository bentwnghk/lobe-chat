import { AIChatModelCard } from '@/types/aiModel';

const perplexityChatModels: AIChatModelCard[] = [
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 127_072,
    description:
      '由 DeepSeek 推理模型提供支持的新 API 产品。',
    displayName: 'Perplexity Sonar Reasoning',
    enabled: true,
    id: 'sonar-reasoning',
    type: 'chat',
  },
  {
    contextWindowTokens: 200_000,
    description:
      '支持搜索上下文的高级搜索产品，支持高级查询和跟进。',
    displayName: 'Perplexity Sonar Pro',
    enabled: true,
    id: 'sonar-pro',
    type: 'chat',
  },
  {
    contextWindowTokens: 127_072,
    description:
      '基于搜索上下文的轻量级搜索产品，比 Sonar Pro 更快、更便宜。',
    displayName: 'Perplexity Sonar',
    enabled: true,
    id: 'sonar',
    type: 'chat',
  },
];

export const allModels = [...perplexityChatModels];

export default allModels;