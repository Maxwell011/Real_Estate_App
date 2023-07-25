import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
 const { data } = await axios.get(url, {
   headers: {
     "X-RapidAPI-Key": "36a3ecd110msh5150604f4eb279ap199febjsn37f9d555f5d1",
     "X-RapidAPI-Host": "bayut.p.rapidapi.com",
   },
 });

 return data
}