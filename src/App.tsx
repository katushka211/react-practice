import { useQuery } from "@tanstack/react-query";
const apiKey =
  "live_b03pKIxdIjFiHDeQ94SCVqGaMhAXy1iOmoojiE7WpAfiATrGoGB21Kqg7iFnL3ni";
function App() {
  const dogId = 1;
  const { isLoading, data } = useQuery({
    queryKey: ["dog", dogId],
    queryFn: () =>
      fetch(`https://api.thedogapi.com/v1/breeds/${dogId}`, {
        headers: {
          "x-api-key": apiKey,
        },
      }).then((response) => response.json()),
  });

  return (
    <>
      <h1>Tanstack Query</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{data ? data.bred_for : "Product not found"}</div>
      )}
    </>
  );
}

export default App;
