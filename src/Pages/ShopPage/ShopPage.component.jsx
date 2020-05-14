import React from 'react';

import Shop_Data from "./Shop_Data"

class ShopPage extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            collection :Shop_Data
        }
    }
    render(){
        return(
            <div>
                <h1>ShopPage</h1>
            </div>
        )
    }
}


export default ShopPage;