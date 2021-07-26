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
                <div class="row">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="./resources/images/AndysConcrete/sideWalkDemoStart.jpg" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="./resources/images/AndysConcrete/sideWalkDemoFirstMiddle.jpg" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="./resources/images/AndysConcrete/sideWalkDemoSecondMiddle.jpg" alt="Third slide"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }
  export default App;