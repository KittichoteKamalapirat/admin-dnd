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
                pageSize={10}
                rowsPerPageOptions={[10]}
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
