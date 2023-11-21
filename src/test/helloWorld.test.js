import { describe, expect, it } from "@jest/globals";
import hello from "../helloWorld.js";

describe("returns function hello world", () => {
    it("returns function hello", () => {
        expect(hello()).toEqual("Hello world")
    })
})