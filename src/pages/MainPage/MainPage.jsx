import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { moreTasksRequest, tasksRequest } from '../../redux/actions';

import {
  Feed,
  Rightbar,
} from '../../components';

const initialPageOptions = {
  order: 'ASC',
  page: 1,
  take: 10,
};

const initialFilterOptions = {
  hasRecommendation: 'true',
  search: '',
  brands: null,
  models: null,
  categories: null,
  problems: null,
  statuses: null,
  firstNames: null,
  lastNames: null,
};

function MainPage() {
  const dispatch = useDispatch();

  const [pageOptions, setPageOptions] = useState(initialPageOptions);
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

  useEffect(() => {
    if (pageOptions.page !== 1) {
      const delayDebounceFn = setTimeout(() => {
        dispatch(moreTasksRequest({ pageOptions, filterOptions }));
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    }
    return () => {};
  }, [pageOptions.page]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(tasksRequest({ pageOptions, filterOptions }));
      setPageOptions(initialPageOptions);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [filterOptions]);

  return (
    <>
      <Feed
        pageOptions={pageOptions}
        setPageOptions={setPageOptions}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      <Rightbar
        pageOptions={pageOptions}
        setPageOptions={setPageOptions}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
    </>
  );
}

export default memo(MainPage);
