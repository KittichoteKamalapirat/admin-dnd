import { Card, Grid, Box, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useRef } from 'react';

interface NetworkHealthProps {}

const options: Highcharts.Options = {
  title: {
    text: null
  },
  credits: {
    text: 'Mock Data'
  },
  xAxis: {
    categories: [
      'Auth Server',
      'CDN',
      'Database',
      'Load Balancer',
      'Network',
      'Security',
      'Storage',
      'Web Server'
    ]
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percentage(%)'
    }
  },

  plotOptions: {
    column: {
      stacking: 'percent'
    }
  },
  series: [
    {
      name: 'User',
      type: 'column',
      data: [5, 3, 4, 7, 2, 4, 4, 4]
    },
    {
      name: 'System',
      type: 'column',
      data: [2, 2, 3, 2, 1, 4, 4, 4]
    },
    {
      name: 'Idle',
      type: 'column',
      data: [3, 4, 4, 2, 5, 4, 4, 4]
    }
  ]
};

export const CpuUsage: React.FC<NetworkHealthProps> = (
  props: HighchartsReact.Props
) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Content Distribution Network Health
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

export default CpuUsage;
