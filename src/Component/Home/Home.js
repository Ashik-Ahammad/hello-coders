import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Body from './Body/Body';
import Data from './Body/Data/Data';


import './Home.css'

const Home = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="container ">
            <Body></Body>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 m-5 ">
                {
                    service.map(services => <Data
                        key={services.id}
                        services={services}
                    ></Data>)
                }
            </div>
        </div>
    );
};

export default Home;