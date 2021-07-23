const initialLoginstate = {
  fileData: [],
};

function loginReducer(state = initialLoginstate, { type, payload }) {
  switch (type) {
    case "FILE_UPLOAD":
      return { ...state, fileData: payload };

    default:
      return state;
  }
}

export default loginReducer;
