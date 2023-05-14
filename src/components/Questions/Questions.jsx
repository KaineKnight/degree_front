import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { questionsRequest } from '../../redux/actions';

import { QUESTIONS_TEXT } from './constants';

import styles from './Questions.module.css';

function Questions() {
  const dispatch = useDispatch();

  const questions = useSelector((store) => store.questions.questions);

  useEffect(() => {
    dispatch(questionsRequest());
  }, []);

  const handleClick = (event) => {
    const question = event.target.parentNode;
    if (question.classList.contains(`${styles.questionBox}`)) question.classList.toggle(`${styles.active}`);
    else question.parentNode.classList.toggle(`${styles.active}`);
  };

  const questionsJSX = questions.map((question) => (
    <Box key={`${question.question}`} className={`${styles.questionBox}`} onClick={handleClick}>
      <Box className={styles.question}>
        <Typography variant="h3" className={styles.questionTitle}>{question.question}</Typography>
        <ExpandMore className={styles.expand} />
      </Box>
      <Box className={styles.answer}>
        <Typography className={styles.answerText}>{question.answer}</Typography>
      </Box>
    </Box>
  ));

  return (
    <Box id="questions" className={styles.container}>
      <Typography variant="h2" className={styles.title}>{QUESTIONS_TEXT}</Typography>
      {questionsJSX}
    </Box>
  );
}

export default memo(Questions);
