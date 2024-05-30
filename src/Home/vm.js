import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBreed, fetchPets } from "../store/pet/petStore";
import { usePetStore } from "../store/pet/selector";

export function useHome() {
    const dispatch = useDispatch();
    const breeds = usePetStore("breeds");
    const pets = usePetStore("pets");
    const totalPages = usePetStore("totalPages");
    const [formValue, setFormValue] = useState({ animal: "", breed: "" });
    const [isAnimalSelected, setIsAnimalSelected] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        dispatch(fetchPets({ pageNumber: pageNumber - 1, animal: formValue.animal, breed: formValue.breed }));
    }, [pageNumber]);

    function handlePagination(_, value) {
        setPageNumber(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(fetchPets({ animal: formValue.animal, breed: formValue.breed }));
    }

    function handleAnimalChange(e) {
        if (!e.target.value) {
            setFormValue(prev => ({
                ...prev,
                'breed': '',
                "animal": ''
            }));
            setIsAnimalSelected(false)
            return;
        };

        setIsAnimalSelected(true);
        dispatch(fetchBreed(e.target.value));

        setFormValue(prev => ({
            ...prev,
            "animal": e.target.value
        }));
    }

    function handleBreedChange(e) {
        setFormValue(prev => ({
            ...prev,
            "breed": e.target.value
        }))
    }


    return { isAnimalSelected, formValue, breeds, pets, totalPages, handlePagination, handleSubmit, handleAnimalChange, handleBreedChange };
}