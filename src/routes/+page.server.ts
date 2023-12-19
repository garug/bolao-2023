const summary_endpoint = import.meta.env.ENDPOINT;

export async function load() {
  const response = await fetch(summary_endpoint, {
    method: "POST",
    headers: {
      "api-key": import.meta.env.API_KEY,
    },
    body: JSON.stringify({
      collection: "2023_summary",
      database: "years",
      dataSource: "cluster",
    }),
  });

  const documents = await response.json();

  return {
    ...documents.documents[0],
  };
}
