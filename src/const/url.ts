import urlJoin from 'url-join';

import { withBasePath } from '@/utils/basePath';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const OFFICIAL_URL = 'https://ai.mister5.net/';
export const OFFICIAL_SITE = 'https://mr5drive.com/';

export const getCanonicalUrl = (path: string) => urlJoin(OFFICIAL_URL, path);

export const GITHUB = pkg.homepage;
export const GITHUB_ISSUES = urlJoin(GITHUB, 'issues/new');
export const CHANGELOG = 'https://mr5drive.com';
export const DOCKER_IMAGE = 'https://hub.docker.com/r/bentwng/lobe-chat';

export const DOCUMENTS = 'https://longman.mister5.net/';
export const USAGE_DOCUMENTS = 'https://longman.mister5.net/';
export const SELF_HOSTING_DOCUMENTS = 'https://cambridge.mister5.net/';

export const WIKI = 'https://collins.mister5.net/';
export const WIKI_PLUGIN_GUIDE = 'https://macmillan.mister5.net/';
export const MANUAL_UPGRADE_URL = 'https://ai.mister5.net';

export const BLOG = 'https://junior.mister5.net/';

export const ABOUT = OFFICIAL_SITE;
export const FEEDBACK = OFFICIAL_SITE;
export const DISCORD = 'https://speak.mister5.net';
export const PRIVACY_URL = urlJoin(OFFICIAL_SITE, '/privacy');

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const MORE_MODEL_PROVIDER_REQUEST_URL = 'https://mr5drive.com';

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  mobile ? `/chat/mobile?session=${id}` : `/chat?session=${id}`;

export const imageUrl = (filename: string) => withBasePath(`/images/${filename}`);

export const EMAIL_SUPPORT = 'mr.ng@mystudies.net';
export const EMAIL_BUSINESS = 'mr.ng@mystudies.net';
