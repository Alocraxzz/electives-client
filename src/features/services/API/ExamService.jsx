import axios from "axios";

export default class ExamService {
    static async getAll () {
        const exams = await axios.get(`http://localhost:5678/api/exams`)
            .catch((error) => console.log(`ExamsService.getAll throw error: ${error}`));

        return exams?.data;
    }

    static async getOne (id) {
        const student = await axios.get(`http://localhost:5678/api/exams/${id}`)
            .catch((error) => console.log(`ExamsService.getOne throw error: ${error}`));

        return student?.data;
    }

    static async store (student) {
        const operation = await axios.post(`http://localhost:5678/api/exams`, student)
            .catch((error) => console.log(`ExamsService.store throw error: ${error}`));

        return operation?.data;
    }

    static async update (id, student) {
        const operation = await axios.put(`http://localhost:5678/api/exams/${id}`, student)
            .catch((error) => console.log(`ExamsService.update throw error: ${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/exams/${id}`)
            .catch((error) => console.log(`ExamsService.deleteOne throw error: ${error}`));

        return operation?.data;
    }
}