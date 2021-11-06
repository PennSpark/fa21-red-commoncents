export const initialState = null

export const reducer = (state, action) => {
    if (action.type === "USER") {
        return action.payload
    }
    else if (action.type === "CLEAR") {
        return null
    }
    return state
}