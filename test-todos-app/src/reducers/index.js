import {combineReducers} from "redux";
// import todos from "./todos";
// import visibilityFilter from "./visibilityFilter";
import * as reducers from "./reducers";

// const todoApp=combineReducers({
//     todos,//add todos 的reducer, todos:todos
//     visibilityFilter//todos列表 的reducervisibilityFilter:visibilityFilter
// })
const todoApp=combineReducers(reducers)

export default todoApp;//整个todoapp的reducer