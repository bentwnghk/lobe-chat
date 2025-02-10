import { Mock, describe, expect, it, vi } from 'vitest';

import { globalHelpers } from '@/store/global/helpers';

import { chainSummaryDescription } from '../summaryDescription';

// Mock the globalHelpers.getCurrentLanguage function
vi.mock('@/store/global/helpers', () => ({
  globalHelpers: {
    getCurrentLanguage: vi.fn(() => 'en-US'),
  },
}));

describe('chainSummaryDescription', () => {
  it('should return a payload with the correct structure and content based on the input', () => {
    const inputContent = '你是一个专业的JavaScript开发者';
    const expectedOutput = {
      messages: [
        {
          content: `你是一名擅长技能总结的助理，你需要将用户的输入的内容总结为一个角色技能简介，不超过 20 个字。内容需要确保信息清晰、逻辑清晰，并有效地传达角色的技能和经验，需要并翻译为目标语言:${globalHelpers.getCurrentLanguage()}。格式要求如下：\n输入: {文本作为JSON引用字符串} [locale]\n输出: {简介}`,
          role: 'system',
        },
        {
          content: `输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]`,
          role: 'user',
        },
        { content: '擅长文创艺术作品起名', role: 'assistant' },
        {
          content: `输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [en-US]`,
          role: 'user',
        },
        { content: 'Good at business plan writing and consulting', role: 'assistant' },
        {
          content: `输入: {You are a frontend expert. Please convert the code below to TS without modifying the implementation. If there are global variables not defined in the original JS, you need to add type declarations using declare.} [zh-CN]`,
          role: 'user',
        },
        { content: '擅长 ts 转换和补充类型声明', role: 'assistant' },
        {
          content: `输入: {
用户正常书写面向开发者的 API 用户使用文档。你需要从用户的视角来提供比较易用易读的文档内容。\n\n一个标准的 API 文档示例如下：\n\n\`\`\`markdown
---
title: useWatchPluginMessage
description: 监听获取 Mr.🆖 AI 发过来的插件消息
nav: API
---\n\n\`useWatchPluginMessage\` 是 Chat Plugin SDK 封装一个的 React Hook，用于监听从 Mr.🆖 AI 发过来的插件消息。
} [ru-RU]`,
          role: 'user',
        },
        {
          content:
            'Специализируется на создании хорошо структурированной и профессиональной документации README для GitHub с точными техническими терминами',
          role: 'assistant',
        },
        {
          content: `输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [zh-CN]`,
          role: 'user',
        },
        { content: '擅长创业计划撰写与咨询', role: 'assistant' },
        {
          content: `输入: {${inputContent}} [en-US]`,
          role: 'user',
        },
      ],
      temperature: 0,
    };

    const result = chainSummaryDescription(inputContent);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle different languages', () => {
    // Override the getCurrentLanguage mock to return a different language
    (globalHelpers.getCurrentLanguage as Mock).mockReturnValueOnce('zh-CN');

    const inputContent = '你是一个专业的JavaScript开发者';
    const result = chainSummaryDescription(inputContent);

    // Verify that the language in the output matches the mocked language
    expect(result.messages![0].content).toContain('翻译为目标语言:zh-CN');
    expect(result.messages![1].content).toContain('[zh-CN]');
  });
});
