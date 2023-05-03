import React, { memo } from 'react';

import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Checkbox,
} from '@mui/material';
import {
  ExpandMore as ExpandIcon,
  ExpandMoreOutlined as ExpandOutlinedIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  MoreVert as VerticalDotsIcon,
  ThumbDownOutlined as DislikeOutlinedIcon,
  ThumbDown as DislikeFilledIcon,
} from '@mui/icons-material';

function Task() {
  return (
    <Card sx={{
      // maxWidth: 600,
      width: '80%',
    }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: '#87A3F7' }} />}
        action={(
          <IconButton>
            <VerticalDotsIcon />
            <Typography>+12345678910</Typography>
          </IconButton>
        )}
        title="Contact Name"
        subheader="September 14 Date"
      />
      {/* <CardMedia
        component="img"
        image="https://klike.net/uploads/posts/2019-12/1577730308_49.jpg"
        alt="Maybe Carousel???"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">This is. Drop down menu will have tags</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to fav">
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Checkbox
            icon={<DislikeOutlinedIcon />}
            checkedIcon={<DislikeFilledIcon sx={{ color: '#87A3F7' }} />}
          />
        </IconButton>
        <ExpandIcon
          // expand={expanded}
          // onClick={handleExpandClick}
          // aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandOutlinedIcon />
        </ExpandIcon>
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
