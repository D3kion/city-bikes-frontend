import React from 'react';
import styled, { css } from 'styled-components';

interface NetworkItemComponentProps {
  title: string;
  active?: boolean;
}

const NetworkItemComponent = ({ title, active }: NetworkItemComponentProps) => (
  <li>
    <Title active={active}>{title}</Title>
    <AddToFavorite>Like</AddToFavorite>
  </li>
);

export default NetworkItemComponent;

const Title = styled.span<{ active?: boolean }>`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
  ${(p) =>
    p.active &&
    css`
      font-weight: 600;
    `}
`;

const AddToFavorite = styled.span`
  margin-left: 1.5em;

  text-decoration: underline;
  cursor: pointer;
`;
