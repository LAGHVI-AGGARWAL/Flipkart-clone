import { InputBase , Box , styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
        background : #fff;
        width : 38%;
        border-radius :2px;
        margin-left : 25px;
        display : flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : unset;
`
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const Search =  () => {
    return (
        <SearchContainer>
        <InputSearchBase

            placeholder="Search for products,brands and more"


        />
        <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    )
}
export default Search;