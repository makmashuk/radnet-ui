import React, { useState, useEffect } from 'react'
import '../Css/Table.css'
import TableDataRow from './TableDataRow'
import TableHeaderRow from './TableHeaderRow';
import TableHeaderBox from './TableHeaderBox';
import ProgressLineMultiple from './ProgressLineMuliple';


const progressData = [
    {
        percentage: "50",
        color: "#27C052"
    },
    {
        percentage: "30",
        color: "#ABD84B"
    },
    {
        percentage: "20",
        color: "#DF6666"
    },
];
const tableHeader = [
    { field: "technologist", title: "Technologist", customComponent: "progress", width:"50%" },
    { field: "site", title: "Site", sortable: true },
    { field: "studies", title: "Studies", align: "end", sortable: true },
    { field: "exposures", title: "Exposures", align: "end", sortable: true },
    { field: "perfect", title: "Perfect", align: "end", box: <TableHeaderBox color='#ABD84B' />, sortable: true },
    { field: "good", title: "Good", align: "end", box: <TableHeaderBox color='#27C052' />, sortable: true },
    { field: "bad", title: "Bad", align: "end", box: <TableHeaderBox color='#DF6666' />, sortable: true },
    { field: "issues", title: "Issues %", align: "end", sortable: true }
];
const rawTableData = [
    { id: 1, technologist: "Centro comercial Moctezuma", progress: <ProgressLineMultiple progressParts={progressData} />, site: "New York", studies: 165, exposures: "4,5", perfect: 211, good: 11, bad: 111, issues: "30%" },
    { id: 2, technologist: "Ame comercial Moctezuma", progress: <ProgressLineMultiple progressParts={progressData} />, site: "Boston", studies: 185, exposures: "4,5", perfect: 511, good: 11, bad: 11, issues: "40%" },
    { id: 3, technologist: "asd ercial Moctezuma", progress: <ProgressLineMultiple progressParts={progressData} />, site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 4, technologist: "MM comercial Moctezuma", progress: <ProgressLineMultiple progressParts={progressData} />, site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 5, technologist: "SS comercial Moctezuma", progress: <ProgressLineMultiple progressParts={progressData} />, site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 6, technologist: "Lop comercial Moctezuma", progress: <ProgressLineMultiple progressParts={progressData} />, site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 7, technologist: "Lop comercial Moctezuma", progress: <ProgressLineMultiple progressParts={progressData} />, site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
    { id: 8, technologist: "Lop comercial Moctezuma", progress: <ProgressLineMultiple progressParts={progressData} />, site: "California", studies: 123, exposures: "4,5", perfect: 311, good: 13, bad: 511, issues: "70%" },
]

export default function RadTable() {

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
                    <TableHeaderRow
                        data={tableHeader}
                        sortableFields={sortableFields}
                        onRowClick={handleRowClick}
                    />
                </thead>
                <tbody>
                    <TableDataRow header={tableHeader} data={tableData} />
                </tbody>

            </table>
        </div>
    )
}