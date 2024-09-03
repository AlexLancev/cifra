import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

export const DateRangeFieldValue = () => {
  const today = dayjs();
  const [value, setValue] = React.useState<DateRange<Dayjs>>(() => [
    today,
    today.add(1, 'day'),
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['SingleInputDateRangeField', 'SingleInputDateRangeField']}
        sx={{
          marginTop: '15px',
          '& .MuiOutlinedInput-root.Mui-focused fieldset': {
            color: '#3064A3',
            borderColor: '#3064A3',
          },
          '& .MuiInputLabel-root': { color: '#333333' },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#3064A3',
          },
        }}
      >
        <SingleInputDateRangeField
          label='Дата принятия (период)'
          defaultValue={[today, today.add(30, 'day')]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
