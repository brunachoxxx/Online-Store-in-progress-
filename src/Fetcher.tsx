export default async function fetcher(url: string) {
  return fetch(url).then((r) => r.json());
}

export const productsUrl = "https://react-tutorial-demo.firebaseio.com/";
