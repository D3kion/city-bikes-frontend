import React from 'react';
import styled from 'styled-components';

type StationItemComponentProps = {
  id: string;
  name: string;
  onLikeClick: (id: string) => void;
};

const StationItemComponent: React.FC<StationItemComponentProps> = ({
  id,
  name,
  onLikeClick,
}) => (
  <li>
    <span>{name}</span>
    <AddToFavorite onClick={() => onLikeClick(id)}>Like</AddToFavorite>
  </li>
);

export default StationItemComponent;

const AddToFavorite = styled.span`
  margin-left: 1.5em;

  text-decoration: underline;
  cursor: pointer;
`;
