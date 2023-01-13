import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';

export const BasicTable = () => {

	// Using hooks you ensure that data isnt recreated in every render.
	const columns = useMemo(() => COLUMNS, []); // Use MEMO hoooks
	const data = useMemo(() => MOCK_DATA, []);

	const tableInstance = useTable({
		columns: COLUMNS,
		data: MOCK_DATA
	});

	const { 
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		} = tableInstance;

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{
					rows.map(row => {
						prepareRow(row)
						return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return <td {...cell.getCellProps()}>{cell.render('cell')}</td> 
									})}	
								</tr>
							) 
					})
				}
			</tbody>
		</table>
	);


}