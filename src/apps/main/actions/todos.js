export function loadTodos () {
  return {
    type: "LOAD_TODOS",
    promise: (httpClient) => {
      return httpClient.get("https://dog.ceo/api/breeds/list/all");
    }
  };
}

