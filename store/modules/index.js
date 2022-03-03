import { combineReducers } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import counter from './counter'

// store 생성을 위한 reducer
const reducer = (state, action) => {

    // hydrate는 서버에서 생성한 상태를 client에 합침
    if (action.type === HYDRATE) {
        // current state and action return
        return {
            ...state,
            ...action.payload
        }
    }
    return combineReducers({
        counter,
    })(state, action)
}

export default reducer