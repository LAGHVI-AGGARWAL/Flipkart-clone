import { AppBar, Toolbar, Box,Typography , styled, colors } from "@mui/material";

//importing search
import CustomButton from "./customButton";
import Search from './search';


const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 65px;
`;

const Component = styled(Box)`
  margin-left: 9%;
  line-height : 1;
`;

const SubHeading = styled(Box)`
  ${'' /* margin-left: 2%; */}
  font-size : 11px;
  font-style : italic;
`;

const PlusImage = styled('img')({
    width: 15,
    height: 15,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)`
        margin : 0 5% 0 auto;
`

const header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
      <Toolbar style={{minHeight:65}}>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style = {{display : 'flex'}}>
            <SubHeading>Explore &nbsp;
            <Box component="span" style={{color : '#FFE500'}}>Plus</Box>
            </SubHeading>
            <PlusImage src={subURL} />
                    </Box>
                </Component>
        < Search />
        <CustomButtonWrapper>
            <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default header;
