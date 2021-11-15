// it is a pure function 
// initial state is empty array
export default function movies(state = [], action) {
    if (action.type === "ADD_MOVIES") {
        return action.movies;
    }
    return state;
}