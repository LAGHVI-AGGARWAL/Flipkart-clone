import { Box, Button, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import styled from '@emotion/styled';

const Wrapper = styled(Box)`
    display: flex;
    margin : 0 3% 0 auto; 
    & > button , & > p , & > div {
        margin-top: 10px;
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`;

const container = styled(Box)`
    display: flex;
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;    
`;



const CustomButton = () => {
    return (
        <Wrapper>
            <LoginButton variant = 'contained' > Login </LoginButton>

            <Typography style={{ marginTop: 15, width: 135 }}> Become a Seller </Typography>
            <Typography style={{ marginTop: 15 }}> More </Typography>


            <container>
                <ShoppingCart/>
                <Typography> Cart </Typography>
            </container>
        </Wrapper>
    )
}
export default CustomButton;
