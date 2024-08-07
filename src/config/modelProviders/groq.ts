import { ModelProviderCard } from '@/types/llm';

// ref https://console.groq.com/docs/models
const Groq: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'LLaMA 3.1 405B',
      functionCall: true,
      id: 'llama-3.1-405b-reasoning',
      tokens: 16_384,
    },
    {
      displayName: 'LLaMA 3.1 70B',
      enabled: true,
      functionCall: true,
      id: 'llama-3.1-70b-versatile',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA 3.1 8B',
      enabled: true,
      functionCall: true,
      id: 'llama-3.1-8b-instant',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA 3 70b Tool Use',
      enabled: true,
      functionCall: true,
      id: 'llama3-groq-70b-8192-tool-use-preview',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA 3 8b Tool Use',
      enabled: true,
      functionCall: true,
      id: 'llama3-groq-8b-8192-tool-use-preview',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA3 70B',
      enabled: true,
      functionCall: true,
      id: 'llama3-70b-8192',
      tokens: 8192,
    },
    {
      displayName: 'Mixtral-8x7b',
      enabled: true,
      functionCall: true,
      id: 'mixtral-8x7b-32768',
      tokens: 32_768,
    },
    {
      displayName: 'Gemma 7B',
      enabled: false,
      functionCall: true,
      id: 'gemma-7b-it',
      tokens: 8192,
    },
    {
      displayName: 'Gemma2 9B',
      enabled: true,
      functionCall: true,
      id: 'gemma2-9b-it',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA3 8B',
      enabled: true,
      functionCall: true,
      id: 'llama3-8b-8192',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA2-70b-chat',
      enabled: false,
      id: 'llama2-70b-4096',
      tokens: 4096,
    },
  ],
  checkModel: 'gemma2-9b-it',
  id: 'groq',
  name: 'Groq',
  proxyUrl: {
    placeholder: 'https://api.groq.com/openai/v1',
  },
};

export default Groq;
