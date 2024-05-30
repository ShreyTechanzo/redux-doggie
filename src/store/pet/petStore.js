import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    pets: [],
    breeds: [],
    currentPage: 0,
    totalPages: 0,
};

export const fetchPets = createAsyncThunk('pets/fetchPets', fetchPetsData);

export const fetchBreed = createAsyncThunk('pets/fetchBreed', fetchTargetedBreed);

async function fetchTargetedBreed(animal = "") {

    return fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
        .then(res => res.json())
        .then(data => data);
}

async function fetchPetsData({ animal = "", breed = "", pageNumber = 0 }) {

    return fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&page=${pageNumber}`)
        .then(res => res.json())
        .then(data => {
            return { data, pageNumber };
        });
}

const pet = createSlice({
    name: "pets",
    initialState,
    extraReducers(builder) {

        builder.addCase(fetchPets.fulfilled, (state, action) => {
            state.pets = action.payload.data.pets;
            const totalPages = Math.trunc(action.payload.data.numberOfResults / 10) + 1;
            state.pets = action.payload.data.pets;
            state.totalPages = totalPages;
            state.currentPage = action.payload.pageNumber;
        });

        builder.addCase(fetchBreed.fulfilled, (state, action) => {
            state.breeds = action.payload.breeds;
        });

    }
});

export default pet.reducer;
