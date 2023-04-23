import React, { memo } from 'react';

import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Checkbox,
} from '@mui/material';
import {
  ExpandMore,
  ExpandMoreOutlined,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from '@mui/icons-material';

function Task() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">R</Avatar>
        }
        action={(
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        )}
        title="Shrimp"
        subheader="September 14"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i.ytimg.com/vi/KUXYjaPnr6g/maxresdefault.jpg"
        alt="PaellaDish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">This is</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to fav">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMore
          // expand={expanded}
          // onClick={handleExpandClick}
          // aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreOutlined />
        </ExpandMore>
      </CardActions>
      <Collapse>
        <CardContent>
          <Typography>123</Typography>
          <Typography paragraph>234</Typography>
          <Typography>345</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default memo(Task);
