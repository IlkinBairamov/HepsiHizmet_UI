import { CommonPageContainer } from "../../components/CommonPageContainer"
import React from "react"
import './HomePage.scss';

export const HomePage : React.FC= ()=>{
    return (
      <>
      <CommonPageContainer/>
        <div className="hero hero-homepage">
            <div className="body-container">
               <div className="hero-overlay"></div>
            </div>
            <div className="wrapper">
                <h1 className="widow-fix">Hizmet Piş, Ağzıma Düş</h1>
                <h2 className="widow-fix">İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini&nbsp;hallet</h2>
            </div>
        </div>
   
      </>
    )
}