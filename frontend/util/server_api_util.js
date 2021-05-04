export const createServer = (server) =>
  fetch(`/api/servers`, {
    method: "POST",
    body: JSON.stringify({
      server,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const requestServers = () =>
  fetch("/api/servers", {
    method: "GET",
    headers: {
      "Content-Type": "applicatoin/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const requestServer = (serverId) =>
  fetch(`/api/servers/${serverId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const updateServer = (server) =>
  fetch(`/api/servers/${server.id}`, {
    method: "PUT",
    body: JSON.stringify({
      server,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const deleteServer = (serverId) =>
  fetch(`/api/servers/${serverId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const leaveServer = (serverId) =>
  fetch(`/api/servers/leave/${serverId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const joinServer = (inviteCode) =>
  fetch(`/api/servers/join`, {
    method: "POST",
    body: JSON.stringify(inviteCode),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const addServerMember = (serverMember) =>
  fetch(`/api/servers/member`, {
    method: "POST",
    body: JSON.stringify({
      serverMember,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });

export const removeServerMember = (memberId) =>
  fetch(`/api/servers/member/${memberId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": Rails.csrfToken(),
    },
  });
