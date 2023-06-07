import axios from "axios";

export const fetchDataFromApi = async ()=>{
    const {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
    return data;
}