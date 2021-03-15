export const signup = user => (
  fetch('/api/user', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': Rails.csrfToken()
    },
    data: {
      user
    }
  })
);

export const login = user => (
  fetch('/api/session', {
    body: JSON.stringify({
      user
    }),
    method: 'POST',
    headers: {
      'data': user,
      'Content-Type': 'application/json',
      'X-CSRF-Token': Rails.csrfToken()
    },
    data: {
      user
    }
  })
);

export const logout = () => (
  fetch('/api/session', {
    method: 'DELETE'
  })
);