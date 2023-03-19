import axios from "axios";

export default class StudentService {
    static async getAll () {
        const students = await axios.get(`http://localhost:5678/api/students`)
            .catch((error) => alert(`StudentService.getAll throw error: \n${error}`));

        students?.data.forEach((student) => {
            student.electives.forEach((elective) => {
                elective.from = new Date(elective.from).toLocaleString();
                elective.to = new Date(elective.to).toLocaleString();
            });
        });

        return students?.data;
    }

    static async getOne (id) {
        const student = await axios.get(`http://localhost:5678/api/students/${id}`)
            .catch((error) => alert(`StudentService.getOne throw error: \n${error}`));

        student?.data.electives.forEach((elective) => {
            elective.from = new Date(elective.from).toLocaleString();
            elective.to = new Date(elective.to).toLocaleString();
        });

        return student?.data;
    }

    static async store (student) {
        const operation = await axios.post(`http://localhost:5678/api/students`, student)
            .catch((error) => alert(`StudentService.store throw error: \n${error}`));

        return operation?.data;
    }

    static async update (id, student) {
        const operation = await axios.put(`http://localhost:5678/api/students/${id}`, student)
            .catch((error) => alert(`StudentService.update throw error: \n${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/students/${id}`)
            .catch((error) => alert(`StudentService.deleteOne throw error: \n${error}`));

        return operation?.data;
    }
}