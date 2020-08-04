import React from 'react';
import PageDefault from '../../components/PageDefault';
import '../PageNotFound/index.css';
import Error404 from '../../assets/img/PageNotFound.png';


function PageNotFound() {
    return (

        <PageDefault>

            <div className="pageWrapper">
                
                <img src={Error404} alt="Error 404" />

            </div>



            
        </PageDefault>


    )
}


export default PageNotFound;
