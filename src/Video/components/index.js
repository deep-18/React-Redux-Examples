import React, { Fragment } from "react";
import selectSong from "../actions";
import SongList from "./SongList";

const Index = () => {
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            </div>
        </div>
    )
}

export default Index;