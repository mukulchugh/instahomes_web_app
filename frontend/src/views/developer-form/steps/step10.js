import React from "react";
import {
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SecondaryButton,
  SignupInput,
  FormErrorMessage,
} from "../styles";
import { Field } from "formik";
import security from "../../../assets/form/security.svg";

const Step10 = ({ isSubmitting, values, previous }) => {
  return (
    <React.Fragment>
      <img src={security} alt="Security" />
      <h1>Secure your account with a Password</h1>
      <p>
        Awesome! You're almost done. To save your information for other
        inquiries, create a password.
      </p>
      <FormDiv>
        <FormFrame>
          <FormErrorMessage component="span" name="password" />
          <FormErrorMessage component="span" name="confirmPassword" />
          <SignupInput
            as={Field}
            placeholder="Password"
            type="password"
            name="password"
          />
          <SignupInput
            as={Field}
            placeholder="Retype Password"
            type="password"
            name="confirmPassword"
          />
          <SignupOrangeButton disabled={isSubmitting} type="submit">
            SUBMIT FORM & SIGNUP
          </SignupOrangeButton>
          <SecondaryButton onClick={() => previous(values)}>
            GO BACK
          </SecondaryButton>
        </FormFrame>
      </FormDiv>
    </React.Fragment>
  );
};

export default Step10;
