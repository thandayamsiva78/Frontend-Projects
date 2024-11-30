import React from "react";
import AlbumList from "./AlbumList";

function Home() {
    return (
        <>
            <article>
                <header>
                    <h1 className="text-2xl mb-4">Popular Songs</h1>
                </header>
                <section>
                    <AlbumList />
                </section>
            </article>
        </>
    );
}

export default Home;
