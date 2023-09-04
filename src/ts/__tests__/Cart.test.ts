import Cart from '../service/Cart';
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum"
import Phone from "../domain/Phone"
import Laptop from '../domain/Laptop';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new movie add', () => {
  const cart=  new Cart() ;
  cart.add(new Movie(4242,'Мстители','The Avengers',2012,'США','Avengers Assemble!','фантастика, боевик, фентези, приключения',1000,137,))
  
  expect(cart.items[0].constructor).toEqual(Movie)
})

test('test total sum', () => {
  const cart=  new Cart() ;
  cart.add(new Movie(4242,'Мстители','The Avengers',2012,'США','Avengers Assemble!','фантастика, боевик, фентези, приключения',1000,137,))
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  
  expect(cart.total()).toEqual(3900)
})

test('test total sum with discount', () => {
  const cart=  new Cart() ;
  cart.add(new Movie(4242,'Мстители','The Avengers',2012,'США','Avengers Assemble!','фантастика, боевик, фентези, приключения',1000,137,))
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  
  expect(cart.totalWithDiscount(10)).toEqual(3510)
})

test('test del items from cart', () => {
  const cart=  new Cart() ;
  cart.add(new Movie(4242,'Мстители','The Avengers',2012,'США','Avengers Assemble!','фантастика, боевик, фентези, приключения',1000,137,))
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  
  cart.del(4242)

  expect(cart.items.length).toBe(2)
})

test('minus from cart ', () => {
  const cart=  new Cart() ;
  cart.add(new Phone(4242,'Iphone',50000, 5))
  cart.minus(4242)
  
  expect(cart.items[0].quantity).toEqual(4)
})

test('minus from cart when 1 quantity ', () => {
  const cart=  new Cart() ;
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Phone(4242,'Iphone',50000, 1))
  cart.minus(4242)
  
  expect(cart.items.length).toBe(1)
})

test('minus from cart undef ', () => {
  const cart=  new Cart() ;
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.minus(1001)
 
  expect(cart.items[0].quantity).toEqual(undefined)
})

test('test total whit quantity ', () => {
  const cart=  new Cart() ;
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Phone(4242,'Iphone',50000, 1))
  cart.add(new Phone(4242,'Iphone',50000, 4))
  cart.minus(4242)
  cart.minus(1001)

  expect(cart.total()).toEqual(202000)
})

test('minus from cart ', () => {
  const cart=  new Cart() ;
  cart.add(new Laptop(4343,'HP',50000, 5))
  
  expect(cart.items[0].constructor).toEqual(Laptop)
})

test('test add to cart ', () => {
  const cart=  new Cart() ;
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Phone(4242,'Iphone',50000, 4))
  cart.add(new Laptop(4343,'HP',50000, 4))
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Phone(4242,'Iphone',50000, 1))
  cart.add(new Laptop(4343,'HP',50000, 7))

  expect(cart.items.length).toBe(3)
})
