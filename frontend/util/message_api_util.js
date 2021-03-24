export const requestChannelMessages = (channelId) =>
  fetch(`/api/channelmsgs/${channelId}`, {
    method: `GET`,
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });
