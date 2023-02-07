import axios from "axios";

export default class ElectiveService {
    static async getAll () {
        const electives = await axios.get(`http://localhost:5678/api/electives`)
            .catch((error) => console.log(`ElectivesService.getAll throw error: ${error}`));

        return electives?.data;
    }

    static async getOne (id) {
        const student = await axios.get(`http://localhost:5678/api/electives/${id}`)
            .catch((error) => console.log(`ElectivesService.getOne throw error: ${error}`));

        return student?.data;
    }

    static async store (student) {
        const operation = await axios.post(`http://localhost:5678/api/electives`, student)
            .catch((error) => console.log(`ElectivesService.store throw error: ${error}`));

        return operation?.data;
    }

    static async update (id, student) {
        const operation = await axios.put(`http://localhost:5678/api/electives/${id}`, student)
            .catch((error) => console.log(`ElectivesService.update throw error: ${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/electives/${id}`)
            .catch((error) => console.log(`ElectivesService.deleteOne throw error: ${error}`));

        return operation?.data;
    }
}