// authSlice.test.ts
import authReducer, { setUser, clearUser } from './authSlice';

describe('authSlice tests', () => {
  const initialState = {
    user: {
      id: null,
      username: null,
      token: null,
    },
    isAuthenticated: false,
  };

  it('should handle setUser', () => {
    const userData = { id: '123', username: 'test@example.com', token: 'some-token' };
    
    // 调用 setUser action
    const action = setUser(userData);
    const state = authReducer(initialState, action);

    // 验证 user 信息和 isAuthenticated
    expect(state.user.id).toBe(userData.id);
    expect(state.user.username).toBe(userData.username);
    expect(state.user.token).toBe(userData.token);
    expect(state.isAuthenticated).toBe(true);
  });

  it('should handle clearUser', () => {
    const loggedInState = {
      user: { id: '123', username: 'test@example.com', token: 'some-token' },
      isAuthenticated: true,
    };
    
    // 调用 clearUser action
    const action = clearUser();
    const state = authReducer(loggedInState, action);

    // 验证 user 信息和 isAuthenticated
    expect(state.user.id).toBeNull();
    expect(state.user.username).toBeNull();
    expect(state.user.token).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });
});
