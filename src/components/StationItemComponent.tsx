import React from 'react';
import styled from 'styled-components';

type StationItemComponentProps = {
  id: string;
  name: string;
  isFavorite?: boolean;
  onLikeClick: (id: string, remove: boolean) => void;
};

const StationItemComponent: React.FC<StationItemComponentProps> = ({
  id,
  name,
  isFavorite,
  onLikeClick,
}) => (
  <li>
    <span>{name}</span>
    <AddToFavorite onClick={() => onLikeClick(id, !!isFavorite)}>
      {isFavorite ? 'Dislike' : 'Like'}
    </AddToFavorite>
  </li>
);

export default StationItemComponent;

const AddToFavorite = styled.span`
  margin-left: 1.5em;

  text-decoration: underline;
  cursor: pointer;
`;
