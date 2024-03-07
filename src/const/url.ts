import urlJoin from 'url-join';

// import { getClientConfig } from '@/config/client';
import { withBasePath } from '@/utils/basePath';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const OFFICIAL_URL = 'https://ai.mister5.net/';

export const getCanonicalUrl = (path: string) => urlJoin(OFFICIAL_URL, path);

export const GITHUB = pkg.homepage;
export const CHANGELOG = 'https://github.com/bentwnghk/lobe-chat/blob/master/CHANGELOG.md';
export const ABOUT = 'https://mr5drive.com/';
export const FEEDBACK = 'https://mr5drive.com/';
export const DISCORD = 'https://speak.mister5.net/';
export const PRIVACY_URL = 'https://mr5drive.com/privacy';
// const { LOBE_CHAT_DOCS } = getClientConfig();
// export const DOCUMENTS = !!LOBE_CHAT_DOCS ? '/docs' : 'https://chat-docs.lobehub.com';
export const DOCUMENTS = 'https://longman.mister5.net/';
export const WIKI_PLUGIN_GUIDE = urlJoin(GITHUB, 'wiki', 'Plugin-Development');
export const MANUAL_UPGRADE_URL = 'https://ai.mister5.net';

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const MORE_MODEL_PROVIDER_REQUEST_URL = 'https://mr5drive.com';

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  mobile ? `/chat/mobile?session=${id}` : `/chat?session=${id}`;

export const imageUrl = (filename: string) => withBasePath(`/images/${filename}`);
