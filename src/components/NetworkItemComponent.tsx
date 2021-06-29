import React from 'react';
import styled, { css } from 'styled-components';

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
  <Title onClick={() => onTitleClick(id)} active={active}>
    {title} ({location})
  </Title>
);

export default NetworkItemComponent;

const Title = styled.li<{ active?: boolean }>`
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
