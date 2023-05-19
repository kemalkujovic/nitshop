import { userEndpoint } from "../endpoint/endpoints";

export async function fetchAllUsers() {
  const res = await fetch(userEndpoint.fetchAll);

  return res.json();
}
