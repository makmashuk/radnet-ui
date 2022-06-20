
import React from 'react'

export default function TableDataRow({ header, data }) {

    return (
        <>
            {data.map((item, i) => {
                return <React.Fragment key={i}>
                    <tr key={i}>
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
                </React.Fragment>

            })}

        </>
    )
}

