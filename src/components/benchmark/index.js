import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormButton } from './benchmarkElements'

const Progress = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>Aletheia</Icon>
            <FormContent>
                <Form action='#'>
                    <FormInput type='search' required />
                    <FormButton type='submit'>Search</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default Progress;