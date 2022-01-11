import {
  Grid,
  Tooltip,
  CardActionArea,
  CardContent,
  Card,
  Avatar
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
interface AddNewComponentProps {
  setOpen: Function;
}

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
          background: transparent;
          margin-left: -${theme.spacing(0.5)};
          margin-bottom: ${theme.spacing(1)};
          margin-top: ${theme.spacing(2)};
  `
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
          background: ${theme.colors.alpha.black[5]};
          color: ${theme.colors.primary.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
  `
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
          border: ${theme.colors.primary.main} dashed 1px;
          height: 100%;
          color: ${theme.colors.primary.main};
          
          .MuiCardActionArea-root {
            height: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .MuiTouchRipple-root {
            opacity: .2;
          }
          
          &:hover {
            border-color: ${theme.colors.alpha.black[100]};
          }
  `
);

export const AddNewComponent: React.FC<AddNewComponentProps> = ({
  setOpen
}) => {
  return (
    <Grid item>
      <Tooltip arrow title="Click to add a new wallet">
        <CardAddAction>
          <CardActionArea sx={{ px: 1 }}>
            <CardContent>
              <AvatarAddWrapper
                onClick={() => {
                  console.log('hi');
                  setOpen(true);
                }}
              >
                <AddTwoToneIcon fontSize="large" />
              </AvatarAddWrapper>
            </CardContent>
          </CardActionArea>
        </CardAddAction>
      </Tooltip>
    </Grid>
  );
};
