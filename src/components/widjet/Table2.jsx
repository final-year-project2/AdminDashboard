import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

function Table2({Data,columns,pageSize}) {

return (
    <div className=''>
      <DataGrid
          rows={Data.results}
          columns={columns}
          pageSizeOptions={[1,2,3,4,5,6,7,8,9, 10]} 
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: pageSize },
            },
          }}
      />    
    </div>
)
}

export default Table2
