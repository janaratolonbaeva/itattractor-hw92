
const initialState = {
  messages: null,
  messagesLoading: false,
  messagesError: null,
  messageLoading: false,
  messageError: null,
  userActives: null
};

const messageReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGES':
      return {...state, messages: action.message, userActives: action.userActives};
    default: return state;
  }
}

export default messageReducers;