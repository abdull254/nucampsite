import { baseUrl } from "../app/shared/baseUrl"

export const mapImageURL = (arr) => {
return arr.map ((item) => {
    return {
        ...item,
        image: baseUrl + item.image
    }
})
}

// this is how our app handle image file