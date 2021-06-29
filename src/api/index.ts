const API = {
  fetchNetworks() {
    return fetch(
      'https://api.citybik.es/v2/networks?fields=id,company,location'
    );
  },
  fetchStations() {
    //
  },
};

export default API;
