import Cart from '../service/Cart';
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new movie add', () => {
  const cart=  new Cart() ;
  cart.add(new Movie(
  4242,
  'Мстители',
  'The Avengers',
  2012,
  'США',
  'Avengers Assemble!',
  'фантастика, боевик, фентези, приключения',
  1000,
  137,
  ))
  
  expect(cart.items[0].constructor).toEqual(Movie)
  // expect(cart.items.length).toBe(1)

})
