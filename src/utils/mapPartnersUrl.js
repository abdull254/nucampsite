import { baseUrl } from "../app/shared/baseUrl";

const mapPatnersUrl = (arr) => {
    return arr.map( (partner) => {
        return {
            ...partner,
            partners: baseUrl + partner.partners
        }
        
    })
}