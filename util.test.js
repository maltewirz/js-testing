const { generateText, checkAndGenerate } = require('./util');


/** Unit tests */
test('should output name and age', () => {
    const text = generateText('Dude', 30)
    expect(text).toBe('Dude (30 years old)');
    const text2 = generateText('Anna', 18);
    expect(text2).toBe('Anna (18 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
})

/** Integration tests - inside it calls 2 functions */
test('should generate a valid text ouput', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)');
})