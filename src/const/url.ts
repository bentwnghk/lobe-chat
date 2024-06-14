import qs from 'query-string';
import urlJoin from 'url-join';

import { withBasePath } from '@/utils/basePath';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const OFFICIAL_URL = 'https://ai.mister5.net/';
export const OFFICIAL_SITE = withBasePath(`/`);

export const getCanonicalUrl = (path: string) => urlJoin(OFFICIAL_URL, path);

export const GITHUB = pkg.homepage;
export const GITHUB_ISSUES = withBasePath(`/settings/modal?session=inbox&tab=llm`);
export const CHANGELOG = 'https://api.mister5.net';
export const DOCKER_IMAGE = 'https://hub.docker.com/r/bentwng/lobe-chat';

export const DOCUMENTS = 'https://longman.mister5.net/';
export const USAGE_DOCUMENTS = 'https://google.com/';
export const SELF_HOSTING_DOCUMENTS = 'https://cambridge.mister5.net/';

export const WIKI = 'https://collins.mister5.net/';
export const WIKI_PLUGIN_GUIDE = 'https://macmillan.mister5.net/';
export const MANUAL_UPGRADE_URL = 'https://ai.mister5.net';

export const BLOG = 'https://status.mr5drive.com/';

export const ABOUT = OFFICIAL_SITE;
export const FEEDBACK = OFFICIAL_SITE;
export const DISCORD = 'https://speak.mister5.net';
export const PRIVACY_URL = 'https://longman.mister5.net';
export const TERMS_URL = 'https://speak.mister5.net';

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const MORE_MODEL_PROVIDER_REQUEST_URL = 'https://mr5drive.com';

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  qs.stringifyUrl({
    query: mobile ? { session: id, showMobileWorkspace: mobile } : { session: id },
    url: '/chat',
  });

export const imageUrl = (filename: string) => withBasePath(`/images/${filename}`);

export const LOBE_URL_IMPORT_NAME = 'settings';
export const EMAIL_SUPPORT = 'mr.ng@mystudies.net';
export const EMAIL_BUSINESS = 'https://api.mister5.net';

export const MEDIDUM = 'https://books.mr5drive.com/';
export const X = 'https://oxford.mister5.net/';
export const RELEASES_URL = CHANGELOG;

export const R2_CDN_URL = 'https://hub-apac-1.lobeobjects.space/';

export const getR2Url = (filename: string) => urlJoin(R2_CDN_URL, filename);
export const mailTo = (email: string) => `mailto:${email}`;
