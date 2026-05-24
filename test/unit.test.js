import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";

import app from "../app.js";

beforeAll(async() => {
    await request(app).post("/api/building").send({ name: "A" });
});

describe("POST /api/unit", () => {
    it("happy path", async () => {
        let response = await request(app).post("/api/unit").send({buildingId: 1, name: "A101", status: "available"});
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({id:1, buildingId:1, name:"A101", status:"available"});

        response = await request(app).post("/api/unit").send({buildingId: 1, name: "A102", status: "available"});
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({id:2, buildingId:1, name:"A102", status:"available"});
    });
});

describe("GET /api/unit", () => {
    it("happy path", async () => {
        const response = await request(app).get("/api/unit");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({id:1, buildingId:1, name: "A101", status:"available"}),
            expect.objectContaining({id:2, buildingId:1, name:"A102", status: "available"})
        ]));
    });
});

describe("PATCH /api/unit", () => {
    it("update happy path", async () => {
        const response = await request(app).patch("/api/unit/2").send({status: "occupied"});
        
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({id: 2, buildingId: 1, name: "A102", status: "occupied"});
    });
});

describe("DELETE /api/unit", () => {
    it("delete happy path", async () => {
        const response = await request(app).delete("/api/unit/2");
        
        expect(response.status).toBe(204);
        expect(response.body).not.toEqual(expect.arrayContaining([
            expect.objectContaining({id: 2})
        ]))
    });
});