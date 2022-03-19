import { createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from "./reducers/combineReducer"
import thunk from "redux-thunk"

const store = createStore(reducers , composeWithDevTools(applyMiddleware(thunk)))

export default store;
