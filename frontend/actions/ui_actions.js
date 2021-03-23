export const SET_ACTIVE_SERVER = "SET_ACTIVE_SERVER";
export const SET_CREATE_SERVER_MODAL_STATE = "SET_CREATE_SERVER_MODAL_STATE";

export const setActiveServer = (server) => ({
  type: SET_ACTIVE_SERVER,
  server,
});

export const setCreateServerModalState = (modalState) => ({
  type: SET_CREATE_SERVER_MODAL_STATE,
  modalState,
});
