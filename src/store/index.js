import { combineReducers } from "redux"
import { counterReducer } from "./counter"
import { messageReducer } from "./message"
import { wishlistReducers } from "./wishlist"

export const reducers = combineReducers({
  counter: counterReducer,
  message: messageReducer,
  wishlist: wishlistReducers,
})