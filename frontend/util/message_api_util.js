export const requestChannelMessages = (channelId) =>
  fetch(`/api/channelmsgs/${channelId}`, {
    method: `GET`,
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const createMessage = (message) =>
  fetch(`/api/channelmsg`, {
    method: "POST",
    body: JSON.stringify({
      message,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });
