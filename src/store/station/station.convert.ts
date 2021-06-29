import { IStation, IStationData } from './station.types';

export const convertStationData = (rawData: IStationData): IStation[] => {
  return rawData.network.stations.map((x) => ({
    id: x.id,
    name: x.name,
    freeBikes: x.free_bikes,
    emptySlots: x.empty_slots,
  }));
};
