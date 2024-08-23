const initialState = {
  fileList: [],
  path: "",
  loading: true,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        fileList: [],
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        fileList: action.payload.fileList,
        path: action.payload.path,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "FETCH_FORM":
      return {
        ...state,
        loading: false,
        formList: Object.values(action.payload),
      };
    case "FETCH_FORM_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default dataReducer;