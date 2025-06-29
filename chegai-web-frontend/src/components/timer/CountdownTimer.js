import { useEffect, useState, useCallback } from 'react';
import { Box, Typography } from '@mui/material';

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const renderTimeUnit = (value, label) => (
    <Box textAlign="center" mx={1}>
      <Typography variant="caption" color="textSecondary" mb={0.5}>
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );

  const redDot = (
    <Box
      sx={{
        px: 0.5,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#f44336',
          lineHeight: 1,
        }}
      >
        :
      </Typography>
    </Box>
  );

  return (
    <Box display="flex" alignItems="flex-end" px={2} sx={{paddingBottom:'19px'}}>
      {renderTimeUnit(timeLeft.days, 'Dias')}
      {redDot}
      {renderTimeUnit(timeLeft.hours, 'Horas')}
      {redDot}
      {renderTimeUnit(timeLeft.minutes, 'Minutos')}
      {redDot}
      {renderTimeUnit(timeLeft.seconds, 'Segundos')}
    </Box>
  );
};
