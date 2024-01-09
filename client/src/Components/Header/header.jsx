import { AppBar, Toolbar, Box,Typography , styled, colors } from "@mui/material";

//importing search
import Search from "./Search";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 65px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height : 1;
`;

const SubHeading = styled(Box)`
  margin-left: -5%;
  font-size : 12px;
  font-style : italic;
`;

const PlusImage = styled('img')({
    width: 15,
    height: 15,
    marginLeft: 4
})


const header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
      <Toolbar>
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
      </Toolbar>
    </StyledHeader>
  );
};
export default header;
