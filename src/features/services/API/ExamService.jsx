import axios from "axios";

export default class ExamService {
    static async getAll () {
        const exams = await axios.get(`http://localhost:5678/api/exams`)
            .catch((error) => console.log(`ExamsService.getAll throw error: ${error}`));

        exams?.data.forEach((exam) => {
            exam.date = new Date(exam.date).toLocaleString();
        });

        return exams?.data;
    }

    static async getOne (id) {
        const exam = await axios.get(`http://localhost:5678/api/exams/${id}`)
            .catch((error) => console.log(`ExamsService.getOne throw error: ${error}`));

        if (exam?.data) {
            exam.date = new Date(exam.date).toLocaleString();
        }

        return exam?.data;
    }

    static async store (exam) {
        const operation = await axios.post(`http://localhost:5678/api/exams`, exam)
            .catch((error) => console.log(`ExamsService.store throw error: ${error}`));

        return operation?.data;
    }

    static async update (id, exam) {
        const operation = await axios.put(`http://localhost:5678/api/exams/${id}`, exam)
            .catch((error) => console.log(`ExamsService.update throw error: ${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/exams/${id}`)
            .catch((error) => console.log(`ExamsService.deleteOne throw error: ${error}`));

        return operation?.data;
    }
}