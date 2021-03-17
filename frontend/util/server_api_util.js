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
