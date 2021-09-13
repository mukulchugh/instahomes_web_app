import styled from "styled-components";
import { OrangeButton } from "../elements";

export const ProductInquiryContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 19px;
  padding: 2em 1.3em;
  font-size: 1em;
  display: flex;
  flex-direction: column;

  & > span {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  h2 {
    font-size: 1.5em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
    line-height: 128%;

    #property-name {
      font-size: 1em;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  #sms-charges {
    margin-top: 0.5em;
    margin-bottom: 2em;
    color: ${({ theme }) => theme.colors.whiteInputColor};
    font-size: 0.8em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    h2,
    #sms-charges {
      text-align: center;
    }
  }
`;

export const DateButtonsDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const DateButtons = styled.div`
  margin: 0 0.7em;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const DateButton = styled.button`
  width: 60px;
  height: 60px;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.orange : "none"}};
  border-radius: 50%;
  padding: 0.5em;
  text-align: center;

  .day-of-week {
    font-size: 0.8em;
    font-weight: 400;
    color: ${({ theme, selected, disabled }) =>
      disabled ? "#AAAAAA" : selected ? "#FDFDFD" : theme.colors.darkHeader};
  }

  h2 {
    font-size: 1.8em;
    font-weight: 500;
    color: ${({ theme, selected, disabled }) =>
      disabled ? "#AAAAAA" : selected ? "#FDFDFD" : theme.colors.darkHeader};
  }
`;

export const InquiryButtons = styled.div`
  display: flex;
  margin-top: 1em;

  button:nth-child(1) {
    margin-right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const InquiryButtonsChild = styled(OrangeButton)`
  font-size: 0.9em;
  width: 50%;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  &.muted {
    background: #ffe5d2;
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const ButtonIcon = styled.img`
  margin-right: 5px;
`;
