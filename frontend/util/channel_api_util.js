export const createChannel = (channel) =>
  fetch(`/api/channels`, {
    method: "POST",
    body: JSON.stringify({
      channel,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const requestChannels = () =>
  fetch("/api/channels", {
    method: "GET",
    headers: {
      "Content-Type": "applicatoin/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const requestDMChannels = () =>
  fetch("/api/dmchannels", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const requestChannel = (channelId) =>
  fetch(`/api/channels/${channelId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const requestServerChannels = (serverId) =>
  fetch(`/api/serverchannels/${serverId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const updateChannel = (channel) =>
  fetch(`/api/channels/${channel.id}`, {
    method: "PUT",
    body: JSON.stringify({
      channel,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const deleteChannel = (channelId) =>
  fetch(`/api/channels/${channelId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const addChannelMember = (channelMember) =>
  fetch(`/api/channels/member`, {
    method: "POST",
    body: JSON.stringify({
      channelMember,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const removeChannelMember = (memberId) =>
  fetch(`/api/channels/member/${memberId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });
