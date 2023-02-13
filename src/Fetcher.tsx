export default async function fetcher(url: any) {
  return fetch(url).then((r) => r.json());
}

export const productsUrl =
  "https://react-tutorial-demo.firebaseio.com/products.json";
