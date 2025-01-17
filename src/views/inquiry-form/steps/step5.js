import React from "react";
import {
  Frame,
  Content,
  FormDiv,
  FormFrame,
  SignupOrangeButton,
  SecondaryButton,
  SignupInput,
  CheckboxGroup,
  CheckboxLabel,
} from "../styles";
import { Field } from "formik";
import { propertyChoices } from "../../../misc/constants";
import { FormErrorMessage } from "../../../components/elements";

const Step5 = ({ isSubmitting, values, previous, errors }) => {
  return (
    <Frame>
      <Content>
        <h1>Preferred Type of Property</h1>
        <p>
          Select your preferred type of property from the options below. Check
          all that apply.
        </p>
        <FormErrorMessage component="span" name="propertyTypes" />
        <CheckboxGroup>
          {propertyChoices.map((choice) => (
            <CheckboxLabel
              key={choice.label}
              isChecked={values.propertyTypes.includes(choice.value)}
            >
              <span>{choice.label}</span>
              <span className="checkbox__input">
                <SignupInput
                  className="checkbox"
                  as={Field}
                  type="checkbox"
                  name="propertyTypes"
                  value={choice.value}
                />
                <span className="checkbox__control">
                  <svg
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L3.5 6L7.5 1"
                      stroke="#BACCE2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </span>
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
        <FormDiv>
          <FormFrame>
            <SignupOrangeButton
              disabled={
                isSubmitting ||
                values.propertyTypes == "" ||
                errors.propertyTypes
              }
              type="submit"
            >
              NEXT PAGE
            </SignupOrangeButton>
            <SecondaryButton onClick={() => previous(values)}>
              GO BACK
            </SecondaryButton>
          </FormFrame>
        </FormDiv>
      </Content>
    </Frame>
  );
};

export default Step5;
