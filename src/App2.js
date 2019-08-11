import React, { } from 'react';

const pathAssets = "assets/image/";

function Meme(props) {
    return (
        <div>
            <h3>{props.src}</h3>
            <img src={props.src} alt="meme" width="250" height="250" />
        </div>
    );
}

function App2(props) {
        const listId = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
        return (
            <div>
                {
                    listId.map((string) =>
                    <Meme src={pathAssets + string} title={pathAssets + string} />
                    )
                }
            </div>
        );
    }

export default App2;