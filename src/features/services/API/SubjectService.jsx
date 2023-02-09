import axios from "axios";

export default class SubjectService {
    static async getAll () {
        const subjects = await axios.get(`http://localhost:5678/api/subjects`)
            .catch((error) => console.log(`ElectivesService.getAll throw error: ${error}`));

        subjects?.data.forEach((subject) => {
            subject.from = new Date(subject.from).toLocaleString();
            subject.to = new Date(subject.to).toLocaleString();
        });

        return subjects?.data;
    }

    static async getOne (id) {
        const subject = await axios.get(`http://localhost:5678/api/subjects/${id}`)
            .catch((error) => console.log(`ElectivesService.getOne throw error: ${error}`));

        if (subject?.data) {
            subject.data.from = new Date(subject.data.from).toLocaleString();
            subject.data.to = new Date(subject.data.to).toLocaleString();
        }

        return subject?.data;
    }

    static async store (subject) {
        const operation = await axios.post(`http://localhost:5678/api/subjects`, subject)
            .catch((error) => console.log(`ElectivesService.store throw error: ${error}`));

        return operation?.data;
    }

    static async update (id, subject) {
        const operation = await axios.put(`http://localhost:5678/api/subjects/${id}`, subject)
            .catch((error) => console.log(`ElectivesService.update throw error: ${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/subjects/${id}`)
            .catch((error) => console.log(`ElectivesService.deleteOne throw error: ${error}`));

        return operation?.data;
    }
}