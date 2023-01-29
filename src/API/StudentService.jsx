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

  static async deleteOne(id) {
    try {
      console.log("Student service deleteOne method handled by param id equal = " + id);
    } catch (e) {
      console.log(e);
    }
  }
}