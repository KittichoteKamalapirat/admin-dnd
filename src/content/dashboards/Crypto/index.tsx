import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import { useState } from 'react';
import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AddNewComponent } from './AddNewComponent';

interface DragableComponenet {
  component: any;
  id: string;
  width: number;
}

const initialState: DragableComponenet[] = [
  { component: <AccountBalance />, id: 'account_balance', width: 12 },
  { component: <Wallets />, id: 'wallets', width: 8 },
  { component: <AccountSecurity />, id: 'account_security', width: 4 },
  { component: <WatchList />, id: 'watchlist', width: 12 },
  { component: <AddNewComponent />, id: 'add_new-componenet', width: 12 }
];

function DashboardCrypto() {
  const [componentsArray, setComponentsArray] =
    useState<DragableComponenet[]>(initialState);

  const handleOnDragEnd = (result) => {
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
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
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
                {/* account balance */}

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

                {/* repetition start */}

                {/* 

                <Grid
                  item
                  xs={12}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <AccountBalance />
                </Grid>


                <Grid item lg={8} xs={12}>
                  <Wallets />
                </Grid>


                <Grid item lg={4} xs={12}>
                  <AccountSecurity />
                </Grid>


                <Grid item xs={12}>
                  <WatchList />
                </Grid>
                */}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
