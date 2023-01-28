import axios from 'axios';

export default class StudentService {
  static async getAll() {
    try {
      const response = await axios.get('http://localhost:5678/api/students');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}