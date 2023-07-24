
const initial = {
    articles: [],
    recipes: []
}

export const reducer = (state = initial, { type, payload }) => {
    switch (type) {
        case "Articles":
            return { ...state, articles: payload }
        case "Recipes":
            return { ...state, recipes: payload }
        default:
            return { ...state }
    }
}