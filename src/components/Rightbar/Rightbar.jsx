import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { memo } from 'react';

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed" width={300} mt={2}>
        <Typography variant="h6" fontWeight={100}>Rightbar</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Remy Sharp" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={200}>
          <ImageListItem>
            <img alt="aaa" />
          </ImageListItem>
          <ImageListItem>
            <img alt="aaa" />
          </ImageListItem>
          <ImageListItem>
            <img alt="aaa" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={(
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              )}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={(
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              )}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={(
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              )}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default memo(Rightbar);
