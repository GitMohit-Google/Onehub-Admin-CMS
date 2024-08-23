import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import  dataReducer  from "./reducers/dataReducer";

const rootReducer = combineReducers({
    auth:userReducer,
    data:dataReducer,
})

export default rootReducer;