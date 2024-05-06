import { t } from 'i18next';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { UserStore } from '@/store/user';

import { authSelectors, userProfileSelectors } from './selectors';

vi.mock('i18next', () => ({
  t: vi.fn((key) => key),
}));

// 定义一个变量来存储 enableAuth 的值
let enableAuth = true;

// 模拟 @/const/auth 模块
vi.mock('@/const/auth', () => ({
  get enableAuth() {
    return enableAuth;
  },
}));

afterEach(() => {
  enableAuth = true;
});

describe('userProfileSelectors', () => {
  describe('nickName', () => {
    it('should return default nickname when auth is disabled', () => {
      enableAuth = false;

      const store: UserStore = {
        isSignedIn: false,
        user: null,
      } as unknown as UserStore;

      expect(userProfileSelectors.nickName(store)).toBe('userPanel.defaultNickname');
      expect(t).toHaveBeenCalledWith('userPanel.defaultNickname', { ns: 'common' });
    });

    it('should return user fullName when signed in', () => {
      enableAuth = true;

      const store: UserStore = {
        isSignedIn: true,
        user: { fullName: 'John Doe' },
      } as UserStore;

      expect(userProfileSelectors.nickName(store)).toBe('John Doe');
    });

    it('should return user username when fullName is not available', () => {
      const store: UserStore = {
        isSignedIn: true,
        user: { username: 'johndoe' },
      } as UserStore;

      expect(userProfileSelectors.nickName(store)).toBe('johndoe');
    });

    it('should return anonymous nickname when not signed in', () => {
      enableAuth = true;

      const store: UserStore = { isSignedIn: false, user: null } as unknown as UserStore;

      expect(userProfileSelectors.nickName(store)).toBe('userPanel.anonymousNickName');
      expect(t).toHaveBeenCalledWith('userPanel.anonymousNickName', { ns: 'common' });
    });
  });

  describe('username', () => {
    it('should return default username when auth is disabled', () => {
      enableAuth = false;

      const store: UserStore = {
        isSignedIn: false,
        user: null,
      } as unknown as UserStore;

      expect(userProfileSelectors.username(store)).toBe('Mr.🆖 Chat');
    });

    it('should return user username when signed in', () => {
      const store: UserStore = {
        isSignedIn: true,
        user: { username: 'johndoe' },
      } as UserStore;

      expect(userProfileSelectors.username(store)).toBe('johndoe');
    });

    it('should return "anonymous" when not signed in', () => {
      const store: UserStore = { isSignedIn: false, user: null } as unknown as UserStore;

      expect(userProfileSelectors.username(store)).toBe('anonymous');
    });
  });
});

describe('authSelectors', () => {
  describe('isLogin', () => {
    it('should return true when auth is disabled', () => {
      enableAuth = false;

      const store: UserStore = {
        isSignedIn: false,
      } as UserStore;

      expect(authSelectors.isLogin(store)).toBe(true);
    });

    it('should return true when signed in', () => {
      const store: UserStore = {
        isSignedIn: true,
      } as UserStore;

      expect(authSelectors.isLogin(store)).toBe(true);
    });

    it('should return false when not signed in and auth is enabled', () => {
      const store: UserStore = {
        isSignedIn: false,
      } as UserStore;

      expect(authSelectors.isLogin(store)).toBe(false);
    });
  });
});
