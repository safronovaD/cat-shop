type tCategory = {
  id: number,
  path: string,
  title: string,
  items: Array<tProduct>
};

type tProduct = {
  id: number,
  name: string,
  weight: string,
  composition: string,
  price: number,
  image: string
};

export { tCategory, tProduct };