import { DATA_FAILURE, DATA_SUCCESS, FETCH_DATA } from "./actions";

const initial = {
  data: [],
  error: "",
  loading: true,
};

const dataReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };

    case DATA_SUCCESS:
      return { ...state, error: "", data: action.payload, loading: false };

    case DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        data: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default dataReducer;
