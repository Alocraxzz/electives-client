import axios from "axios";

export default class StudentService {
    static async getAll () {
        const students = await axios.get(`http://localhost:5678/api/students`)
            .catch((error) => console.log(`StudentService.getAll throw error: ${error}`));

        return students?.data;
    }

    static async getOne (id) {
        const student = await axios.get(`http://localhost:5678/api/students/${id}`)
            .catch((error) => console.log(`StudentService.getOne throw error: ${error}`));

        return student?.data;
    }

    static async store (student) {
        const operation = await axios.post(`http://localhost:5678/api/students`, student)
            .catch((error) => console.log(`StudentService.store throw error: ${error}`));

        return operation?.data;
    }

    static async update (id, student) {
        const operation = await axios.put(`http://localhost:5678/api/students/${id}`, student)
            .catch((error) => console.log(`StudentService.update throw error: ${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/students/${id}`)
            .catch((error) => console.log(`StudentService.deleteOne throw error: ${error}`));

        return operation?.data;
    }
}