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
  ListItemAvatar,
  Paper
} from '@mui/material';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { styled } from '@mui/material/styles';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import { useRef } from 'react';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

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

function AppIncidentManagement(
  props: HighchartsReact.Props | InstantDataProps
) {
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
                <Text color={props.percent >= 0 ? 'success' : 'error'}>
                  {' '}
                  {props.percent >= 0 ? (
                    <b> ↑ {props.percent}%</b>
                  ) : (
                    <b> ↓ {props.percent}%</b>
                  )}
                </Text>
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

export default AppIncidentManagement;
