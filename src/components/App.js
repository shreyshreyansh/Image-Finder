import React from 'react';
import axios from "axios";
import SearchBar from './SearchBar'

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {

        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 4gWRwUUlK3-CrVaoc-0OUu-KAjqp44XsOBf3azu3lNY'
            }
        });

        this.setState( { images: response.data.results} );
        console.log(this.state.images);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop:'20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;