import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/storeTypes';

const columns = [
  { id: 'number' as 'number', label: 'Number', minWidth: 50 },
  { id: 'frequency' as 'frequency', label: 'Count', minWidth: 50 },
];

const NO_DATA = [
  {
    frequency: '-',
    number: '-',
  },
];

const FrequencyDisplay: FunctionComponent = () => {
  const numberFrequency = useSelector(
    (state: State) => state.numberDisplay.numberFrequency
  );
  const rows = numberFrequency.length > 0 ? numberFrequency : NO_DATA;

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow hover tabIndex={-1} key={row.number}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      data-testid={`${rowIndex + 1}-${column.id}`}
                      key={column.id}
                    >
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FrequencyDisplay;
