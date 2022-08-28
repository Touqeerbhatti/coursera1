import React from "react";
import { Media } from "reactstrap";



const Menu = () =>
{
    const menu='';
    return(
        
        <>
        <div className="container">
        <div className="row">
            <Media list>
                    {menu}
            </Media>
        </div>

        </div>
        </>
    )
}

export default Menu();