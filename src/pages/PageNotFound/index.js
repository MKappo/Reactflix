import React from 'react';
import PageDefault from '../../components/PageDefault';
import '../PageNotFound/index.css';
import Error404 from '../../assets/img/PageNotFound.png';


function PageNotFound() {
    return (

        <PageDefault>


            <img className="square" src={Error404} alt="Error 404" />

            
        </PageDefault>


    )
}


export default PageNotFound;
