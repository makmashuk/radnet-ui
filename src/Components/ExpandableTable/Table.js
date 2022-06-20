import React, { useState, useEffect } from 'react'
import TableHeader from './TableHeader';
import TableData from './TableData';

const tableHeader = [
    { field: "number", title: "Accession Number", sortable:true},
    { field: "date", title: "Date", sortable: true },
    { field: "quality", title: "Quality", sortable: true },
    { field: "issues", title: "Issues", sortable: true },
    { field: "flagged", title: "Flagged", sortable: true },
    { field: "checkbox", title: ""}
];
const rawTableData = [
    { id: 1, technologist: "Centro comercial Moctezuma", site: "New York", studies: 165, exposures: "4,5", perfect: 211, good: 11, bad: 111, issues: "30%" },
    { id: 2, technologist: "Ame comercial Moctezuma", site: "Boston", studies: 185, exposures: "4,5", perfect: 511, good: 11, bad: 11, issues: "40%" },
    { id: 3, technologist: "asd ercial Moctezuma", site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 4, technologist: "MM comercial Moctezuma", site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 5, technologist: "SS comercial Moctezuma", site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 6, technologist: "Lop comercial Moctezuma", site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 7, technologist: "Lop comercial Moctezuma", site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 8, technologist: "Lop comercial Moctezuma", site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
]

export default function Table() {

    const [sortableFields, setSortableFields] = useState([]);
    const [tableData, setTableData] = useState(rawTableData)

    const getSortedArray = (tableData, field) => {
        let sortedData = [];
        if (field.order === "ASC") {
            sortedData = tableData.sort(function (a, b) {
                let keyA = a[field.name];
                let keyB = b[field.name];
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });
        }
        if (field.order === "DSC") {
            sortedData = tableData.sort(function (a, b) {
                let keyA = a[field.name];
                let keyB = b[field.name];
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            });
        }

        setTableData([...sortedData]);
    }

    useEffect(() => {
        sortableFields.forEach(item => {
            getSortedArray(tableData, item);
        })
        console.log(sortableFields);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortableFields])

    const handleRowClick = (newField) => {

        // toggoling sorting order 
        const indexOfElement = sortableFields.findIndex(item => item.name === newField.name)
        if (indexOfElement > -1) {
            if (sortableFields[indexOfElement].order === "DSC") {
                newField.order = "ASC";
            }
            if (sortableFields[indexOfElement].order === "ASC") {
                newField.order = "DSC";
            }

            const updatedList = [...sortableFields];
            updatedList.splice(indexOfElement, 1);
            updatedList.push(newField);
            setSortableFields([...updatedList]);

        } else {
            newField.order = "ASC";
            setSortableFields((fields) => [...fields, newField]);
        }


    }
    return (
        <div className='card'>
            <table>
                <thead>
                    <TableHeader
                        data={tableHeader}
                        sortableFields={sortableFields}
                        onRowClick={handleRowClick}
                    />
                </thead>
                <tbody>
                    <TableData header={tableHeader} data={tableData} />
                </tbody>

            </table>
        </div>
    )
}