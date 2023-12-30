export default {
  debug: {
    arguments: '调用参数',
    function_call: '函数调用',
    off: '关闭调试',
    on: '查看插件调用信息',
    response: '返回结果',
  },
  detailModal: {
    info: {
      description: 'API 描述',
      name: 'API 名称',
    },
    tabs: {
      info: '插件能力',
      manifest: '安装文件',
      settings: '设置',
    },
    title: '插件详情',
  },
  dev: {
    confirmDeleteDevPlugin: '即将删除该本地插件，删除后将无法找回，是否删除该插件？',
    customParams: {
      useProxy: {
        label: '通过代理安装（如遇到跨域访问错误，可尝试开启该选项后重新安装）',
      },
    },
    deleteSuccess: '插件删除成功',
    manifest: {
      identifier: {
        desc: '插件的唯一标识',
        label: '标识符',
      },
      mode: {
        'local': '可视化配置',
        'local-tooltip': '暂时不支持可视化配置',
        'url': '在线链接',
      },
      name: {
        desc: '插件标题',
        label: '标题',
        placeholder: '搜索引擎',
      },
    },
    meta: {
      author: {
        desc: '插件的作者',
        label: '作者',
      },
      avatar: {
        desc: '插件的图标，可以使用 Emoji，也可以使用 URL',
        label: '图标',
      },
      description: {
        desc: '插件描述',
        label: '描述',
        placeholder: '查询搜索引擎获取信息',
      },
      formFieldRequired: '该字段为必填项',
      homepage: {
        desc: '插件的首页',
        label: '首页',
      },
      identifier: {
        desc: '插件的唯一标识，将从 manifest 中自动识别',
        errorDuplicate: '标识符和已有插件重复，请修改标识符',
        label: '标识符',
        pattenErrorMessage: '只能输入英文字符、数字 、- 和_ 这两个符号',
      },
      manifest: {
        desc: 'Mr.🆖 Chat 将会通过该链接安装插件',
        label: '插件描述文件 (Manifest) URL',
        preview: '预览 Manifest',
        refresh: '刷新',
      },
      title: {
        desc: '插件标题',
        label: '标题',
        placeholder: '搜索引擎',
      },
    },
    metaConfig: '插件元信息配置',
    modalDesc:
      '添加自定义插件后，可用于插件开发验证，也可直接在会话中使用。插件开发请参考<1>开发文档↗</>',
    openai: {
      importUrl: '从 URL 链接导入',
      schema: 'Schema',
    },
    preview: {
      card: '预览插件展示效果',
      desc: '预览插件描述',
      title: '插件名称预览',
    },
    save: '安装插件',
    saveSuccess: '插件设置保存成功',
    tabs: {
      manifest: '功能描述清单 (Manifest)',
      meta: '插件元信息',
    },
    title: {
      create: '添加自定义插件',
      edit: '编辑自定义插件',
    },
    type: {
      lobe: 'Mr.🆖 Chat 插件',
      openai: 'OpenAI 插件',
    },
    update: '更新',
    updateSuccess: '插件设置更新成功',
  },
  error: {
    fetchError: '请求该 manifest 链接失败，请确保链接的有效性，并检查链接是否允许跨域访问',
    installError: '插件 {{name}} 安装失败',
    manifestInvalid: 'manifest 不符合规范，校验结果: \n\n {{error}}',
    noManifest: '描述文件不存在',
    openAPIInvalid: 'OpenAPI 解析失败，错误: \n\n {{error}}',
    reinstallError: '插件 {{name}} 刷新失败',
    urlError: '该链接没有返回 JSON 格式的内容, 请确保是有效的链接',
  },
  list: {
    item: {
      'deprecated.title': '已删除',
      'local.config': '配置',
      'local.title': '自定义',
    },
  },
  loading: {
    content: '调用插件中...',
    plugin: '插件运行中...',
  },
  pluginList: '插件列表',
  plugins: {
    loading: '工具检测中...',
    unknown: '未知工具',
  },
  setting: '插件设置',
  settings: {
    indexUrl: {
      title: '市场索引',
      tooltip: '暂不支持在线编辑，请通过部署时环境变量进行设置',
    },
    modalDesc: '配置插件市场的地址后，可以使用自定义的插件市场',
    title: '设置插件市场',
  },
  store: {
    actions: {
      confirmUninstall: '即将卸载该插件，卸载后将清除该插件配置，请确认你的操作',
      detail: '详情',
      install: '安装',
      manifest: '编辑安装文件',
      settings: '设置',
      uninstall: '卸载',
    },
    communityPlugin: '三方社区',
    customPlugin: '自定义',
    empty: '暂无已安装插件',
    installAllPlugins: '安装全部',
    networkError: '获取插件商店失败，请检测网络连接后重试',
    placeholder: '搜索插件名称介绍或关键词...',
    releasedAt: '发布于 {{createdAt}}',
    tabs: {
      all: '全部',
      installed: '已安装',
    },
    title: '插件商店',
  },
};
