import styled from 'styled-components';
import { ReactComponent as AppEditCardSvg } from 'images/sidebar/edit-card.svg';
import { ReactComponent as AppTrashCardSvg } from 'images/sidebar/trash-card.svg';

export const BoardListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BoardLi = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.sidebar.textSecondary};
  letter-spacing: -0.32px;
  height: 50px;
  margin-bottom: 4px;
  cursor: pointer;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.sidebar.projectHover : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.sidebar.projectHover};
  }

  :hover::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 4px;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.sidebar.projectBorder};
    border-radius: 4px 0 0 4px;
    opacity: 1;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BoardListBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px;

  &:hover {
    color: ${props => props.theme.needHelp.icon};
    svg {
      color: ${props => props.theme.needHelp.icon};
    }
  }
`;

export const BoardListBtnGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardListEditBtn = styled.button`
  background: transparent;
  border: none;
  margin-right: 8px;
`;

export const BoardListBtnEdit = styled(AppEditCardSvg)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.sidebar.addButtonBackground};
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.2);
  }
`;

export const BoardListDeleteBtn = styled.button`
  background: transparent;
  border: none;
`;

export const BoardListBtnDelete = styled(AppTrashCardSvg)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.sidebar.addButtonBackground};
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.2);
  }
`;
