import {
  Box,
  Typography,
  Modal,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Button
} from '@mui/material';
import { breakpoints, style } from '@mui/system';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import InstantExample1 from '../components/metrices/instant/InstantExample1';
import InstantExample2 from '../components/metrices/instant/InstantExample2';
import HighchartsReact from 'highcharts-react-official';
import HistoricalExample1 from '../components/metrices/historical/HistoricalExample1';
import HistoricalExample2 from '../components/metrices/historical/HistoricalExample2';
import OtherExample1 from '../components/metrices/others/OtherExample1';
import OtherExample2 from '../components/metrices/others/InstantExample2';
import { DragableComponenet } from './dashboards/Crypto';
import { AnyMessageParams } from 'yup/lib/types';

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
            const newArray = instantMetricsArray.filter((item) => {
              console.log(item.metric);
              console.log(e.currentTarget.value);
              return item.metric !== e.currentTarget.value;
            });
            console.log({ newArray });
            setInstantMetricsArray(newArray);
            break;
          case 'historical':
            break;
          case 'other':
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
      setOpen(false);
    });
    //add the component of that metric to

    setComponentsArray([...componentsArray, newComponent]);
  };

  return (
    <Paper elevation={1}>
      <Box
        width={'100%'}
        sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}
      >
        <CloseIcon onClick={() => setOpen(false)} />
      </Box>
      <Accordion
        sx={{ borderBottom: 1, borderTop: 1, borderColor: 'grey.300' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Instant Metrics</Typography>
        </AccordionSummary>

        {instantMetricsArray.map((item, index) => (
          <AccordionDetails key={index}>
            <Button
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
      </Accordion>

      <Accordion sx={{ borderBottom: 1, borderColor: 'grey.300' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Historical Metrics</Typography>
        </AccordionSummary>

        {historicalMetricsArray.map((item, index) => (
          <AccordionDetails key={index}>
            <Button variant="outlined">{item.metric}</Button>
          </AccordionDetails>
        ))}
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Others</Typography>
        </AccordionSummary>

        {otherMetricsArray.map((item, index) => (
          <AccordionDetails key={index}>
            <Button variant="outlined">{item.metric}</Button>
          </AccordionDetails>
        ))}
      </Accordion>
    </Paper>
  );
};

export default MetricAccordion;
