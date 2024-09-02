import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Box } from '@mui/material';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import ruLocale from 'date-fns/locale/ru';

import { Button } from 'components/Button';

import { FormValues, Schema } from 'utils/validationSchema';

import styles from './Search.module.css';

export const Search = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    navigate('/internal-invoices');
    reset();
  };

  return (
    <form className={styles.Search} onSubmit={handleSubmit(onSubmit)}>
      <Box
        component='fieldset'
        sx={{
          width: '300px',
          margin: 'auto',
        }}
      >
        <TextField
          label='Номер ВЗН'
          type='text'
          variant='outlined'
          margin='normal'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: '#2D609B',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#2D609B',
            },
          }}
          {...register('insideInvoiceNumber')}
        />
        {errors.insideInvoiceNumber && (
          <span className={styles.SearchError}>
            {errors.insideInvoiceNumber.message}
          </span>
        )}

        <TextField
          label='Отправитель'
          type='text'
          variant='outlined'
          margin='normal'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              color: '#ff9800',
              borderColor: '#2D609B',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#2D609B',
            },
          }}
          {...register('sender')}
        />
        {errors.sender && (
          <span className={styles.SearchError}>{errors.sender.message}</span>
        )}

        <TextField
          label='Получатель'
          type='text'
          variant='outlined'
          margin='normal'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              color: '#2D609B',
              borderColor: '#2D609B',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#2D609B',
            },
          }}
          {...register('recipient')}
        />
        {errors.recipient && (
          <span className={styles.SearchError}>{errors.recipient.message}</span>
        )}

        {/* <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
          <DateRangePicker
            startText='Дата начала'
            endText='Дата окончания'
            {...register('dateRange')}
            renderInput={(startProps, endProps) => (
              <>
                <TextField
                  {...startProps}
                  margin='normal'
                  variant='outlined'
                  fullWidth
                />
                <TextField
                  {...endProps}
                  margin='normal'
                  variant='outlined'
                  fullWidth
                />
              </>
            )}
          />
        </LocalizationProvider>
        {errors.dateRange && (
          <span className={styles.formError}>{errors.dateRange.message}</span>
        )} */}

        <Button
          children={'Поиск'}
          variant={'primary'}
          size={'small'}
          type={'submit'}
        />
        <Button
          children={'Отмена'}
          variant={'primary'}
          size={'small'}
          type={'button'}
          disabled
        />
      </Box>
    </form>
  );
};
