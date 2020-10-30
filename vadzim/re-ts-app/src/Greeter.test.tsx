import { shorten } from './Greeter';

test('shorten "loremipsum" to "lor..."', () => {
  expect(shorten('loremipsum', 6)).toEqual('lorem...');
});