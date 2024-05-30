import { Stack, Typography } from "@mui/material";
import { StyledAvatar } from "./styles";

function PetCard({ id, pet, petImg, animal, breed, city, state }) {
    return (
        <Stack key={id} p={1} direction="row" alignItems="center" gap={2}>
            <StyledAvatar src={petImg} />
            <Stack>
                <Typography variant="h3">{pet}</Typography>
                <Typography variant="p" component="p">{animal} - {breed} - {city} - {state}</Typography>
            </Stack>
        </Stack>
    );
}

export default PetCard;