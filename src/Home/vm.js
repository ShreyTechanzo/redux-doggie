import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreed, fetchPets } from "../store/pet/petStore";
import { selectAllBreeds, selectAllPets, selectTotalPages } from "../store/pet/selector";

export function useHome() {
    const dispatch = useDispatch();
    const breeds = useSelector(selectAllBreeds);
    const pets = useSelector(selectAllPets);
    const totalPages = useSelector(selectTotalPages);
    const [formValue, setFormValue] = useState({ animal: "", breed: "" });
    const [pageNumber, setPageNumber] = useState(1);
    const [isAnimalSelected, setIsAnimalSelected] = useState(false);

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