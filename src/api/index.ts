const BASE_URL = 'https://api.citybik.es/v2';

const API = {
  getNetworks() {
    return fetch(`${BASE_URL}/networks?fields=id,company,location`);
  },
  getStations(networkId: string) {
    return fetch(`${BASE_URL}/networks/${networkId}`);
  },
};

export default API;
