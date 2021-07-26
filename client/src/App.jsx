import React from 'react';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
        }
    }
    render() {
        return ( 
            <div>
                <h1>This is a JavaScript application rendering an element</h1>
                <p>What i Have learned is that I need to develop locally for speed, but the website does deploy in about a minute after pushing</p>
            </div>

        )
    }
  }
  export default App;