

import { 
    Card, 
    CardBody,
    Container, 
    Heading, 
    Image, 
    Stack, 
} from '@chakra-ui/react';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FireConfig } from '../../../config/firebase';
import { Hooks } from '../../../hooks';
import { centerStyles } from '../../../styles/style';

export default function Login() {
    const { auth, GoogleProvider } = FireConfig;
    const { actions } = Hooks.useLocations();

    const handleLogin = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(res => {
                localStorage.setItem("token", res?.user.accessToken);
                localStorage.setItem("refreshToken", res?._tokenResponse.refreshToken);
                actions.goToMain();
            })
    };

  return (
    <Container 
        {...centerStyles}
    >
        <Card maxW='sm'>
            <CardBody>
                <Image
                    cursor={"pointer"}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    onClick={handleLogin}
                />
                <Stack textAlign={"center"} mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                </Stack>
            </CardBody>
        </Card>
    </Container>
  )
}
