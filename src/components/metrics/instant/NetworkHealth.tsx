import { Card, Grid, Box, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useRef } from 'react';

interface NetworkHealthProps {}

const options: Highcharts.Options = {
  title: {
    text: null
  },
  xAxis: {
    title: {
      text: 'location'
    },
    categories: [
      'N California',
      'London',
      'Paris',
      'Amsterdam',
      'Frankfurt',
      'N Virginia'
    ]
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Sourcetype'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [
    {
      name: 'DNS',
      type: 'bar',
      data: [5, 3, 4, 7, 2]
    },
    {
      name: 'TCP',
      type: 'bar',
      data: [5, 3, 4, 7, 2]
    },
    {
      name: 'TLS',
      type: 'bar',
      data: [5, 3, 4, 7, 2]
    },
    {
      name: 'First Bye',
      type: 'bar',
      data: [2, 2, 3, 2, 1]
    },
    {
      name: 'Wait',
      type: 'bar',
      data: [3, 4, 4, 2, 5]
    }
  ]
};

export const NetworkHealth: React.FC<NetworkHealthProps> = (
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
