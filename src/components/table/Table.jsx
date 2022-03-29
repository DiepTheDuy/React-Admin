// Metarial Ui table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.scss'



const List = ({datas}) => {

    return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow key={data.id}>
                <TableCell className="tableCell">{data.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={data.img} alt="" className="image" />
                    {data.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{data.customer}</TableCell>
                <TableCell className="tableCell">{data.date}</TableCell>
                <TableCell className="tableCell">{data.amount}</TableCell>
                <TableCell className="tableCell">{data.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${data.status}`}>{data.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

export default List