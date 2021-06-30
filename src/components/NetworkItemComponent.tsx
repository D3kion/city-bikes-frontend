import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type NetworkItemComponentProps = {
  id: string;
  title: string;
  location: string;
  active?: boolean;
  onTitleClick: (id: string) => void;
};

const NetworkItemComponent: React.FC<NetworkItemComponentProps> = ({
  id,
  title,
  location,
  active,
  onTitleClick,
}) => (
  <Title onClick={() => onTitleClick(id)} active={!!active}>
    {title} ({location})
  </Title>
);

export default NetworkItemComponent;

const Title = styled.div<{ active: boolean }>(({ active }) => [
  tw`px-6 py-1.5 cursor-pointer hover:bg-indigo-200`,
  active && tw`bg-indigo-200 font-medium`,
]);
