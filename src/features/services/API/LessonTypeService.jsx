import axios from "axios";

export default class LessonTypeService {
    static async getAll () {
        const lessonsTypes = await axios.get(`http://localhost:5678/api/lessonstypes`)
            .catch((error) => console.log(`ElectivesService.getAll throw error: ${error}`));

        return lessonsTypes?.data;
    }

    static async getOne (id) {
        const lessonType = await axios.get(`http://localhost:5678/api/lessonstypes/${id}`)
            .catch((error) => console.log(`ElectivesService.getOne throw error: ${error}`));

        return lessonType?.data;
    }

    static async store (lessonType) {
        const operation = await axios.post(`http://localhost:5678/api/lessonstypes`, lessonType)
            .catch((error) => console.log(`ElectivesService.store throw error: ${error}`));

        return operation?.data;
    }

    static async update (id, lessonType) {
        const operation = await axios.put(`http://localhost:5678/api/lessonstypes/${id}`, lessonType)
            .catch((error) => console.log(`ElectivesService.update throw error: ${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/lessonstypes/${id}`)
            .catch((error) => console.log(`ElectivesService.deleteOne throw error: ${error}`));

        return operation?.data;
    }
}