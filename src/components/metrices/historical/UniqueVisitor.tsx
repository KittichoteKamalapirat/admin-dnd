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

function UniqueVisitor(props: HighchartsReact.Props | InstantDataProps) {
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

export default UniqueVisitor;
