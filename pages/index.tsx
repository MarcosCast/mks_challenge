import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
        const url = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=ASC';
        const response = await fetch(url);
        const objJson = await response.json()
        setData(objJson. Resultados)
    }
    fetchApi();
    },[])

    return(
        <div>
            <h1>MKS</h1>
            <div>
                {
                    data.map((e) => (
                        <div key={e.id}>
                          <h4>{e.name}</h4>
                          <img src={e.photo} alt="" />
                          <h4>{`R$ ${e.price}`}</h4>
                          </div>
                    ))      
                }            
            </div>

        </div>
        
        
    )
}

export default Home;
    
    
    