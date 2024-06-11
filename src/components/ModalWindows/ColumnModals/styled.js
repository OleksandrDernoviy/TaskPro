import styled from 'styled-components';

import { ReactComponent as AddModalSvg } from 'images/modal/modal-add-btn-icon.svg';

export const ErrorText = styled.div`
  text-align: left;
  color: #ff0000;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 10px;
`;

export const ModalContainer = styled.div`
  background-color: ${props => props.theme.modal.backgroundMain};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
`;

export const ModalFormikBox = styled.div`
  margin-bottom: 24px;
`;

export const ModalFormikBoxInput = styled.input`
  font-size: 14px;
  letter-spacing: -0.32px;
  color: ${props => props.theme.needHelpModal.textMain};
  width: 100%;
  padding: 14px 18px;
  border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  border-radius: 8px;
  opacity: 0.4;
  background-color: transparent;
  outline: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.editProfileModal.textMain};
    opacity: 1;
    border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  }
`;

export const ModalFormikBoxBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.modal.buttonText};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.32px;
  width: 240px;
  padding: 14px;
  background-color: ${props => props.theme.modal.buttonBackground};
  border-radius: 8px;
  border: none;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.modal.btnHover};
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media screen and (min-width: 345px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const ModalFormikBoxBtnIcon = styled(AddModalSvg)`
  color: ${props => props.theme.modal.plusColor};
  fill: ${props => props.theme.modal.plusBackground};
  border-radius: 8px;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  transition: all 250ms linear;
`;
