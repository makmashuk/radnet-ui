import React, { useEffect } from 'react'
import { useState } from 'react';

ProgressLineMultiple.defaultProps = {
    height: "5px",
    progressParts: [
        {
            percentage: "0%",
            color: "white"
        }
    ]
}


export default function ProgressLineMultiple(props) {


    const [widthOfElement, setWidthOfElement] = useState(
        props.progressParts.map(() => 0)
    );


    const [heightOfElement, setHeightOfElement] = useState();



    useEffect(() => {
        requestAnimationFrame(() => {
            setWidthOfElement(props.progressParts.map(item => item.percentage + '%'));
            setHeightOfElement(props.height);

        })
    }, [props])

    return (
        <>
            <div style={{
                backgroundColor: '#EFEFEF',
                height: heightOfElement,
                minWidth: '10em',
                margin: '10px 0',
                display: 'flex'
            }}>
                {props.progressParts.map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: widthOfElement[index],
                                backgroundColor: item.color,
                                opacity: 1,
                                height: heightOfElement,
                                borderRadius: `0 4px 4px 0`,
                                outline: `1px solid ${item.color}`,
                                transition: 'width 2s'
                            }}>
                        </div>
                    )
                })}

            </div>
        </>
    )
}




