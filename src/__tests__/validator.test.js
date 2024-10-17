import Validator from "../js/Validator.js";

test('Проверка с правильным username', () => {
    const username = 'a-_aZ123Z';
    const result = 'Имя подходит!';

    expect(result).toBe(Validator.validateUsername(username));
});

test('Проверка с неправильным username', () => {
    const username = '-1234_';
    const result = 'Имя не подходит!';

    expect(result).toBe(Validator.validateUsername(username));
});


