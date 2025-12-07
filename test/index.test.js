

const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    test('capitalizes each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });
});

describe('filterActiveUsers', () => {
    test('filters only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false }
        ];
        expect(filterActiveUsers(users)).toEqual([{ name: 'Alice', isActive: true }]);
    });
});

describe('logAction', () => {
    test('logs action with timestamp', () => {
        const username = 'Alice';
        const action = 'login';
        const result = logAction(action, username);
        expect(result).toMatch(new RegExp(`User ${username} performed ${action} at .*`));
    });
});
