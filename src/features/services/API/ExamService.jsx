import axios from "axios";

export default class ExamService {
    static async getAll () {
        const exams = await axios.get(`http://localhost:5678/api/exams`)
            .catch((error) => alert(`ExamsService.getAll throw error: \n${error}`));

        exams?.data.forEach((exam) => {
            exam.date = new Date(exam.date).toLocaleString();
        });

        return exams?.data;
    }

    static async getOne (id) {
        const exam = await axios.get(`http://localhost:5678/api/exams/${id}`)
            .catch((error) => alert(`ExamsService.getOne throw error: \n${error}`));

        if (exam?.data) {
            exam.date = new Date(exam.date).toLocaleString();
        }

        return exam?.data;
    }

    static async store (exam) {
        const operation = await axios.post(`http://localhost:5678/api/exams`, exam)
            .catch((error) => alert(`ExamsService.store throw error: \n${error}`));

        return operation?.data;
    }

    static async update (id, exam) {
        const operation = await axios.put(`http://localhost:5678/api/exams/${id}`, exam)
            .catch((error) => alert(`ExamsService.update throw error: \n${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/exams/${id}`)
            .catch((error) => alert(`ExamsService.deleteOne throw error: \n${error}`));

        return operation?.data;
    }
}