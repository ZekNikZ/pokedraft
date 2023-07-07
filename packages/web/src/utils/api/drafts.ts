import { Draft } from "pokedraft-types";
import { apiClient } from ".";

export async function getAllDrafts(): Promise<Draft[]> {
  return (await apiClient.get("/drafts")).data;
}
