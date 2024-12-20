import React from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 90,
    },
  ];

  const rows = [
    { id: 1, username: 'jon snow', avatar:<img src='../../assets/pfp/3'></img>, email: "jon@gmail.com",status :"active",transaction:"120.00$",
    },
    { id: 2, username: 'jon snow', avatar:<img src='../../assets/pfp/3'></img>, email: "jon@gmail.com",status :"active",transaction:"120.00$",
    },
    { id: 3, username: 'jon snow', avatar:<img src='../../assets/pfp/3'></img>, email: "jon@gmail.com",status :"active",transaction:"120.00$",
    },
    { id: 4, username: 'jon snow', avatar:<img src='../../assets/pfp/3'></img>, email: "jon@gmail.com",status :"active",transaction:"120.00$",
    },
    { id: 5, username: 'jon snow', avatar:<img src='../../assets/pfp/3'></img>, email: "jon@gmail.com",status :"active",transaction:"120.00$",
    },
    { id: 6, username: 'jon snow', avatar:<img src='../../assets/pfp/3'></img>, email: "jon@gmail.com",status :"active",transaction:"120.00$",
    },
    { id: 7, username: 'jon snow', avatar:<img src='../../assets/pfp/3'></img>, email: "jon@gmail.com",status :"active",transaction:"120.00$",
    },
    
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  );
}
