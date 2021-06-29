import { INetwork, INetworkData } from './network.types';

export const convertNetworkData = (rawData: INetworkData): INetwork[] => {
  return rawData.networks.map((x) => ({
    id: x.id,
    title: x.company?.[0],
    location: `${x.location.city}, ${x.location.country}`,
  }));
};
