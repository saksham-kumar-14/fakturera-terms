import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import Nav from './Nav'

function Home() {

    useEffect(() => {
        updateText("english");
    }, []);

    const BASE_URL = import.meta.env.VITE_BASE_URL;
    function updateText(lang){
        try {
            fetch(BASE_URL)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setAllLngs(data);
                data.map((e) => {
                    if(e.language === lang){
                        setLng(e);
                    }
                })
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        } catch (error) {
            console.error('Error fetching texts:', error);
        }
    }
;
    const [lng, setLng] = useState({});
    const [allLngs, setAllLngs] = useState([]);

    return (
        <div>

            <Nav lng = {lng} setLng={setLng} allLngs={allLngs} />

            <div className="terms-container">
                <div className="terms-header">
                    <h1>{lng.terms}</h1>
                    <button className="close-button">{lng.btn}</button>
                </div>

                <div dangerouslySetInnerHTML={{ __html: lng.content }} className="terms-content">
                </div>
                
                <div className="terms-footer">
                    <button className="close-button">{lng.btn}</button>
                </div>
            </div>
        </div>
    )
}

export default Home