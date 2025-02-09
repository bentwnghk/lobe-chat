import {
  AIChatModelCard,
  AIEmbeddingModelCard,
  AIRealtimeModelCard,
  AISTTModelCard,
  AITTSModelCard,
  AIText2ImageModelCard,
} from '@/types/aiModel';

export const openaiChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT-4o mini是OpenAI在GPT-4 Omni之后推出的最新模型，支持图文输入并输出文本。作为他们最先进的小型模型，它比其他近期的前沿模型便宜很多，并且比GPT-3.5 Turbo便宜超过60%。它保持了最先进的智能，同时具有显著的性价比。GPT-4o mini在MMLU测试中获得了 82% 的得分，目前在聊天偏好上排名高于 GPT-4。',
    displayName: 'GPT-4o mini',
    enabled: true,
    id: 'gpt-4o-mini',
    maxOutput: 16_385,
    pricing: {
      input: 0.15,
      output: 0.6,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o',
    enabled: true,
    id: 'gpt-4o',
    pricing: {
      input: 2.5,
      output: 10,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 128_000,
    description:
      'o1-mini是一款针对编程、数学和科学应用场景而设计的快速、经济高效的推理模型。该模型具有128K上下文和2023年10月的知识截止日期。',
    displayName: 'OpenAI o1-mini',
    enabled: true,
    id: 'o1-mini',
    maxOutput: 65_536,
    pricing: {
      input: 1.1,
      output: 4.4,
    },
    releasedAt: '2024-09-12',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Haiku 是 Anthropic 的最快且最紧凑的模型，旨在实现近乎即时的响应。它具有快速且准确的定向性能。',
    displayName: 'Claude 3 Haiku',
    enabled: true,
    id: 'claude-3-haiku-20240307',
    maxOutput: 4096,
    pricing: {
      input: 0.25,
      output: 1.25,
    },
    releasedAt: '2024-03-07',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
    displayName: 'Claude 3.5 Haiku',
    enabled: true,
    id: 'claude-3-5-haiku-20241022',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.1,
      input: 1,
      output: 5,
      writeCacheInput: 1.25,
    },
    releasedAt: '2024-11-05',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: 'Claude 3.5 Sonnet',
    enabled: true,
    id: 'claude-3-5-sonnet-20241022',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.3,
      input: 3,
      output: 15,
      writeCacheInput: 3.75,
    },
    releasedAt: '2024-10-22',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description:
      'Gemini 2.0 Flash Exp 是 Google 最新的实验性多模态AI模型，拥有下一代特性，卓越的速度，原生工具调用以及多模态生成。',
    displayName: 'Gemini 2.0 Flash Experimental',
    enabled: true,
    id: 'gemini-2.0-flash-exp',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0,
      input: 0,
      output: 0,
    },
    releasedAt: '2024-12-11',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 2.0 Flash Thinking 是一个实验模型，经过训练后可以生成模型在响应过程中经历的思考过程。因此，思维模式的响应推理能力比基础 Gemini 2.0 Flash 模型更强。',
    displayName: 'Gemini 2.0 Flash Thinking Experimental',
    enabled: true,
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    maxOutput: 65_536,
    pricing: {
      cachedInput: 0,
      input: 0,
      output: 0,
    },
    releasedAt: '2025-01-21',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_000_000 + 8192,
    description:
      'Gemini 1.5 Flash 是 Google 最新的多模态AI模型，具备快速处理能力，支持文本、图像和视频输入，适用于多种任务的高效扩展。',
    displayName: 'Gemini 1.5 Flash',
    enabled: true,
    id: 'gemini-1.5-flash-latest',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.018_75,
      input: 0.075,
      output: 0.3,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 2_000_000 + 8192,
    description:
      'Gemini 1.5 Pro 支持高达200万个tokens，是中型多模态模型的理想选择，适用于复杂任务的多方面支持。',
    displayName: 'Gemini 1.5 Pro',
    enabled: true,
    id: 'gemini-1.5-pro-latest',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.875,
      input: 3.5,
      output: 10.5,
    },
    releasedAt: '2024-02-15',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '该模型在准确性、指令遵循和多语言能力方面有所改进。',
    displayName: 'Grok 2 1212',
    enabled: true,
    id: 'grok-2-1212',
    pricing: {
      input: 2,
      output: 10,
    },
    releasedAt: '2024-12-12',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 32_768,
    description: '该模型在准确性、指令遵循和多语言能力方面有所改进。',
    displayName: 'Grok 2 Vision 1212',
    enabled: true,
    id: 'grok-2-vision-1212',
    pricing: {
      input: 2,
      output: 10,
    },
    releasedAt: '2024-12-12',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 65_536,
    description:
      '最新模型 DeepSeek-V3 多项评测成绩超越 Qwen2.5-72B 和 Llama-3.1-405B 等开源模型，性能对齐领军闭源模型 GPT-4o 与 Claude-3.5-Sonnet。',
    displayName: 'DeepSeek V3',
    enabled: true,
    id: 'deepseek-chat',
    pricing: {
      cachedInput: 0.1,
      currency: 'CNY',
      input: 1,
      output: 2,
    },
    releasedAt: '2024-12-26',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek 推出的推理模型。在输出最终回答之前，模型会先输出一段思维链内容，以提升最终答案的准确性。',
    displayName: 'DeepSeek R1',
    enabled: true,
    id: 'deepseek-reasoner',
    pricing: {
      cachedInput: 1,
      currency: 'CNY',
      input: 4,
      output: 16,
    },
    releasedAt: '2025-01-20',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Meta Llama 3.3 多语言大语言模型 ( LLM ) 是 70B（文本输入/文本输出）中的预训练和指令调整生成模型。 Llama 3.3 指令调整的纯文本模型针对多语言对话用例进行了优化，并且在常见行业基准上优于许多可用的开源和封闭式聊天模型。',
    displayName: 'Llama 3.3 70B',
    enabled: true,
    id: 'llama-3.3-70b-versatile',
    maxOutput: 8192,
    pricing: {
      input: 0.05,
      output: 0.08,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'LLaMA 3.2 旨在处理结合视觉和文本数据的任务。它在图像描述和视觉问答等任务中表现出色，跨越了语言生成和视觉推理之间的鸿沟。',
    displayName: 'Llama 3.2 11B Vision',
    enabled: true,
    id: 'meta-llama/llama-3.2-11b-vision-instruct',
    pricing: {
      input: 0.162,
      output: 0.162,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'LLaMA 3.2 旨在处理结合视觉和文本数据的任务。它在图像描述和视觉问答等任务中表现出色，跨越了语言生成和视觉推理之间的鸿沟。',
    displayName: 'Llama 3.2 90B Vision',
    enabled: true,
    id: 'meta-llama/llama-3.2-90b-vision-instruct',
    pricing: {
      input: 0.4,
      output: 0.4,
    },
    type: 'chat',
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
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
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
    type: 'chat',
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
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'Mistral Nemo是一个与Nvidia合作开发的12B模型，提供出色的推理和编码性能，易于集成和替换。',
    displayName: 'Mistral Nemo',
    enabled: true,
    id: 'open-mistral-nemo',
    pricing: {
      input: 0.15,
      output: 0.15,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description: 'Mistral Small是成本效益高、快速且可靠的选项，适用于翻译、摘要和情感分析等用例。',
    displayName: 'Mistral Small',
    enabled: true,
    id: 'mistral-small-latest',
    pricing: {
      input: 0.2,
      output: 0.6,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'Mistral Large是旗舰大模型，擅长多语言任务、复杂推理和代码生成，是高端应用的理想选择。',
    displayName: 'Mistral Large',
    enabled: true,
    id: 'mistral-large-latest',
    pricing: {
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
    displayName: 'Qwen Turbo',
    enabled: true,
    id: 'qwen-turbo-latest',
    pricing: {
      currency: 'CNY',
      input: 0.3,
      output: 0.6,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
    displayName: 'Qwen Plus',
    enabled: true,
    id: 'qwen-plus-latest',
    pricing: {
      currency: 'CNY',
      input: 0.8,
      output: 2,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
    displayName: 'Qwen2.5-Max',
    enabled: true,
    id: 'qwen-max-latest',
    pricing: {
      currency: 'CNY',
      input: 11.2,
      output: 44.8,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description: 'GLM-4-FlashX 是Flash的增强版本，超快推理速度。',
    displayName: 'GLM-4-FlashX',
    enabled: true,
    id: 'glm-4-flashx',
    pricing: {
      currency: 'CNY',
      input: 0.1,
      output: 0.1,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 8192,
    description:
      'GLM-4V-Flash 专注于高效的单一图像理解，适用于快速图像解析的场景，例如实时图像分析或批量图像处理。',
    displayName: 'GLM-4V-Flash',
    enabled: true,
    id: 'glm-4v-flash',
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
    releasedAt: '2024-12-09',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description: 'GLM-4-Air 是性价比高的版本，性能接近GLM-4，提供快速度和实惠的价格。',
    displayName: 'GLM-4-Air',
    enabled: true,
    id: 'glm-4-air',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 1,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 8192,
    description: 'GLM-4-AirX 提供 GLM-4-Air 的高效版本，推理速度可达其2.6倍。',
    displayName: 'GLM-4-AirX',
    enabled: true,
    id: 'glm-4-airx',
    pricing: {
      currency: 'CNY',
      input: 10,
      output: 10,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 16_384,
    description: 'GLM-Zero-Preview具备强大的复杂推理能力，在逻辑推理、数学、编程等领域表现优异。',
    displayName: 'GLM-Zero-Preview',
    enabled: true,
    id: 'glm-zero-preview',
    pricing: {
      currency: 'CNY',
      input: 10,
      output: 10,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 8192,
    description:
      'Moonshot V1 8K 专为生成短文本任务设计，具有高效的处理性能，能够处理8,192个tokens，非常适合简短对话、速记和快速内容生成。',
    displayName: 'Moonshot V1 8K',
    enabled: true,
    id: 'moonshot-v1-8k',
    pricing: {
      currency: 'CNY',
      input: 12,
      output: 12,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Moonshot V1 32K 提供中等长度的上下文处理能力，能够处理32,768个tokens，特别适合生成各种长文档和复杂对话，应用于内容创作、报告生成和对话系统等领域。',
    displayName: 'Moonshot V1 32K',
    enabled: true,
    id: 'moonshot-v1-32k',
    pricing: {
      currency: 'CNY',
      input: 24,
      output: 24,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'Moonshot V1 128K 是一款拥有超长上下文处理能力的模型，适用于生成超长文本，满足复杂的生成任务需求，能够处理多达128,000个tokens的内容，非常适合科研、学术和大型文档生成等应用场景。',
    displayName: 'Moonshot V1 128K',
    enabled: true,
    id: 'moonshot-v1-128k',
    pricing: {
      currency: 'CNY',
      input: 60,
      output: 60,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 16_384,
    description: '最新高性能模型，保证高质量输出同时，推理速度大幅提升。',
    displayName: 'Yi Lightning',
    enabled: true,
    id: 'yi-lightning',
    pricing: {
      currency: 'CNY',
      input: 0.99,
      output: 0.99,
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 16_384,
    description: '复杂视觉任务模型，提供基于多张图片的高性能理解、分析能力。',
    displayName: 'Yi Vision V2',
    enabled: true,
    id: 'yi-vision-v2',
    pricing: {
      currency: 'CNY',
      input: 6,
      output: 6,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: '全新千亿参数模型，提供超强问答及文本生成能力。',
    displayName: 'Yi Large',
    enabled: true,
    id: 'yi-large',
    pricing: {
      currency: 'CNY',
      input: 20,
      output: 20,
    },
    type: 'chat',
  },
];

export const openaiEmbeddingModels: AIEmbeddingModelCard[] = [
  {
    contextWindowTokens: 8192,
    description: '最强大的向量化模型，适用于英文和非英文任务',
    displayName: 'Text Embedding 3 Large',
    id: 'text-embedding-3-large',
    maxDimension: 3072,
    pricing: {
      currency: 'USD',
      input: 0.13,
    },
    releasedAt: '2024-01-25',
    type: 'embedding',
  },
  {
    contextWindowTokens: 8192,
    description: '高效且经济的新一代 Embedding 模型，适用于知识检索、RAG 应用等场景',
    displayName: 'Text Embedding 3 Small',
    id: 'text-embedding-3-small',
    maxDimension: 1536,
    pricing: {
      currency: 'USD',
      input: 0.02,
    },
    releasedAt: '2024-01-25',
    type: 'embedding',
  },
];

// 语音合成模型
export const openaiTTSModels: AITTSModelCard[] = [
  {
    description: '最新的文本转语音模型，针对实时场景优化速度',
    displayName: 'TTS-1',
    id: 'tts-1',
    pricing: {
      input: 15,
    },
    type: 'tts',
  },
  {
    description: '最新的文本转语音模型，针对质量进行优化',
    displayName: 'TTS-1 HD',
    id: 'tts-1-hd',
    pricing: {
      input: 30,
    },
    type: 'tts',
  },
];

// 语音识别模型
export const openaiSTTModels: AISTTModelCard[] = [
  {
    description: '通用语音识别模型，支持多语言语音识别、语音翻译和语言识别',
    displayName: 'Whisper',
    id: 'whisper-1',
    pricing: {
      input: 0.006, // per minute
    },
    type: 'stt',
  },
];

// 图像生成模型
export const openaiImageModels: AIText2ImageModelCard[] = [
  {
    description:
      '最新的 DALL·E 模型，于2023年11月发布。支持更真实、准确的图像生成，具有更强的细节表现力',
    displayName: 'DALL·E 3',
    id: 'dall-e-3',
    pricing: {
      hd: 0.08,
      standard: 0.04,
    },
    resolutions: ['1024x1024', '1024x1792', '1792x1024'],
    type: 'image',
  },
  {
    description: '第二代 DALL·E 模型，支持更真实、准确的图像生成，分辨率是第一代的4倍',
    displayName: 'DALL·E 2',
    id: 'dall-e-2',
    pricing: {
      input: 0.02, // $0.020 per image (1024×1024)
    },
    resolutions: ['256x256', '512x512', '1024x1024'],
    type: 'image',
  },
];

// GPT-4o 和 GPT-4o-mini 实时模型
export const openaiRealtimeModels: AIRealtimeModelCard[] = [
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime',
    id: 'gpt-4o-realtime-preview',
    maxOutput: 4096,
    pricing: {
      audioInput: 100,
      audioOutput: 200,
      cachedAudioInput: 20,
      cachedInput: 2.5,
      input: 5,
      output: 20,
    },
    releasedAt: '2024-10-01',
    type: 'realtime',
  },
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime 10-01',
    id: 'gpt-4o-realtime-preview-2024-10-01',
    maxOutput: 4096,
    pricing: {
      audioInput: 100,
      audioOutput: 200,
      cachedAudioInput: 20,
      cachedInput: 2.5,
      input: 5,
      output: 20,
    },
    releasedAt: '2024-10-01',
    type: 'realtime',
  },
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime 12-17',
    id: 'gpt-4o-realtime-preview-2024-12-17',
    maxOutput: 4096,
    pricing: {
      audioInput: 40,
      audioOutput: 80,
      cachedAudioInput: 2.5,
      cachedInput: 2.5,
      input: 5,
      output: 20,
    },
    releasedAt: '2024-12-17',
    type: 'realtime',
  },
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o-mini 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Mini Realtime',
    id: 'gpt-4o-mini-realtime-preview',
    maxOutput: 4096,
    pricing: {
      audioInput: 10,
      audioOutput: 20,
      cachedAudioInput: 0.3,
      cachedInput: 0.3,
      input: 0.6,
      output: 2.4,
    },
    releasedAt: '2024-12-17',
    type: 'realtime',
  },
];

export const allModels = [
  ...openaiChatModels,
  ...openaiEmbeddingModels,
  ...openaiTTSModels,
  ...openaiSTTModels,
  ...openaiImageModels,
  ...openaiRealtimeModels,
];

export default allModels;
