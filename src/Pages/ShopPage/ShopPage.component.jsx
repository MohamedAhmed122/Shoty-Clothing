import React from 'react';
import CollectionPreview from"../../Components/Collection-Preview/CollectionPreview.componet"
import Shop_Data from "./Shop_Data"

class ShopPage extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            collections :Shop_Data
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.collections.map(({id,...otherProps})=>(
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}


export default ShopPage;