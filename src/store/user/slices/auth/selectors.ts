import { t } from 'i18next';

import { enableAuth, enableClerk } from '@/const/auth';
import { UserStore } from '@/store/user';
import { LobeUser } from '@/types/user';

const DEFAULT_USERNAME = 'Mr.🆖 Chat';

const nickName = (s: UserStore) => {
  if (!enableAuth) return t('userPanel.defaultNickname', { ns: 'common' });

  if (s.isSignedIn) return s.user?.fullName || s.user?.username;

  return t('userPanel.anonymousNickName', { ns: 'common' });
};

const username = (s: UserStore) => {
  if (!enableAuth) return DEFAULT_USERNAME;

  if (s.isSignedIn) return s.user?.username;

  return 'anonymous';
};

export const userProfileSelectors = {
  nickName,
  userAvatar: (s: UserStore): string => s.user?.avatar || s.avatar || '',
  userId: (s: UserStore) => s.userId,
  userProfile: (s: UserStore): LobeUser | null | undefined => s.user,
  username,
};

/**
 * 使用此方法可以兼容不需要登录鉴权的情况
 */
const isLogin = (s: UserStore) => {
  // 如果没有开启鉴权，说明不需要登录，默认是登录态
  if (!enableAuth) return true;

  return s.isSignedIn;
};

export const authSelectors = {
  isLogin,
  isLoginWithAuth: (s: UserStore) => s.isSignedIn,
  isLoginWithClerk: (s: UserStore) => s.isSignedIn && enableClerk,
};
