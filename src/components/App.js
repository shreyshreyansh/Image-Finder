import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ marginTop:'20px' }}>
                <SearchBar />
            </div>
        );
    }
}

export default App;