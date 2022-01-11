import { Card, Grid, Box, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useRef } from 'react';

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
  },
  title: {
    text: 'No data in pie chart'
  },
  series: [
    {
      type: 'pie',
      name: 'Random data',
      data: []
    }
  ]
};

export const OtherExample2: React.FC<HighchartsReact.Props> = (props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Other Example 2
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

export default OtherExample2;
