import { Box, Grid, Typography } from '@mui/material';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useRef } from 'react';

interface InstantDataProps {
  summary: number;
  percent: number;
  options: Object;
  level: string;
}

function Performance(props: HighchartsReact.Props | InstantDataProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <Box>
      <Grid spacing={0} container>
        <Grid item xs={12}>
          <Box p={0}>
            <Typography sx={{ pb: 3 }} variant="h4">
              {props.level}
            </Typography>

            <Box>
              <Typography component="span" variant="h1" gutterBottom>
                {props.summary}
              </Typography>

              <Box component="span">
                <Typography color={props.percent >= 0 ? 'success' : 'error'}>
                  {' '}
                  {props.percent >= 0 ? (
                    <b> ↑ {props.percent}%</b>
                  ) : (
                    <b> ↓ {props.percent}%</b>
                  )}
                </Typography>
              </Box>

              {/* adding the thing! */}
              <HighchartsReact
                highcharts={Highcharts}
                options={props.options}
                ref={chartComponentRef}
                {...props}
              ></HighchartsReact>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Performance;
