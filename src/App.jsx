import useSWR from "swr";
import "./App.css";

const fetcher = (url) =>
  fetch(url, { headers: { Accept: "application/json" } }).then((res) =>
    res.json()
  );

function App() {
  const url = "https://httpstat.us/200?sleep=2000";

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;

  return <>{data && <p>Status : {data.description}</p>}</>;
}

export default App;
