export default class Validator {
    static validateUsername(username) {
        const validateStartFinish = /^[a-z][-_a-z\d]*[a-z]$/i.test(username);
        const validateNumberStreak = /[\d]{4}/.test(username);
        
        if (validateStartFinish && !validateNumberStreak) {  
            return 'Имя подходит!';
        } else {
            return 'Имя не подходит!';
        }
    }
}
