// import { useSelector } from "react-redux";

// export function usePetStore(prop) {
//     return useSelector(state => state.pet[prop]);
// }

export function selectAllPets(state) {
    return state.pet.pets;
}

export function selectAllBreeds(state) {
    return state.pet.breeds;
}

export function selectTotalPages(state) {
    return state.pet.totalPages;
}