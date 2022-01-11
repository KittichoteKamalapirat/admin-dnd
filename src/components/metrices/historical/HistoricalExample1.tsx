import { Card, Grid, Box, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useRef } from 'react';

const options = {
  title: {
    text: 'No data in line chart - with custom options'
  },
  series: [
    {
      type: 'line',
      name: 'Random data',
      data: []
    }
  ],
  lang: {
    noData: 'Nichts zu anzeigen'
  },
  noData: {
    style: {
      fontWeight: 'bold',
      fontSize: '15px',
      color: '#303030'
    }
  }
};

export const HistoricalExample1: React.FC<HighchartsReact.Props> = (props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Historical Example 1
            </Typography>

            <Box>
              {/* adding the thing! */}
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
                {...props}
              ></HighchartsReact>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HistoricalExample1;
