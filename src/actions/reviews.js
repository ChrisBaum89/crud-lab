export const addReview = (review) => {
    return {
        type: "ADD_REVIEW",
        review: review
    }
}

export const deleteReview = (review) => {
    return {
        type: "DELETE_REVIEW",
        reviewId: review.target.id
    }
}