import qs from 'query-string';
import urlJoin from 'url-join';

import { withBasePath } from '@/utils/basePath';
import { isDev } from '@/utils/env';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const UTM_SOURCE = 'chat_preview';

export const OFFICIAL_URL = 'https://mr5ai.com/';
export const OFFICIAL_PREVIEW_URL = 'https://mr5ai.com/';
export const OFFICIAL_SITE = withBasePath(`/`);

export const OG_URL = '/og/cover.png?v=1';

export const GITHUB = pkg.homepage;
export const GITHUB_ISSUES = withBasePath(`/settings/modal?session=inbox&tab=llm`);
export const CHANGELOG = 'https://api.mr5ai.com';
export const DOCKER_IMAGE = 'https://hub.docker.com/r/bentwng/lobe-chat';

export const DOCUMENTS = 'https://dict.mr-ng.com/';
export const USAGE_DOCUMENTS = 'https://google.com/';
export const SELF_HOSTING_DOCUMENTS = 'https://google.com/';
export const WEBRTC_SYNC_DOCUMENTS = 'https://google.com/';
export const DATABASE_SELF_HOSTING_URL = 'https://google.com/';

// use this for the link
export const DOCUMENTS_REFER_URL = DOCUMENTS;

export const WIKI = 'https://collins.mister5.net/';
export const WIKI_PLUGIN_GUIDE = 'https://macmillan.mister5.net/';
export const MANUAL_UPGRADE_URL = 'https://mr5ai.com';

export const BLOG = 'https://status.mr5drive.com/';

export const ABOUT = OFFICIAL_SITE;
export const FEEDBACK = OFFICIAL_SITE;
export const DISCORD = 'https://speak.mister5.net';
export const PRIVACY_URL = 'https://dict.mr-ng.com';
export const TERMS_URL = 'https://speak.mister5.net';

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const MORE_MODEL_PROVIDER_REQUEST_URL = 'https://api.mr5ai.com';

export const MORE_FILE_PREVIEW_REQUEST_URL =
  'mailto:mr.ng@mystudies.net';

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
export const EMAIL_BUSINESS = 'https://api.mr5ai.com';

export const MEDIDUM = 'https://books.mr5drive.com/';
export const X = 'https://lac.mr5ai.com/';
export const RELEASES_URL = CHANGELOG;

export const mailTo = (email: string) => `mailto:${email}`;

export const AES_GCM_URL = 'https://datatracker.ietf.org/doc/html/draft-ietf-avt-srtp-aes-gcm-01';
export const BASE_PROVIDER_DOC_URL = 'https://google.com/search?q=';
export const SITEMAP_BASE_URL = isDev ? '/sitemap.xml/' : 'sitemap';
