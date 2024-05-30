import { Divider, Pagination, Select, Stack, styled } from "@mui/material";

export const Root = styled(Stack)(({ theme }) => ({
    minHeight: "100%",
    paddingBottom: theme.spacing(4),
    background: "url(https://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
}));

export const Header = styled("div")(({ theme }) => ({
    padding: theme.spacing(3)
}));

export const StyledSelect = styled(Select)(() => ({
    backgroundColor: "white"
}));

export const StyledDivider = styled(Divider)(() => ({
    borderColor: "black",
    borderBottomWidth: "2px"
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
    alignSelf: "center",
    marginTop: theme.spacing(3),
}));