import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, Typography, Box } from '@mui/material';
import Footer from 'src/components/Footer';
import { useState } from 'react';
import AppIncidentManagement from '../../../components/metrices/historical/AppIncidentManagement';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AddNewComponent } from './AddNewComponent';
import { InstantData } from '../../../components/forms/InstantData';
import { MetricAccordion } from '../../MetricAccordion';
import { performanceLatency } from '../../../mockData/instantData';
import UniqueVisitor from '../../../components/metrices/historical/UniqueVisitor';
import Performance from '../../../components/metrices/historical/Performance';
import CustomerLogins from '../../../components/metrices/historical/CustomerLogins';
import RunningProcess from '../../../components/metrices/instant/RunningProcess';
import { NetworkHealth } from '../../../components/metrices/instant/NetworkHealth';
import CpuUsage from '../../../components/metrices/instant/CpuUsage';
import PaymentHealth from '../../../components/metrices/historical/PaymentHealth';
import AppIncidentManagementSummary from '../../../components/metrices/historical/AppIncidentManagementSummary';
import PerformanceSummary from '../../../components/metrices/historical/PerformanceSummary';

export interface DragableComponenet {
  component: any;
  id: string;
  width: number;
}

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
        options={performanceLatency}
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
  },

  { component: <Wallets />, id: 'wallets', width: 8 },
  { component: <AccountSecurity />, id: 'account_security', width: 4 },
  { component: <WatchList />, id: 'watchlist', width: 12 }
];

const DashboardCrypto: React.FC = () => {
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
    <>
      <Helmet>
        <title>Admin Home</title>
      </Helmet>
      {/* <PageTitleWrapper>Admin Home</PageTitleWrapper> */}

      <Container maxWidth={false}>
        <Typography id="modal-modal-title" variant="h1" component="h1">
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

      <Footer />
    </>
  );
};

export default DashboardCrypto;
