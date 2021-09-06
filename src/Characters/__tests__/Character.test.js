import Character from '../Character';

const character = new Character('Shrek', 'Bowerman', 1, 1, 1, 1);

test('test Character name', () => expect(character.name).toBe('Shrek'));
test('test Character type', () => expect(character.type).toBe('Bowerman'));
test('test Character health', () => expect(character.health).toBe(1));
test('test Character level', () => expect(character.level).toBe(1));
test('test Character attack', () => expect(character.attack).toBe(1));
test('test Character defence', () => expect(character.defence).toBe(1));
test('test wrong Character name', () => expect(() => new Character(1, 'Bowerman', 1, 1, 1, 1)).toThrow('min name lenght is 2, max is 10'));
test('test wrong Character type', () => expect(() => new Character('Ram', 'Bow', 1, 1, 1, 1)).toThrow('is unsupported type'));
