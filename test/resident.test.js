import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";

import app from "../app.js";

beforeAll(async () => {
    await request(app).post("/api/building").send({name: "A"});
    await request(app).post("/api/unit").send({buildingId: 1, name: "A101", status: "available"});
});

describe("POST /api/resident", () => {
    it("happy path", async () => {
        let response = await request(app).post("/api/resident").send({unitId:1, name:"Minh", phoneNumber: "123"});
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({id:1, unitId: 1, name:"Minh", phoneNumber: "123"});

        response = await request(app).post("/api/resident").send({unitId:1, name:"Khang", phoneNumber: "456"});
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({id:2, unitId: 1, name:"Khang", phoneNumber: "456"});
    });
});

describe("GET /api/resident", () => {
    it("happy path", async () => {
        const response = await request(app).get("/api/resident");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({id:1, unitId: 1, name:"Minh", phoneNumber: "123"}),
            expect.objectContaining({id:2, unitId: 1, name:"Khang", phoneNumber: "456"})
        ]))
    });
});

describe("PATCH /api/resident", () => {
    it("happy path", async () => {
        const response = await request(app).patch("/api/resident/2").send({name:"Tan Khang", phoneNumber: "4567"});

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({id:2, unitId: 1, name:"Tan Khang", phoneNumber: "4567"})
    });
});

describe("DELETE /api/resident", () => {
    it("happy path", async () => {
        const response = await request(app).delete("/api/resident/2");
        expect(response.status).toBe(204);
        expect(response.body).not.toEqual(expect.arrayContaining([
            expect.objectContaining({id: 2})
        ]));
    });
});