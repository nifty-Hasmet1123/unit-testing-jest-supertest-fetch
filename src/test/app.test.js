import { describe, expect, jest } from "@jest/globals";
import { app } from "../app.js";
import request from "supertest";

// describe("GET /", () => {
//     // success test
//     it("should return the title if it exists", async () => {
//         const response = await request(app).get("/");

//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty("title");
//     });

//     // fail test
//     it("should return an error if the title does not exist", async () => {
//         // save the original fetch function
//         const originalFetch = global.fetch;

//         // mock the fetch function to simulate an error or missing title
//         global.fetch = jest.fn(() => Promise.resolve({ json: () => ({}) }));

//         const response = await request(app).get("/");

//         expect(response.status).toBe(400);
//         expect(response.body).toHaveProperty("error", "no title");

//         // restore the original fetch function to ensure
//         // that you don't affect other parts of your application or 
//         // subsequent test cases.
//         global.fetch = originalFetch;
//     });
// });

// using classes
class MyAppTests {
    // success test
    async testSuccessScenario() {
        const response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty(
            "title",
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        );
    };

    // fail test v2
    async testFailScenario() {
        // spy on global fetch and mock its implementation
        jest.spyOn(global, "fetch").mockImplementation(() => {
            return Promise.resolve({ json: () => {
                return {};
            }})
        });

        const response = await request(app).get("/");

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("error", "no title");

        // restore the original fetch function after the test
        jest.restoreAllMocks();
    };
}

// now add the describe function here
describe("app", () => {
    const appTest = new MyAppTests();

    it("should return the title if it exists", async () => {
        await appTest.testSuccessScenario();
    });

    it("should return an error if the title does not exist", async () => {
        await appTest.testFailScenario();
    });
})


// fail test for class
// async testFailScenario() {
//     const originalFetch = global.fetch;

//     // mock the fetch function to simulate an error or missing title
//     global.fetch = jest.fn(() => {
//         return Promise.resolve({ json: () => ({}) })
//     });
//     // jest.spyOn(global, "fetch").mockImplementation(() => {
//     //     Promise.resolve({ json: () => ({}) })
//     // })

//     const response = await request(app).get("/");

//     expect(response.status).toBe(400);
//     expect(response.body).toHaveProperty("error", "no title");

//     global.fetch = originalFetch;
// }