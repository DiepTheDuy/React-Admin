// Data table
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userColumns, userRows } from "../../datatable";
import "./datatable.scss"



const Datatable = () => {

  const[data,setData] = useState(userRows)

  const handleDelete = (id) =>{
    setData(data.filter((item)=>item.id !== id))
  }

  const actionColumn = [
      {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className="cellAction">
                      <Link to="/users/test" style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>                      
                      </Link>
                      <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                  </div>
              )
          }
      }
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        add new user
        <Link to="/users/new" style={{textDecoration: "none"}} className="link">
          add new
        </Link>
      </div>

      <DataGrid
        className="datagrid"      
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable