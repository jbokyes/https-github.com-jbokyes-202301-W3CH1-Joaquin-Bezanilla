import { Character } from './characters.ts';
import { King } from './characters.ts';
import { Fighter } from './characters.ts';

describe('Given the class Character', () => {
  describe(
    'When we create a character',
    test('Then if the property name is Bronn', () => {
      const Personaje1 = new Character('Joaquin', 27, 'Bezanilla', true);
      expect(Personaje1).toHaveProperty('name');
    })
  );
});
