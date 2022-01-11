import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  Hidden,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { styled } from '@mui/material/styles';
import TrendingUp from '@mui/icons-material/TrendingUp';
import { useRef } from 'react';
import AppIncidentManagement from './AppIncidentManagement';

import Performance from './Performance';

export const options: Highcharts.Options = {
  chart: {
    height: '100px'
  },
  credits: {
    text: 'Mock Data'
  },
  title: {
    text: null
  },
  yAxis: {
    visible: false
  },
  xAxis: {
    visible: false
  },
  legend: {
    enabled: false
  },
  series: [
    {
      type: 'line',
      data: [100, 200, -30, 100, 30, 40, 100]
    }
  ]
};
interface InstantDataProps {
  metrix: string;
  summary: number;
  percent: number;
  options: Object;
  level: string;
}

function PerformanceSummary(props: HighchartsReact.Props | InstantDataProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const componenetsArray = [
    <Performance
      summary={555}
      percent={-71}
      options={options}
      level="Moderate"
    />,

    <Performance summary={555} percent={-71} options={options} level="High" />,
    <Performance
      summary={555}
      percent={-71}
      options={options}
      level="Critical"
    />,
    <Performance
      summary={555}
      percent={-71}
      options={options}
      level="Resolved"
    />
  ];
  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Performance Mtrics (last 24 hours)
            </Typography>
            <Grid spacing={0} container>
              {componenetsArray.map((component, index, array) => (
                <Grid
                  key={index}
                  item
                  xs={3}
                  padding={1}
                  sx={
                    index !== array.length - 1
                      ? { borderRight: 0.5, borderRightColor: 'gray' }
                      : null
                  }
                >
                  {component}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default PerformanceSummary;
