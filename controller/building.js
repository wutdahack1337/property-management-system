import * as service from "../service/building.js"

export async function createBuilding(request, response, next) {
    try {
        const { name } = request.body;
        const responseContent = await service.createBuilding(name);
        response.status(201).json(responseContent);
    }
    catch (error) {
        next(error);
    }
}

export async function getBuilding(request, response, next) {
    try {
        const responseContent = await service.getBuilding();
        response.status(200).json(responseContent);
    } catch (error) {
        next(error);
    }
}

export async function updateBuilding(request, response, next) {
    try {
        const id = request.params.id;
        const { name } = request.body;
        const responseContent = await service.updateBuilding(id, name);
        response.status(200).json(responseContent);
    } catch (error) {
        next(error);
    }
}

export async function deleteBuilding(request, response, next) {
    try {
        const id = request.params.id;
        await service.deleteBuilding(id);
        response.status(204).send();
    } catch (error) {
        next(error);
    }
}