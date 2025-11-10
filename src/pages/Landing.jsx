import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCockTailQuery(searchTerm));
    return { searchTerm };
  };

// const searchCockTailQuery = ( searchTerm ) => {
//   return {
//     queryKey: ['search', searchTerm || 'all'],
//     queryFn: async () => {
//       searchTerm = searchTerm || 'a';
//       const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
//       return response.data.drinks;
//     }
//   }
// }
const searchCockTailQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      // Default to 'a' if no search term is provided since API has changed
      searchTerm = searchTerm || 'all';

      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};
const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCockTailQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;





