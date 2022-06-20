import React, { useEffect } from 'react'
import { useState } from 'react';

ProgressLineSingle.defaultProps = {
    label: '',
    width: '0%',
    size: 'small',
    type: 'vertical'
}


export default function ProgressLineSingle(props) {

    const [widthOfElement, setWidthOfElement] = useState('0%');
    const [heightOfElement, setHeightOfElement] = useState('10px');

    useEffect(() => {
        requestAnimationFrame(() => {
            setWidthOfElement(props.width + '%');
            if (props.size === 'medium') {
                setHeightOfElement('20px')
            }
        })
    }, [props])


    const progressTypeVertical = (
        <div style={containerStyleTypeOne}>
            <div style={labelStyleTypeOne}>
                <div> {props.label}</div>
                <div> <strong>{widthOfElement}</strong> </div>
            </div>
            <div style={{
                backgroundColor: '#EFEFEF',
                height: heightOfElement,
                margin: '10px 0',
            }}>
                <div
                    style={{
                        width: widthOfElement,
                        backgroundColor: '#3A3A3A',
                        opacity: 1,
                        height: heightOfElement,
                        borderRadius: '0 4px 4px 0 ',
                        transition: 'width 2s'
                    }}>
                </div>
            </div>
        </div>
    )
    const progressTypeHorizontal = (
        <div style={containerStyleTypeTwo}>
            <div> {props.label}</div>
               
            <div style={{
                backgroundColor: '#EFEFEF',
                height: heightOfElement,
                margin: '10px 0',
                width:'50%'
            }}>
                <div
                    style={{
                        width: widthOfElement,
                        backgroundColor: '#DF6666',
                        opacity: 1,
                        height: heightOfElement,
                        borderRadius: '0 4px 4px 0 ',
                        transition: 'width 2s'
                    }}>
                </div>
            </div>

            <div> <strong>{widthOfElement}</strong> </div>
        </div>
    )


    return (
        <>
            {props.type === 'vertical' ? progressTypeVertical : progressTypeHorizontal }
        </>
    )
}

const containerStyleTypeOne = {
    textAlign: 'left'
}
const containerStyleTypeTwo = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const labelStyleTypeOne = {
    display: 'flex',
    justifyContent: 'space-between',
}


