import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Alert,
  Box, Button, CircularProgress, InputBase,
} from '@mui/material';
import Task from '../Task';

import styles from './Feed.module.css';
import { SEARCH_STRING } from './constants';

function Feed({
  filterOptions,
  setPageOptions,
  setFilterOptions,
}) {
  const tasks = useSelector((store) => store.tasks.tasks);
  const isLoading = useSelector((store) => store.tasks.isLoading);
  const error = useSelector((store) => store.tasks.error);

  const handleMoreTasks = () => {
    setPageOptions((state) => {
      const newState = { ...state, page: state.page + 1 };
      return newState;
    });
  };
  const handleSearchChange = (event) => {
    setFilterOptions((state) => {
      const newState = { ...state, search: event.target.value };
      return newState;
    });
  };

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
    <Box flex={4} p={2} className={styles.feed}>
      <Box className={styles.search}>
        <InputBase
          className={styles.searchPlaceholder}
          value={filterOptions.search}
          placeholder={SEARCH_STRING}
          color="text.primary"
          onChange={handleSearchChange}
        />
        {isLoading && <CircularProgress />}
      </Box>
      {error?.message && <Alert severity="error">{error.message}</Alert>}
      {tasksJSX}
      <Button onClick={handleMoreTasks}>
        Загрузить еще
      </Button>
      {isLoading && <CircularProgress />}
      {error?.message && <Alert severity="error">{error.message}</Alert>}
    </Box>
  );
}

Feed.propTypes = {
  filterOptions: PropTypes.shape({
    hasRecommendation: PropTypes.bool,
    search: PropTypes.string,
    brands: PropTypes.string,
    models: PropTypes.string,
    categories: PropTypes.string,
    problems: PropTypes.string,
    statuses: PropTypes.string,
    firstNames: PropTypes.string,
    lastNames: PropTypes.string,
  }).isRequired,
  setPageOptions: PropTypes.func.isRequired,
  setFilterOptions: PropTypes.func.isRequired,
};

export default memo(Feed);
