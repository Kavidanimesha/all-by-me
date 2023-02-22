import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';



// const rows = [
//     { id: {id}, headline: {headline}, description: {description}, image: {image} },
//   ];


function TableComponent({columns , rows ,rowsPerPageOptions, checkboxSelection, disableSelectionOnClick , sx }) {
  return (
    <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={rowsPerPageOptions}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick={disableSelectionOnClick}
        sx={{...sx}}
      />
  )
}

export default TableComponent
