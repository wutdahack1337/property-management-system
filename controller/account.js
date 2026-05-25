import * as service from "../service/account.js";

export async function createAccount(request, response, next) {
    try {
        const { residentId, username, password } = request.body;
        const responseContent = await service.createAccount(residentId, username, password);
        response.status(201).json(responseContent);
    } catch (error) {
        next(error);
    }
}

export async function getAccount(request, response, next) {
    try {
        const responseContent = await service.getAccount();
        response.status(200).json(responseContent);
    } catch (error) {
        next(error);
    }
}


export async function updateAccount(request, response, next) {
    try {
        const id = request.params.id;
        const { residentId, username, password } = request.body;
        const responseContent = await service.updateAccount(id, residentId, username, password);
        response.status(200).json(responseContent);
    } catch (error) {
        next(error);
    }
}


export async function deleteAccount(request, response, next) {
    try {
        const id = request.params.id; 
        await service.deleteAccount(id);
        response.status(204).send();
    } catch (error) {
        next(error);
    }
}
