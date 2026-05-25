// import { createResident, getResident, updateResident, deleteResident } from "../service/resident.js";

import * as service from "../service/resident.js";

export async function createResident(request, response, next) {
    try {
        const {unitId, name, phoneNumber} = request.body;
        const responseContent = await service.createResident(unitId, name, phoneNumber);
        response.status(201).json(responseContent);
    } catch (error) {
        next(error);
    }
}

export async function getResident(request, response, next) {
    try {
        const responseContent = await service.getResident();
        response.status(200).json(responseContent);
    } catch (error) {
        next(error);
    }
}


export async function updateResident(request, response, next) {
    try {
        const id = request.params.id;
        const {unitId, name, phoneNumber} = request.body;

        const responseContent = await service.updateResident(id, unitId, name, phoneNumber);
        response.status(200).json(responseContent);
    } catch (error) {
        next(error);
    }
}


export async function deleteResident(request, response, next) {
    try {
        const id = request.params.id;
        await service.deleteResident(id);
        response.status(204).send();
    } catch (error) {
        next(error);
    }
}
