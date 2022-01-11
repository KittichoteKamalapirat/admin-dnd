import { Card, Grid, Box, Typography } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

interface RunningProcessProps {}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'application', headerName: 'APPLICATION', width: 130 },
  { field: 'process', headerName: 'PROCESS', width: 130 },
  {
    field: 'last_run',
    headerName: 'LAST RUN',
    type: 'number',
    width: 100
  },
  {
    field: 'progress',
    headerName: 'PROGRESS',
    width: 160
  }
];

const rows = [
  {
    id: 'ID-001',
    process: 'Snow',
    application: 'LOGIN',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-002',
    process: 'Lannister',
    application: 'SEARCH',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-003',
    process: 'Lannister',
    application: 'SEARCH',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-004',
    process: 'Stark',
    application: 'INVENTORY',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-005',
    process: 'Targaryen',
    application: 'LOGIN',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-006',
    process: 'Melisandre',
    application: 'CART',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-007',
    process: 'Clifford',
    application: 'CART',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-008',
    process: 'Frances',
    application: 'LOGIN',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-009',
    process: 'Roxie',
    application: 'GIFTING',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-010',
    process: 'Lannister',
    application: 'SEARCH',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-011',
    process: 'Lannister',
    application: 'SEARCH',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-012',
    process: 'Stark',
    application: 'INVENTORY',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-013',
    process: 'Targaryen',
    application: 'LOGIN',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-014',
    process: 'Melisandre',
    application: 'CART',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-014',
    process: 'Clifford',
    application: 'CART',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-015',
    process: 'Frances',
    application: 'LOGIN',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-016',
    process: 'Roxie',
    application: 'GIFTING',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-017',
    process: 'Lannister',
    application: 'SEARCH',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-018',
    process: 'Lannister',
    application: 'SEARCH',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-019',
    process: 'Stark',
    application: 'INVENTORY',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-020',
    process: 'Targaryen',
    application: 'LOGIN',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-021',
    process: 'Melisandre',
    application: 'CART',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-022',
    process: 'Clifford',
    application: 'CART',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-023',
    process: 'Frances',
    application: 'LOGIN',
    last_run: "2021-05-04'T'13:20"
  },
  {
    id: 'ID-024',
    process: 'Roxie',
    application: 'GIFTING',
    last_run: "2021-05-04'T'13:20"
  }
];

export const RunningProcess: React.FC<RunningProcessProps> = ({}) => {
  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Currently Running Processes
            </Typography>

            <div style={{ height: 930, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[20]}
                checkboxSelection
              />
            </div>

            <Box></Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default RunningProcess;
