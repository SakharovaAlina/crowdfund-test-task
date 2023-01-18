import * as React from 'react';
import {ITableField} from 'src/constants';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import {styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//import { Fade } from '@mui/material';
import Fade from 'react-reveal/Fade';

import Reveal from 'react-reveal/Reveal';

export interface ICustomTableProps {
  data: any;
  fields: ITableField[];
}

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd), react-reveal:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function CustomTable(props: ICustomTableProps) {
  const {data, fields} = props;
  let [active, setActive] = React.useState(false);

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          {' '}
          <TableRow>
            {fields.map((o, i) => (
              <StyledTableCell key={'custom_table_h_' + i} align={o.align}>
                {o.title}
              </StyledTableCell>
            ))}{' '}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any) => (
            <StyledTableRow
              key={'row_' + row.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              {fields.map((o, i) => (
                <StyledTableCell key={'custom_table_r_' + i} align={o.align}>
                  {o.field instanceof Function ? o.field(row) : row[o.field]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
