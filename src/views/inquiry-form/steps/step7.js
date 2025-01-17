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
  ChoiceGroup,
  Choice,
} from "../styles";
import { Field } from "formik";
import { purchaseTypeChoices, reasonChoices } from "../../../misc/constants";
import { FormErrorMessage } from "../../../components/elements";

const Step7 = ({
  isSubmitting,
  values,
  setFieldValue,
  previous,
  touched,
  errors,
}) => {
  return (
    <Frame>
      <Content>
        <h1>What do you want to use the property for?</h1>
        <p>
          Select the reason for buying the property. The property you’re
          inquiring is listed as For Sale.
        </p>
        <p>I want to...</p>
        <FormDiv style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <FormErrorMessage component="span" name="purchaseType" />
          <ChoiceGroup>
            {purchaseTypeChoices.map((choice) => (
              <Choice
                key={choice.value}
                onClick={() => setFieldValue("purchaseType", choice.value)}
                isChecked={values.purchaseType == choice.value}
              >
                {choice.label}
              </Choice>
            ))}
          </ChoiceGroup>
        </FormDiv>
        <FormErrorMessage component="span" name="reason" />
        <CheckboxGroup>
          {reasonChoices.map((choice) => (
            <CheckboxLabel
              key={choice.label}
              isChecked={values.reason == choice.value}
            >
              <span>{choice.label}</span>
              <span className="checkbox__input">
                <SignupInput
                  className="checkbox"
                  as={Field}
                  type="radio"
                  name="reason"
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
                values.purchaseType == "" ||
                values.reason == "" ||
                errors.purchaseType ||
                errors.reason
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

export default Step7;
