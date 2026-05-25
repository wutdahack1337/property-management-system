import * as service from "../service/unit.js"

export async function createUnit(request, response, next){
    try {
        const { buildingId, name, status } = request.body;
        const responseContent = await service.createUnit(buildingId, name, status);
        response.status(201).json(responseContent);
    } catch (error) {
        next(error);
    }
}


export async function getUnit(request, response, next){
    try {
        const responseContent = await service.getUnit();
        response.status(200).json(responseContent);
    } catch (error) {
        next(error);
    }
}


export async function updateUnit(request, response, next){
    try {
        const id = request.params.id;
        const { buildingId, name, status} = request.body;

        const responseContent = await service.updateUnit(id, buildingId, name, status);
        response.status(200).json(responseContent);
    } catch (error) {
        next(error);
    }
}


export async function deleteUnit(request, response, next){
    try {
        const id = request.params.id;
        await service.deleteUnit(id);
        response.status(204).send();
    } catch (error) {
        next(error);
    }
}