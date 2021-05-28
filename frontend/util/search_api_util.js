export const requestUsers = (username) =>
  fetch(`/api/search/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "applicatoin/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });
