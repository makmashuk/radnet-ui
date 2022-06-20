
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function TableData({ header, data }) {

    const [expanded, setExpanded] = useState();

    const handelExpandedRow = (id) => {
        setExpanded(id);

    }
    useEffect(() => {
        console.log(expanded);
    }, [expanded])

    return (
        <>
            {data.map((item, i) => {
                return <React.Fragment key={i}>
                    <tr key={i} onClick={() => handelExpandedRow(item.id)}>
                        {
                            header.map((header, i) => {
                                return !header.customComponent ? (
                                    <td key={header.field} style={{ textAlign: header.align }} >
                                        {item[header.field]}
                                    </td>
                                ) : (
                                    <td key={header.field} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                        {item[header.field]}
                                        {item[header.customComponent]}
                                    </td>
                                )

                            })
                        }
                    </tr>
                    {item.id === expanded && (
                        <tr>
                            <td colSpan={data.length}>
                                <p>{item.id} {data.length}</p>
                            </td>
                        </tr>
                    )}

                </React.Fragment>

            })}

        </>
    )
}

