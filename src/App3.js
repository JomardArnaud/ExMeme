import React, { useState } from 'react';
import { Button, GridList, Modal, Slider, Box, SwipeableDrawer  } from '@material-ui/core';
import SimpleModal from './lib';

import './App3.css';

const pathAssets = "assets/image/";
const imageAddPerClick = 3;
const imageLoadedAtStart = 2;

function Header(props) {
    return (
        <div>
            this a header
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
        <SimpleModal elementTodisplay={<img class="meme" src={props.src} alt="meme" width="250" height="250"/>}/>
    );
}

function Main(props) {
    const [nbImageLoaded, addImageLoad] = useState(imageLoadedAtStart);
    var idImageLoaded = Array.from(Array(nbImageLoaded).keys()); // the number of image + 1 EJS 6 demande à Asinthe si ça pose problème
    return (
        <GridList>
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
           <Button onClick={() => {addImageLoad(nbImageLoaded + imageAddPerClick)}}>Load more</Button>
        </GridList>
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