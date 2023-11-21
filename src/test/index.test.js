import { describe, expect, it } from "@jest/globals";
import { home, about } from "../index.js";

describe("returns function home", () => {
    it("should return expected value", () => {
        expect(home()).toEqual("function home")
    });
});

describe("returns function about", () => {
    it("should return expected value", () => {
        expect(about()).toEqual("function about")
    });
});