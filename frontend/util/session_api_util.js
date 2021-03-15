export const signup = user => (
  fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      user
    }),
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': Rails.csrfToken()
    },
  })
);

export const login = user => (
  fetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      user
    }),
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': Rails.csrfToken()
    }
  })
);

export const logout = () => (
  fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': Rails.csrfToken()
    }
  })
);