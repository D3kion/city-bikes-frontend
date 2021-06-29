import React from 'react';
import styled, { css } from 'styled-components';

type NetworkItemComponentProps = {
  id: string;
  title: string;
  location: string;
  active?: boolean;
  onTitleClick: (id: string) => void;
  onLikeClick: (id: string) => void;
};

const NetworkItemComponent: React.FC<NetworkItemComponentProps> = ({
  id,
  title,
  location,
  active,
  onTitleClick,
  onLikeClick,
}) => (
  <li>
    <Title onClick={() => onTitleClick(id)} active={active}>
      {title} ({location})
    </Title>
    <AddToFavorite onClick={() => onLikeClick(id)}>Like</AddToFavorite>
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
