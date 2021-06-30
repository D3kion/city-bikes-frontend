import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Like } from './ui/icons';

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
  <Item>
    <span>{name}</span>
    <div onClick={() => onLikeClick(id, !!isFavorite)}>
      <AddToFavorite isFavorite={!!isFavorite} />
    </div>
  </Item>
);

export default StationItemComponent;

const Item = tw.div`
  flex justify-between items-center
  px-6 py-1.5 hover:bg-indigo-200
`;

const AddToFavorite = styled(Like)<{ isFavorite: boolean }>`
  ${tw`cursor-pointer opacity-50 hover:opacity-100`}
  ${(p) => p.isFavorite && tw`text-red-700 opacity-100`}
`;
