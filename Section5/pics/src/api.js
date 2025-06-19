// Contains all the code needed to communicate with the unsplash api

import axios from 'axios'

// Searches for images based on a query 'term' provided by a user
const searchImages = async (term) => {
    const response= await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID bSXCnoWQe54QISNma9UPwq81Ut2rjf88jqRyPxeVv50'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;