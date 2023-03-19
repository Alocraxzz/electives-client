import axios from "axios";

export default class LessonTypeService {
    static async getAll () {
        const lessonsTypes = await axios.get(`http://localhost:5678/api/lessonsTypes`)
            .catch((error) => alert(`ElectivesService.getAll throw error: \n${error}`));

        return lessonsTypes?.data;
    }

    static async getOne (id) {
        const lessonType = await axios.get(`http://localhost:5678/api/lessonsTypes/${id}`)
            .catch((error) => alert(`ElectivesService.getOne throw error: \n${error}`));

        return lessonType?.data;
    }

    static async store (lessonType) {
        const operation = await axios.post(`http://localhost:5678/api/lessonsTypes`, lessonType)
            .catch((error) => alert(`ElectivesService.store throw error: \n${error}`));

        return operation?.data;
    }

    static async update (id, lessonType) {
        const operation = await axios.put(`http://localhost:5678/api/lessonsTypes/${id}`, lessonType)
            .catch((error) => alert(`ElectivesService.update throw error: \n${error}`));

        return operation?.data;
    }

    static async deleteOne (id) {
        const operation = await axios.delete(`http://localhost:5678/api/lessonsTypes/${id}`)
            .catch((error) => alert(`ElectivesService.deleteOne throw error: \n${error}`));

        return operation?.data;
    }
}