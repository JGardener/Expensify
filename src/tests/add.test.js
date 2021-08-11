const add = (a,b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("Should add two numbers", () => {
    const result = (add(3,4));
    expect(result).toBe(7);
});

test("Should return the user-provided name in a greeting", () => {
    const greetingResult = generateGreeting("James")
    expect(greetingResult).toBe("Hello James!");
})

test("Should return 'Hello Anonymous!' due to no user-provided name", () => {
    const anonResult = generateGreeting();
    expect(anonResult).toBe("Hello Anonymous!")
})