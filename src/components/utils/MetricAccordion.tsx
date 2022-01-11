import {
  Box,
  Typography,
  Modal,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Button,
  Grid
} from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import InstantExample1 from '../metrics/instant/InstantExample1';
import InstantExample2 from '../metrics/instant/InstantExample2';
import HistoricalExample1 from '../metrics/historical/HistoricalExample1';
import HistoricalExample2 from '../metrics/historical/HistoricalExample2';
import OtherExample1 from '../metrics/others/OtherExample1';
import OtherExample2 from '../metrics/others/OtherExample2';
import HighchartsReact from 'highcharts-react-official';

import { DragableComponenet } from '../Dashboard';

interface MetricAccordionProps {
  setOpen: Function;
  componentsArray: DragableComponenet[];
  setComponentsArray: Function;
}

interface MetricsToDisplay {
  metric: string;
  component: React.FC<HighchartsReact.Props>;
  type: string;
  width: number;
}

export const MetricAccordion: React.FC<MetricAccordionProps> = ({
  setOpen,
  componentsArray,
  setComponentsArray
}) => {
  const [instantMetricsArray, setInstantMetricsArray] = useState<
    MetricsToDisplay[]
  >([
    {
      metric: 'instantExample1',
      type: 'instant',
      component: (<InstantExample1 />) as any,
      width: 6
    },
    {
      metric: 'instantExample2',
      type: 'instant',
      component: (<InstantExample2 />) as any,
      width: 6
    }
  ]);

  console.log({ instantMetricsArray });
  const [historicalMetricsArray, setHistoricalMetricsArray] = useState<
    MetricsToDisplay[]
  >([
    {
      metric: 'historicalExample1',
      type: 'historical',
      component: (<HistoricalExample1 />) as any,
      width: 6
    },
    {
      metric: 'historicalExample2',
      type: 'historical',
      component: (<HistoricalExample2 />) as any,
      width: 6
    }
  ]);
  const [otherMetricsArray, setOtherMetricsArray] = useState<
    MetricsToDisplay[]
  >([
    {
      metric: 'otherExample1',
      type: 'other',
      component: (<OtherExample1 />) as any,
      width: 6
    },
    {
      metric: 'otherExample2',
      type: 'other',
      component: (<OtherExample2 />) as any,
      width: 6
    }
  ]);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // find which metric is clicked
    const allMetrics = [
      ...instantMetricsArray,
      ...historicalMetricsArray,
      ...otherMetricsArray
    ];

    let newComponent: DragableComponenet | null = null;

    allMetrics.forEach((item: MetricsToDisplay) => {
      if (item.metric === e.currentTarget.value) {
        switch (item.type) {
          case 'instant':
            const newInstantArray = instantMetricsArray.filter((item) => {
              return item.metric !== e.currentTarget.value;
            });
            setInstantMetricsArray(newInstantArray);
            break;
          case 'historical':
            const newHistoricalArray = historicalMetricsArray.filter((item) => {
              return item.metric !== e.currentTarget.value;
            });
            setHistoricalMetricsArray(newHistoricalArray);
            break;
          case 'other':
            const newOtherArray = otherMetricsArray.filter((item) => {
              return item.metric !== e.currentTarget.value;
            });
            setOtherMetricsArray(newOtherArray);
            break;
          default:
            return;
        }

        newComponent = {
          component: item.component,
          id: item.metric,
          width: item.width
        };
      } else {
        return;
      }
      // setOpen(false);
    });
    //add the component of that metric to

    setComponentsArray([...componentsArray, newComponent]);
  };

  return (
    <Grid item marginY={10}>
      <Paper elevation={1}>
        <Box
          width={'100%'}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingX: 2,
            paddingY: 4
          }}
        >
          <Typography variant="h2" component="h3">
            Add a new metric
          </Typography>
          <CloseIcon fontSize="large" onClick={() => setOpen(false)} />
        </Box>
        <Accordion sx={{ borderBottom: 1, borderColor: 'grey.300' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h3" component="h4">
              Instant Metrics
            </Typography>
          </AccordionSummary>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            {instantMetricsArray.map((item, index) => (
              <AccordionDetails key={index}>
                <Button
                  variant="outlined"
                  value={item.metric}
                  style={{ fontSize: '24px' }}
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  {item.metric}
                </Button>
              </AccordionDetails>
            ))}
          </Box>
        </Accordion>

        {/* historical metrics */}

        <Accordion sx={{ borderBottom: 1, borderColor: 'grey.300' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h3" component="h4">
              Historical Metrics
            </Typography>
          </AccordionSummary>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            {historicalMetricsArray.map((item, index) => (
              <AccordionDetails key={index}>
                <Button
                  style={{ fontSize: '24px' }}
                  variant="outlined"
                  value={item.metric}
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  {item.metric}
                </Button>
              </AccordionDetails>
            ))}
          </Box>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h3" component="h4">
              Others
            </Typography>
          </AccordionSummary>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            {otherMetricsArray.map((item, index) => (
              <AccordionDetails key={index}>
                <Button
                  style={{ fontSize: '24px' }}
                  variant="outlined"
                  value={item.metric}
                  onClick={(e) => {
                    clickHandler(e);
                  }}
                >
                  {item.metric}
                </Button>
              </AccordionDetails>
            ))}
          </Box>
        </Accordion>
      </Paper>
    </Grid>
  );
};

export default MetricAccordion;
