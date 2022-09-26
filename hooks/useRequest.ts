import useSWR, { Fetcher } from "swr";
import { NamedAPIResourceList, Pokemon, PokemonSpecies } from "../interface";

const fetcher: Fetcher<NamedAPIResourceList> = (url: string) =>
  fetch(url).then((res) => res.json());

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const PAGE_LIMIT = 100;

export default function useFetchPokemon() {
  const uri = `${API_URL}?limit=${PAGE_LIMIT}`;
  const { data: result, error } = useSWR(uri, fetcher);

  return { result, error };
}

const fetcherDetails: Fetcher<Pokemon> = (url: string) =>
  fetch(url).then((res) => res.json());

export function useFetchPokemonDetails(name: string) {
  const uri = `${API_URL}/${name}`;
  const { data: result, error } = useSWR(uri, fetcherDetails);

  return { result, error };
}

const fetcherSpecies: Fetcher<PokemonSpecies> = (url: string) =>
  fetch(url).then((res) => res.json());

export function useFetchPokemonSpecies(name: string) {
  const uri = `${"https://pokeapi.co/api/v2/pokemon-species"}/${name}`;
  const { data: result, error } = useSWR(uri, fetcherSpecies);

  return { result, error };
}
