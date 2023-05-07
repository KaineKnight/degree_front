import React, { memo, useState } from 'react';

import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

function AddButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="background.default" color="text.primary" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar src="" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">John Doe</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            placeholder="Default Value"
            variant="standard"
            sx={{ width: '100%' }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullwidth>
            <Button>One</Button>
            <Button sx={{ width: '100px' }}><DateRange /></Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default memo(AddButton);
