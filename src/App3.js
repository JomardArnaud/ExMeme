import React, { useState } from 'react';
import { Button, Slider, Box, SwipeableDrawer  }from '@material-ui/core';

import './App3.css';

const pathAssets = "assets/image/";
const imageAddPerClick = 3;
const imageLoadedAtStart = 2;

/*
            <Box color="text.primary" clone>
               <Button> test header</Button>
            </Box> */
function Header(props) {
    return (
        <div>
        </div>
    );
}

function Footer(props) {
    return (
        <div>this is footer</div>
    );
}

function Meme(props) {
    return (
        <div>
            <img class="meme" src={props.src} alt="meme" width="250" height="250"/>
        </div>
    );
}

function Main(props) {
    const [nbImageLoaded, addImageLoad] = useState(imageLoadedAtStart);
    var idImageLoaded = Array.from(Array(nbImageLoaded).keys()); // the number of image + 1 EJS 6 demande à Asinthe si ça pose problème
    return (
        <div id="blockMeme">
            {
                idImageLoaded.map(function(id) {
                    if (id % 5) {
                        return(
                                <Meme src={pathAssets + id + '.jpg'} title={pathAssets + id } />
                        )
                    }
                    else {
                        return(
                                <Meme src={pathAssets + id + '.jpg'} title={pathAssets + id } />
                        )
                    }

                })
            }
            <SwipeableDrawer />
            {/*<Button onClick={() => {addImageLoad(2)}}>Load more</Button>}*/}
        </div>
    );
}


function App3(props) {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App3;