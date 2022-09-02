import cuid from 'cuid';
import { combineReducers } from 'redux';


const manageRestaurants = combineReducers({restaurants: restaurantReducer,reviews: reviewsReducer})

export default manageRestaurants


function restaurantReducer(state = [], action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            const generatedId = cuid()
            const restaurant = {text: action.text, id: generatedId}
            return state.concat(restaurant)

            case "DELETE_RESTAURANT":
                return state.filter(state => action.id !== state.id)

        default:
            return state
    }

}

function reviewsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            action.review.id = cuid()
            return state.concat(action.review)

        case "DELETE_REVIEW":
            return state.filter(state => action.reviewId !== state.id)

        default:
            return state
    }
}
