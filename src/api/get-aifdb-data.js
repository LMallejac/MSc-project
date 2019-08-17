const JSON_PLACEHOLDER_PATH = "https://jsonplaceholder.typicode.com/todos";
const AIF_DB_PATH = "http://www.aifdb.org/json/6156";

export default function getAifbData() {
  return fetch(JSON_PLACEHOLDER_PATH).then(response => response.json());
}
