import { Helmet } from 'react-helmet-async';
import { Grid, Container, Typography, Box } from '@mui/material';
import { useState } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import AppIncidentManagementSummary from './metrics/historical/AppIncidentManagementSummary';
import CustomerLogins from './metrics/historical/CustomerLogins';
import PaymentHealth from './metrics/historical/PaymentHealth';
import PerformanceSummary from './metrics/historical/PerformanceSummary';
import UniqueVisitor from './metrics/historical/UniqueVisitor';
import CpuUsage from './metrics/instant/CpuUsage';
import { NetworkHealth } from './metrics/instant/NetworkHealth';
import RunningProcess from './metrics/instant/RunningProcess';
import { AddNewComponent } from './utils/AddNewComponent';
import MetricAccordion from './utils/MetricAccordion';

//metrics

export interface DragableComponenet {
  component: any;
  id: string;
  width: number;
}

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

const initialState: DragableComponenet[] = [
  {
    component: <AppIncidentManagementSummary />,
    id: 'incidentModerate',
    width: 6
  },

  {
    component: (
      <PerformanceSummary
        metrix="Performance Metrics (last 24 hours)"
        summary={555}
        percent={-71}
        options={options}
        level="Latency"
      />
    ),
    id: 'performanceMetrics',
    width: 6
  },
  {
    component: (
      <Grid container direction="column">
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6} padding={1}>
              <UniqueVisitor summary={555} percent={-71} level="5xx Errors" />
            </Grid>
            <Grid item xs={6} padding={1}>
              <CustomerLogins
                metrix="Performance Metrixs (last 24 hours)"
                summary={555}
                percent={-71}
                level="5xx Errors"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} padding={1}>
          <NetworkHealth />
        </Grid>
      </Grid>
    ),
    id: 'uniqueVisitors',
    width: 6
  },

  {
    component: <RunningProcess />,
    id: 'runningProcess',
    width: 6
  },
  {
    component: <CpuUsage />,
    id: 'cpuUsage',
    width: 8
  },
  {
    component: <PaymentHealth />,
    id: 'paymentHealth',
    width: 4
  }
];

const Dashboard: React.FC = () => {
  const [componentsArray, setComponentsArray] =
    useState<DragableComponenet[]>(initialState);

  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);

  const handleOnDragEnd = (result) => {
    //Add backend code to save the position
    if (!result.destination) return;
    console.log(result);
    const items = Array.from(componentsArray);
    //remove one item
    const [reorederedItem] = items.splice(result.source.index, 1);
    //add thsi item to the new position
    items.splice(result.destination.index, 0, reorederedItem);
    setComponentsArray(items);
  };
  return (
    <Box padding={5}>
      <Helmet>
        <title>Admin Home</title>
      </Helmet>
      <Container maxWidth={false}>
        <Typography
          id="modal-modal-title"
          variant="h1"
          component="h1"
          marginY={5}
        >
          {' '}
          Monitoring &#38; Performance
        </Typography>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="dashboard">
            {(provided) => (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={3}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {componentsArray.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Grid
                        item
                        xs={item.width}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {item.component}
                      </Grid>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>

        {!accordionIsOpen && <AddNewComponent setOpen={setAccordionIsOpen} />}

        <Box sx={{ display: accordionIsOpen ? 'block' : 'none' }}>
          <MetricAccordion
            setOpen={setAccordionIsOpen}
            componentsArray={componentsArray}
            setComponentsArray={setComponentsArray}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
