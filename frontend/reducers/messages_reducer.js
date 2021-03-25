import * as actions from "../actions/message_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case actions.RECEIVE_CHANNEL_MESSAGES:
      const result = action.messages.reduce((r, o) => {
        const last = r[r.length - 1];

        if (last && last.author_id === o.author_id)
          last.content = last.content + `\n` + o.content;
        else r.push({ ...o });

        return r;
      }, []);
      return result;
    case actions.RECEIVE_CHANNEL_MESSAGE:
      if (state.slice(-1)[0].author_id === action.message.author_id) {
        const newMsg = Object.assign({}, action.message, {
          content: state.slice(-1)[0].content + "\n" + action.message.content,
        });
        let newState = state;
        const nextState = newState.slice(0, -1);
        return [...nextState, newMsg];
      }
      return [...state, action.message];
    default:
      return state;
  }
};
