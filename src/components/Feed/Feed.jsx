import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Alert,
  Box, CircularProgress,
} from '@mui/material';
import Task from '../Task';
import { tasksRequest } from '../../redux/actions';

const initialPageOptions = {
  order: 'ASC',
  page: 1,
  take: 10,
};

const initialFilterOptions = {
  hasRecommendation: 'true',
  search: null,
  brands: null,
  models: null,
  categories: null,
  problems: null,
  statuses: null,
  firstNames: null,
  lastNames: null,
};

function Feed() {
  const dispatch = useDispatch();

  const [pageOptions, setPageOptions] = useState(initialPageOptions);
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

  const tasks = useSelector((store) => store.tasks.tasks);
  const isLoading = useSelector((store) => store.tasks.isLoading);
  const error = useSelector((store) => store.tasks.error);

  useEffect(() => {
    dispatch(tasksRequest({ pageOptions, filterOptions }));
  }, []);
  console.log(tasks);
  const tasksJSX = tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      description={task.description}
      contactName={task.contactName}
      contactPhone={task.contactPhone}
      contactEmail={task.contactEmail}
      isCompleted={task.isCompleted}
      createdAt={task.createdAt}
      status={task.status}
      problem={task.problem}
      model={task.problem.model}
      brand={task.problem.model.brand}
      category={task.problem.model.category}
      taskUser={task?.user}
    />
  ));

  return (
    <Box
      flex={4}
      p={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        minHeight: '89vh',
      }}
    >
      {isLoading && <CircularProgress />}
      {error?.message && <Alert severity="error">{error.message}</Alert>}
      {tasksJSX}
    </Box>
  );
}

export default memo(Feed);
