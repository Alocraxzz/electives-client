import axios from "axios";
export default class ElectiveService {
    static async getAll () {
        const electives = await axios.get(`http://localhost:5678/api/electives`)
            .catch((error) => alert(`ElectivesService.getAll throw error: \n${error}`));

        electives?.data.forEach((elective) => {
            elective.from = new Date(elective.from).toLocaleString();
            elective.to = new Date(elective.to).toLocaleString();
        });

        return electives?.data;
    }

    static async getOne (id) {
        const elective = await axios.get(`http://localhost:5678/api/electives/${id}`)
            .catch((error) => console.log(`ElectivesService.getOne throw error: \n${error}`));

        if (elective?.data) {
            elective.from = new Date(elective.from).toLocaleString();
            elective.to = new Date(elective.to).toLocaleString();
        }

        return elective?.data;
    }

    static async store (elective) {
        const operation = await axios.post(`http://localhost:5678/api/electives`, elective)
            .catch((error) => console.log(`ElectivesService.store throw error: \n${error}`));

        return operation?.data;
    }

    static async update (id, elective) {
        const operation = await axios.put(`http://localhost:5678/api/electives/${id}`, elective)
            .catch((error) => console.log(`ElectivesService.update throw error: \n${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/electives/${id}`)
            .catch((error) => console.log(`ElectivesService.deleteOne throw error: \n${error}`));

        return operation?.data;
    }
}