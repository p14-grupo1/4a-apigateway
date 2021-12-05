const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class TurismoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${serverConfig.django_url}turismo/`;
  }

  async getHotels() {
    return await this.get(`hotel/`);
  }
  async getTourists() {
    return await this.get('turista/');
  }
  async getRatings() {
    return await this.get('ratings/');
  }
  async getOwners() {
    return await this.get('empresa/');
  }
  async createHotel(hotel) {
    return await this.post(`hotel/`, hotel);
  }
  async createTourist(tourist) {
    return await this.post('turista/', tourist);
  }
  async createRating(rating) {
    return await this.post('ratings/', rating);
  }
  async createOwner(owner) {
    return await this.post('empresa/', owner);
  }
}

module.exports = TurismoAPI;
