const API = {
  fetchNetworks() {
    return fetch('https://api.citybik.es/v2/networks?fields=id,company');
  },
  fetchStations() {
    //
  },
};

export default API;
