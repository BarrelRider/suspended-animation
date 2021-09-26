import * as React from "react";

import {
  Container,
  Form,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  Button,
  Paper,
  TextInput,
  Spacing,
  Heading,
} from "@suspended-animation/suspended-components";
import styled from "styled-components";

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(252, 250, 255, 1) 50%,
    rgba(239, 234, 255, 1) 50%
  );
  position: relative;
`;

const LoginBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Login: React.FC = () => {
  return (
    <LoginPageWrapper>
      <LoginBoxWrapper>
        <Container>
          <Row>
            <Col lg="6" className="m-auto">
              <Paper>
                <Spacing pr="8" pl="8" pt="4" pb="4">
                  <div className="text-center pb-3">
                    <img src="/img/leo.jpg" alt="Leo's itself" />
                  </div>
                  <Spacing pb="6">
                    <Heading center noGutters size="l" color="cursedGreen">
                      Giriş
                    </Heading>
                  </Spacing>
                  <Formik
                    initialValues={{
                      email: "",
                      password: ""
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().required("Email geçersiz!"),
                      password: Yup.string().required("Şifre ??"),
                    })}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    {({ handleSubmit }) => (
                      <Form onSubmit={handleSubmit}>
                        <FormGroup>
                          <Spacing pb="2">
                            <Field
                              as={TextInput}
                              label="e-Posta Adresiniz"
                              name="email"
                              id="email"
                            />
                          </Spacing>
                        </FormGroup>

                        <FormGroup>
                          <Spacing pb="2">
                            <Field
                              as={TextInput}
                              label="Şifreniz"
                              name="password"
                              id="password"
                            />
                          </Spacing>
                        </FormGroup>
                        <Button type="submit" stretch>
                          Giriş yap ve Devam et
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Spacing>
              </Paper>
            </Col>
          </Row>
        </Container>
      </LoginBoxWrapper>
    </LoginPageWrapper>
  );
};

export default Login;
