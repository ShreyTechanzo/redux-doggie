import { useSelector } from "react-redux";

export function usePetStore(prop) {
    return useSelector(state => state.pet[prop]);
}
