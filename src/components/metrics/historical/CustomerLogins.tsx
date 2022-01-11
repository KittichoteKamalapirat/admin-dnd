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
  const cryptoBalance = {
    datasets: [
      {
        data: [20, 10, 40, 30],
        backgroundColor: ['#ff9900', '#1c81c2', '#333', '#5c6ac0']
      }
    ],
    labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum']
  };

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
