const defaultState = {
    question: "",
    options: [],
    points: 0,
    time: 0,
}

export const Game = (state = defaultState, action) => {
    switch (action.type) {
        case "Game":
            return {
                ...state,
                question: action.question,
                options: action.options,
                points: action.points,
                time: action.time
            }
        default:
            return state
    }
}