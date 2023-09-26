import axios from "axios";

export const getLists = async () => {
  const response = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon",
  );
  return response;
};
