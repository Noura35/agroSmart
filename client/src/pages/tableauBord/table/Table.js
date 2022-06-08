import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Table.css'

function createData( name:String, valeur1: number, valeur2: number,valeur3: number) {
  return { name, valeur1, valeur2, valeur3 };
}

const rows = [
  createData('Humidite de sol % ', 262, 16.0, 24),
  createData("Température de l'air en C %", 159, 6.0, 24),
  createData("Humidité de l'air %", 237, 9.0, 37),
  

];

export default function BasicTable() {
    return (
      <div className='Table'>
            
            <h3>Aujourd'hui</h3>



    <TableContainer style={{boxShadow:"0px 13px 20px 0px #80808029",background:"white"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="left"></TableCell>
            <TableCell align="left">8H00</TableCell>
            <TableCell align="left">12H00</TableCell>
            <TableCell align="left">19H00</TableCell>
            <TableCell align="left">Moyenne</TableCell>


            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.valeur1}</TableCell>
              <TableCell align="left">{row.valeur2}</TableCell>
               <TableCell align="left">{row.valeur3}</TableCell>
               <TableCell align="left">{row.valeur3}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
            

   </div>

  );
}
