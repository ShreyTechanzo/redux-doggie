import { Button, FormControl, InputLabel, MenuItem, Stack, Typography } from "@mui/material";
import { Header, Root, StyledDivider, StyledPagination, StyledSelect } from "./styles";
import { useHome } from "./vm";
import PetCard from "./PetCard";
import Logo from "../assets/adopt-me-logo.png";

function Home() {
    const { isAnimalSelected, formValue, breeds, pets, totalPages, handlePagination, handleSubmit, handleAnimalChange, handleBreedChange } = useHome();

    return (
        <Root>
            <Header>
                <img src={Logo} alt="Main Logo" />
            </Header>
            <Stack direction="row" gap={5} mx={20} alignItems="flex-start">
                <Stack onSubmit={handleSubmit} component="form" bgcolor="#FAEFF0" borderRadius={3} p={2} gap={2} flex={2}>
                    <FormControl>
                        <InputLabel>Animal</InputLabel>
                        <StyledSelect label="animal" value={formValue.animal} onChange={handleAnimalChange}>
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="dog">Dog</MenuItem>
                            <MenuItem value="cat">Cat</MenuItem>
                            <MenuItem value="bird">Bird</MenuItem>
                            <MenuItem value="reptile">Reptile</MenuItem>
                        </StyledSelect>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Breed</InputLabel>
                        <StyledSelect label="breed" value={formValue.breed} onChange={handleBreedChange} disabled={!isAnimalSelected}>
                            <MenuItem key={9999} value="">None</MenuItem>
                            {breeds.map((breed, id) => (
                                <MenuItem key={id} value={breed}>{breed}</MenuItem>
                            ))}
                        </StyledSelect>
                    </FormControl>
                    <Button type="submit" variant="contained" color="error">Submit</Button>
                </Stack>
                <Stack bgcolor="#FAEFF0" py={2} px={4} borderRadius={3} gap={2} flex={3} divider={<StyledDivider />}>
                    {pets.length ? pets.map(pet => (
                        <PetCard id={pet.id} petImg={pet.images[0]} pet={pet.name} animal={pet.animal} breed={pet.breed} city={pet.city} state={pet.state} />
                    )) :
                        <Typography variant="h3" color="lightgrey">No Pets</Typography>
                    }
                </Stack>
            </Stack>
            <StyledPagination count={totalPages} onChange={handlePagination} />
        </Root>
    );
}

export default Home;