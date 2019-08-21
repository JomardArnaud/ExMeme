import React, { useState } from 'react';
import { Button, GridList, Modal, Slider, Box, SwipeableDrawer  } from '@material-ui/core';
import { PersistentDrawerLeft, SimpleModal } from './lib';

const pathAssets = "assets/cats/";
const imageAddPerClick = 5;
const imageLoadedAtStart = 5;

function Footer(props) {
    return (
        <div>this is footer</div>
    );
}

function Meme(props) {
    return (
        <SimpleModal elementTodisplay={<img class="meme" src={props.src} alt="meme" width="160" height="160"/>}/>
    );
}

function Main(props) {
    const [nbImageLoaded, addImageLoad] = useState(imageLoadedAtStart);
    var idImageLoaded = Array.from(Array(nbImageLoaded).keys()); // the number of image + 1 EJS 6 demande à Asinthe si ça pose problème
    return (
        <PersistentDrawerLeft mainElement={<GridList>
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
        </GridList>}>

        </PersistentDrawerLeft>
    );
}

function App3(props) {
    return (
        <div>
            <Main />
            <Footer />
        </div>
    );
}

export default App3;