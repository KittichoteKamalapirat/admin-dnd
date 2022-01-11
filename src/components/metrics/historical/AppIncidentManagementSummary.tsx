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

const options: Highcharts.Options = {
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

export const uniqueVisitors: Highcharts.Options = {
  credits: {
    text: 'Mock Data'
  },
  title: {
    text: null

    // style: { fontWeight: 'bold', fontSize: '30px' }
  },
  yAxis: {
    title: {
      text: 'Visitors'
    }
  },
  xAxis: {
    categories: [
      '2AM',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      '10AM',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      '6PM'
    ]
  },
  series: [
    {
      type: 'line',
      name: 'Mobile',
      data: [
        1000, 2000, -300, 1000, 300, 400, 1000, 1000, 1000, 1000, 1000, 1000,
        1000, 1000, 1000, 1000
      ]
    },
    {
      type: 'line',
      name: 'Web',
      data: [
        20000, 20000, 21000, 20000, 21000, 20030, 20000, 20030, 20030, 20030,
        20030, 20030, 20030, 20030, 20030
      ]
    }
  ]
};

function AppIncidentManagementSummary(
  props: HighchartsReact.Props | InstantDataProps
) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const componenetsArray = [
    <AppIncidentManagement
      metrix="Application Incident Management (last 24 hours)"
      summary={555}
      percent={-71}
      options={options}
      level="Moderate"
    />,

    <AppIncidentManagement
      metrix="Application Incident Management (last 24 hours)"
      summary={555}
      percent={-71}
      options={options}
      level="High"
    />,
    <AppIncidentManagement
      metrix="Application Incident Management (last 24 hours)"
      summary={555}
      percent={-71}
      options={options}
      level="Critical"
    />,
    <AppIncidentManagement
      metrix="Application Incident Management (last 24 hours)"
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
              Application Incident Management (last 24 hours)
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

export default AppIncidentManagementSummary;
