import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./app.js";

// not add async because I will use this items for another queries
describe("POST /api/building", () => {
    it("happy path", async () => {
        let response = await request(app).post("/api/building").send({ name: "A"});
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({id: 1, name:"A"});

        response = await request(app).post("/api/building").send({ name: "B"});
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({id: 2, name:"B"});
    });
}); 

describe("GET /api/building", () => {
    it("happy path", async () => {
        const response = await request(app).get("/api/building");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({id: 1, name:"A"}),
            expect.objectContaining({id:2, name:"B"})
        ]));
    });
});

describe("PATCH /api/building", () => {
    it("happy path", async () => {
        const response = await request(app).patch("/api/building/2").send({name:"BBB"});

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({id:2, name:"BBB"});
    });
});

describe("DELETE /api/building", () => {
    it("happy path", async () => {
        const deleteResponse = await request(app).delete("/api/building/2");
        expect(deleteResponse.status).toBe(204);

        const getResponse = await request(app).get("/api/building");
        expect(getResponse.body).not.toEqual(expect.arrayContaining([
            expect.objectContaining({id: 2})
        ]));
    });
});