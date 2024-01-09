import { AppBar, Toolbar, Box,Typography , styled } from "@mui/material";

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

const header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  return (
    <StyledHeader>
      <Toolbar>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box>
            <SubHeading>Explore 
            <Typography component="span">Plus</Typography>
            </SubHeading>
          </Box>
        </Component>
      </Toolbar>
    </StyledHeader>
  );
};
export default header;
