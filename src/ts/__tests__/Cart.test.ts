import Cart from '../service/Cart';
import Movie from '../domain/Movie';
test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test("movie adding to the cart", () => {
  const cart = new Cart();

  const movie = new Movie(1009, "Avengers", "Joss Whedon", 500, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  cart.add(movie);
  expect(cart.items.length).toBe(1);
})
test("movie class working", () => {
    const movie = new Movie(1009, "Avengers", "Joss Whedon", 500, 2012, "USA", "Avengens Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);

    expect(movie instanceof Movie).toBe(true);
})


