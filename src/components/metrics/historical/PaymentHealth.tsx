import { Card, Grid, Box, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useRef } from 'react';

interface PaymentHealthProps {}

const options: Highcharts.Options = {
  credits: {
    enabled: false
  },
  chart: {
    type: 'pie',
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  plotOptions: {
    pie: {
      innerSize: '60%'
    }
  },
  title: {
    text: 'Browser<br>shares<br>2015',
    align: 'center',
    verticalAlign: 'middle'
  },
  series: [
    {
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        ['Firefox', 10.38],
        ['IE', 56.33],
        ['Chrome', 24.03],
        ['Safari', 4.77],
        ['Opera', 0.91],
        {
          name: 'Proprietary or Undetectable',
          y: 0.2,
          dataLabels: {
            enabled: false
          }
        }
      ]
    }
  ]
};

export const PaymentHealth: React.FC<PaymentHealthProps> = (
  props: HighchartsReact.Props
) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Unique Visitors (by hour)
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

export default PaymentHealth;
