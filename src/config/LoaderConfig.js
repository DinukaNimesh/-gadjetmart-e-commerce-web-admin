import React from "react";
import {Spinner} from "reactstrap";

const Loader = ({isLoading}) => {
    return (
        isLoading &&
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 100,
                top: 0,
                left: 0,
                backgroundColor: 'rgba(255,255,255,0.8)',
            }} className="">
                <Spinner
                    style={{
                        width: '3rem',
                        height: '3rem',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        margin:' -25px 0 0 -25px' /* apply negative top and left margins to truly center the element */
                    }}
                    color="info"
                    // type="grow"
                />

            </div>
    )
}

export default Loader;
