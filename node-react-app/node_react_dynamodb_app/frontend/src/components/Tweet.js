import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/tweets');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => {
                <div>
                    {item.name}
                    {item.msg}
                    {item.username}
                </div>
                
            })
        }
        </section>
        
    );
}

export default Tweet;