import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

// Import our search method
import from (THIS IS THE API CALL THAT IS BEING BUILT) '../utils/API';

const SearchResultContainer = () => {
    // Declare a new state variable, "photographers"
    const [photographers, setPhotographers] = useState([]);

    // Method to get search results and set state
    const searchPhotographers = async (query) => {
        const response = await
            //this will be OUR exported fetch call
            (query);
        setPhotographers(response.data.data);
    };

    // We want to run this method when the component first loads so that we have images of kittens to display
    // The second argument is the dependency array. This means that this method will only run when the component first loads
    useEffect(() => {
        searchPhotographers('photographer');
    }, []);

    return (
        <div>
            {/* Pass our results to the ResultsList component to map over */}
            <SearchResults results={photographers} />
        </div>
    );
};

export default SearchResultContainer