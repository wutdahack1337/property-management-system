import { describe, expect, it, beforeAll } from "vitest";
import request from "supertest";

import app from "../app.js";

beforeAll(async () => {
    await request(app).post("/api/building").send({name: "A"});
    await request(app).post("/api/unit").send({buildingId: 1, name: "A101", status: "available"});
    await request(app).post("/api/resident").send({unitId:1, name:"Minh", phoneNumber: "123"});
    await request(app).post("/api/resident").send({unitId:1, name:"Khang", phoneNumber: "456"});
});

describe("POST /api/account", () => {
    it("happy path", async () => {
        let response = await request(app).post("/api/account").send({residentId:1, username: "minh", password: "minh123"});
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({id: 1, residentId: 1, username: "minh"});
        
        response = await request(app).post("/api/account").send({residentId:2, username: "khang", password: "khang456"});
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({id: 2, residentId: 2, username: "khang"});
    });
});

describe("GET /api/account", () => {
    it("happy path", async () => {
        const response = await request(app).get("/api/account");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({id: 1, residentId: 1, username: "minh"}),
            expect.objectContaining({id: 2, residentId: 2, username: "khang"})
        ]));
    });
});

describe("PATCH /api/account", () => {
    it("happy path", async () => {
        const response = await request(app).patch("/api/account/2").send({username: "tankhang"});
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({id: 2, residentId: 2, username: "tankhang"});
    });
});

describe("DELETE /api/account", () => {
    it("happy path", async () => {
        const response = await request(app).delete("/api/account/2");
        expect(response.status).toBe(204);
        expect(response.body).not.toEqual(expect.arrayContaining([
            expect.objectContaining({id: 2})
        ]));
    });
});