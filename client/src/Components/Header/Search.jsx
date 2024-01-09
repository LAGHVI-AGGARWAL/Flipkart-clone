import { InputBase , Box , styled} from "@mui/material";

const SearchContainer = styled(Box)`
        background : #fff;
        width : 38%;
        border-radius :2px;
        margin-left : 10px;
`;

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
`

const Search =  () => {
    return (
        <SearchContainer>
        <InputSearchBase

            placeholder="Search for products,brands and more"


        />
        </SearchContainer>
    )
}
export default Search;