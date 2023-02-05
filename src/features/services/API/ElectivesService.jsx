import axios from 'axios';

export default class ElectivesService {
  static async getAll() {
    return axios.get('http://localhost:5678/api/electives')
      .then((response) => response?.data)
      .catch((error) => console.log(error));
  }

  static async deleteOne(id) {
    try {
      console.log("Student service deleteOne method handled by param id equal = " + id);
    } catch (e) {
      console.log(e);
    }
  }
}