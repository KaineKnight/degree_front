import React, { memo, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

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
  Chip,
  Box,
  Button,
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
// import DoNotDisturbOffIcon from '@mui/icons-material/DoNotDisturbOff';
// import HourglassFullIcon from '@mui/icons-material/HourglassFull';

import styles from './Task.module.css';
import { ADDITIONAL_INFO } from './constants';
import ModalBox from '../ModalBox';
import { toggleModal } from '../../redux/actions';

function Task({
  id,
  title,
  description,
  contactName,
  contactPhone,
  contactEmail,
  isCompleted,
  status,
  createdAt,
  problem,
  model,
  brand,
  category,
  taskUser,
}) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);

  const [expanded, setExpand] = useState(false);
  const [liked, setLiked] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isDisabledIcon, setIsDisabledIcon] = useState(false);

  // if (task?.users?.every((user) => user.userId !== user.id )) setIsDisabledIcon(true);
  // if (task?.user?.)

  const handleExpandClick = () => setExpand(!expanded);
  const handleLike = () => {
    dispatch(toggleModal());
    setLiked(!liked);
  };
  const handleReject = () => {
    dispatch(toggleModal());
    setRejected(!rejected);
  };

  const creationDate = new Date(createdAt);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = creationDate.toLocaleDateString('ru-ru', dateOptions);

  return (
    <Card className={styles.card}>
      <CardHeader
        avatar={<Avatar className={styles.contactImage} />}
        action={(
          <IconButton>
            <VerticalDotsIcon />
            <Typography>{contactPhone}</Typography>
          </IconButton>
        )}
        title={contactName}
        subheader={dateString}
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">{problem.title}</Typography>
      </CardContent>
      <CardContent>
        <Chip className={styles.chip} label={`Цена: ${problem.price} руб.`} />
        <Chip className={styles.chip} label={`Время выполнения: ${problem.time} ч.`} />
        <Chip className={styles.chip} label={`Категория: ${category.title}`} />
        <Chip className={styles.chip} label={`Бренд: ${brand.title}`} />
        <Chip className={styles.chip} label={`Модель: ${model.title}`} />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton disabled={isDisabledIcon || rejected} onClick={handleLike}>
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checked={liked}
            checkedIcon={<FavoriteIcon className={styles.likeButton} />}
          />
        </IconButton>
        <IconButton disabled={isDisabledIcon || liked} onClick={handleReject}>
          <Checkbox
            icon={<DislikeOutlinedIcon />}
            checked={rejected}
            checkedIcon={<DislikeFilledIcon className={styles.dislikeButon} />}
          />
        </IconButton>
        <ExpandIcon onClick={handleExpandClick} className={styles.expand}>
          <ExpandOutlinedIcon />
        </ExpandIcon>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent>
          <Typography variant="h6" paragraph>{ADDITIONAL_INFO}</Typography>
          <Typography paragraph>{contactEmail && `Email: ${contactEmail}`}</Typography>
          <Typography paragraph>{title}</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
      <ModalBox>
        <Box>
          <Box>Вы уверены, что хотите совершить действие?</Box>
          <Button>Да</Button>
          <Button>Нет</Button>
        </Box>
      </ModalBox>
    </Card>
  );
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  contactName: PropTypes.string.isRequired,
  contactPhone: PropTypes.string.isRequired,
  contactEmail: PropTypes.string,
  isCompleted: PropTypes.bool,
  createdAt: PropTypes.string,
  status: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  problem: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
  model: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  brand: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  category: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

Task.defaultProps = {
  description: null,
  contactEmail: null,
  isCompleted: false,
  createdAt: null,
};

export default memo(Task);
