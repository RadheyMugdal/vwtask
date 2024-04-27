import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const rows = [
  { objective: 'Leads', spend: '₹17', reach: 89, impressions: 71, ctr: '53%', frequency: 69, leads: 53, costPerLead: '₹66', schedule: 73, costPerSchedule: '₹52' },
  { objective: 'Dolore sit do dolo', spend: '₹49', reach: 90, impressions: 27, ctr: '36%', frequency: 75, leads: 83, costPerLead: '₹71', schedule: 18, costPerSchedule: '₹7' },
  { objective: 'Ut non duis occa', spend: '₹18', reach: 79, impressions: 18, ctr: '20%', frequency: 57, leads: 63, costPerLead: '₹2', schedule: 75, costPerSchedule: '₹34' },
];

const columns = [
  'Objective', 'Spend', 'Reach', 'Impressions', 'CTR', 'Frequency', 'Leads', 'Cost Per Lead', 'Schedule', 'Cost per Schedule',
];

const MyTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.objective}>
              {columns.map((column) => (
                <TableCell key={column}>{row[column.toLowerCase()] || '-'}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
