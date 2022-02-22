import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableHeadRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ maxWidth: 600 }} aria-label="customized table">
        <TableHead>
          <StyledTableHeadRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="center">Employee</StyledTableCell>
            <StyledTableCell align="center">Desk</StyledTableCell>
            <StyledTableCell align="center">Floor</StyledTableCell>
          </StyledTableHeadRow>
        </TableHead>
        <TableBody>
          {props.reserv.filter((item, i) => i < 9).map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left">
                {row.reservations.date}
              </StyledTableCell>
              <StyledTableCell align="center">{row.reservations.user.account}</StyledTableCell>
              <StyledTableCell align="center">{row.desk_id}</StyledTableCell>
              <StyledTableCell align="center">2</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}