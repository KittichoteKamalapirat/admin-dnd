import { Card, Box, Grid, Typography } from '@mui/material';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useRef } from 'react';

interface InstantDataProps {
  metrix: string;
  summary: number;
  percent: number;
  options: Object;
  level: string;
}

export const uniqueVisitors: Highcharts.Options = {
  title: {
    text: null
  },
  xAxis: {
    visible: false
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption'
    }
  },

  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [
    {
      type: 'bar',
      name: 'Password Reset',
      data: [1]
    },

    {
      type: 'bar',
      name: 'Invalid Password',
      data: [10]
    },
    {
      type: 'bar',
      name: 'Successful',
      data: [89]
    }
  ]
};

function CustomerLogins(props: HighchartsReact.Props | InstantDataProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Account Management &#38; Customer Logins (Last Hour)
            </Typography>

            <Box>
              {/* adding the thing! */}
              <HighchartsReact
                highcharts={Highcharts}
                options={uniqueVisitors}
                ref={chartComponentRef}
                {...props}
              ></HighchartsReact>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CustomerLogins;
