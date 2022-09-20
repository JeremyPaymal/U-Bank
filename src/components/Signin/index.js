import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements';
import Footer from '../Footer';

import Fade from 'react-reveal/Fade';

const SignIn = () => {
  return (
    <>
        <Fade top>
        <Container>
            <FormWrap>
                <Icon to="/">U-Bank</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </Fade>
        <Footer />
    </>
  )
}

export default SignIn;