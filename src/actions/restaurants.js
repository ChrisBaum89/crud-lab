export const addRestaurant = (restaurant) => {
    return {
        type: "ADD_RESTAURANT",
        text: restaurant.text
    }
}

export const deleteRestaurant = (restaurantId) => {

    return {
        type: "DELETE_RESTAURANT",
        id: restaurantId
    }
}