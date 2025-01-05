# 新身份验证方式开发指南

Mr.🆖 AI 使用 [Auth.js v5](https://authjs.dev/) 作为外部身份验证服务。Auth.js 是一个开源的身份验证库，它提供了一种简单的方式来实现身份验证和授权功能。本文档将介绍如何使用 Auth.js 来实现新的身份验证方式。

### TOC

- [添加新的身份验证提供者](#添加新的身份验证提供者)
  - [准备工作：查阅官方的提供者列表](#准备工作查阅官方的提供者列表)
  - [步骤 1: 新增关键代码](#步骤-1-新增关键代码)
  - [步骤 2: 更新服务端配置代码](#步骤-2-更新服务端配置代码)
  - [步骤 3: 修改前端页面](#步骤-3-修改前端页面)
  - [步骤 4: 配置环境变量](#步骤-4-配置环境变量)
  - [步骤 5: 修改服务端用户信息处理逻辑](#步骤-5-修改服务端用户信息处理逻辑)

## 添加新的身份验证提供者

为了在 Mr.🆖 AI 中添加新的身份验证提供者（例如添加 Okta)，你需要完成以下步骤：

### 准备工作：查阅官方的提供者列表

首先，你需要查阅 [Auth.js 提供者列表](https://authjs.dev/reference/core/providers) 来了解是否你的提供者已经被支持。如果你的提供者已经被支持，你可以直接使用 Auth.js 提供的 SDK 来实现身份验证功能。

接下来我会以 [Okta](https://authjs.dev/reference/core/providers/okta) 为例来介绍如何添加新的身份验证提供者

### 步骤 1: 新增关键代码

打开 `src/app/api/auth/next-auth.ts` 文件，引入 `next-auth/providers/okta`

```ts
import { NextAuth } from 'next-auth';
import Auth0 from 'next-auth/providers/auth0';
import Okta from 'next-auth/providers/okta';

// 引入 Okta 提供者
```

新增预定义的服务端配置

```ts
// 导入服务器配置
const { OKTA_CLIENT_ID, OKTA_CLIENT_SECRET, OKTA_ISSUER } = getServerConfig();

const nextAuth = NextAuth({
  providers: [
    // ... 其他提供者

    Okta({
      clientId: OKTA_CLIENT_ID,
      clientSecret: OKTA_CLIENT_SECRET,
      issuer: OKTA_ISSUER,
    }),
  ],
});
```

### 步骤 2: 更新服务端配置代码

打开 `src/config/server/app.ts` 文件，在 `getAppConfig` 函数中新增 Okta 相关的环境变量

```ts
export const getAppConfig = () => {
  // ... 其他代码

  return {
    // ... 其他环境变量

    OKTA_CLIENT_ID: process.env.OKTA_CLIENT_ID || '',
    OKTA_CLIENT_SECRET: process.env.OKTA_CLIENT_SECRET || '',
    OKTA_ISSUER: process.env.OKTA_ISSUER || '',
  };
};
```

### 步骤 3: 修改前端页面

修改在 `src/features/Conversation/Error/OAuthForm.tsx` 及 `src/app/settings/common/Common.tsx` 中的 `signIn` 函数参数

默认为 `auth0`，你可以将其修改为 `okta` 以切换到 Okta 提供者，或删除该参数以支持所有已添加的身份验证服务

该值为 Auth.js 提供者 的 id，你可以阅读相应的 `next-auth/providers` 模块源码以读取默认 ID

### 步骤 4: 配置环境变量

在部署时新增 Okta 相关的环境变量 `OKTA_CLIENT_ID`、`OKTA_CLIENT_SECRET`、`OKTA_ISSUER`，并填入相应的值，即可使用

### 步骤 5: 修改服务端用户信息处理逻辑

#### 在前端获取用户信息

在前端页面中使用 `useOAuthSession()` 方法获取后端返回的用户信息 `user`：

```ts
import { useOAuthSession } from '@/hooks/useOAuthSession';

const { user, isOAuthLoggedIn } = useOAuthSession();
```

默认的 `user` 类型为 `User`，类型定义为：

```ts
interface User {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
```

#### 修改用户 `id` 处理逻辑

`user.id` 用于标识用户。当引入新身份 OAuth 提供者后，您需要在 `src/app/api/auth/next-auth.ts` 中处理 OAuth 回调所携带的信息。您需要从中选取用户的 `id`。在此之前，我们需要了解 `Auth.js` 的数据处理顺序：

```txt
authorize --> jwt --> session
```

默认情况下，在 `jwt --> session` 过程中，`Auth.js` 会[自动根据登陆类型](https://authjs.dev/reference/core/types#provideraccountid)将用户 `id` 赋值到 `account.providerAccountId` 中。 如果您需要选取其他值作为用户 `id` ，您需要实现以下处理逻辑。

```ts
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        // 您可以从 `account` 或 `profile` 中选取其他值
        token.userId = account.providerAccountId;
      }
      return token;
    },
  },
```

#### 自定义 `session` 返回

如果您想在 `session` 中携带更多关于 `profile` 及 `account` 的信息，根据上面提到的 `Auth.js` 数据处理顺序，那必须先将该信息复制到 `token` 上。
示例：把用户头像 URL：`profile.picture` 添加到`session` 中：

```diff
  callbacks: {
    async jwt({ token, profile, account }) {
      if (profile && account) {
        token.userId = account.providerAccountId;
+       token.avatar = profile.picture;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId ?? session.user.id;
+       session.user.avatar = token.avatar;
      }
      return session;
    },
  },
```

然后补充对新增参数的类型定义：

```ts
declare module '@auth/core/jwt' {
  interface JWT {
    // ...
    avatar?: string;
  }
}

declare module 'next-auth' {
  interface User {
    avatar?: string;
  }
}
```

> [更多`Auth.js`内置类型拓展](https://authjs.dev/getting-started/typescript#module-augmentation)

#### 在处理逻辑中区分多个身份验证提供者

如果您配置了多个身份验证提供者，并且他们的 `userId` 映射各不相同，可以在 `jwt` 方法中的 `account.provider` 参数获取身份提供者的默认 id ，从而进入不同的处理逻辑。

```ts
  callbacks: {
    async jwt({ token, profile, account }) {
      if (profile && account) {
        if (account.provider === 'Authing')
          token.userId = account.providerAccountId ?? token.sub;
        else if (acount.provider === 'Okta')
          token.userId = profile.sub ?? token.sub;
        else
          // other providers
      }
      return token;
    },
  }
```
