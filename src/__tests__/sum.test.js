import { Sum } from "../components/sum";

test("Sum function should calculate sum of two numbers", () => {
    const result = Sum(5,5);
    expect(result).toBe(10);
})