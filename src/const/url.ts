import urlJoin from 'url-join';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const GITHUB = pkg.homepage;
export const CHANGELOG = 'https://github.com/bentwnghk/lobe-chat/blob/master/CHANGELOG.md';
export const WIKI = 'https://longman.mister5.net/';
export const WIKI_PLUGIN_GUIDE = 'https://ai.mister5.net/';
export const ABOUT = 'https://mr5drive.com/';
export const FEEDBACK = 'https://mr5drive.com/';
export const DISCORD = 'https://speak.mister5.net/';

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  mobile ? `/chat/mobile#session=${id}` : `/chat#session=${id}`;
export const MANUAL_UPGRADE_URL = 'https://mr5drive.com/';
