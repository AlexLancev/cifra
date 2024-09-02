import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Box } from '@mui/material';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import ruLocale from 'date-fns/locale/ru';

import { Button } from 'components/Button';

import { FormValues, Schema } from 'utils/validationSchema';

import styles from './Form.module.css';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Box
        component='fieldset'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          margin: 'auto',
          mt: 20,
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
              borderColor: '#ff9800',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#ff9800',
            },
          }}
          {...register('insideInvoiceNumber')}
        />
        {errors.insideInvoiceNumber && (
          <span className={styles.formError}>
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
              borderColor: '#ff9800',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#ff9800',
            },
          }}
          {...register('sender')}
        />
        {errors.sender && (
          <span className={styles.formError}>{errors.sender.message}</span>
        )}

        <TextField
          label='Получатель'
          type='text'
          variant='outlined'
          margin='normal'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              color: '#ff9800',
              borderColor: '#ff9800',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#ff9800',
            },
          }}
          {...register('recipient')}
        />
        {errors.recipient && (
          <span className={styles.formError}>{errors.recipient.message}</span>
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
          disabled={!isValid}
        />
        <Button
          children={'Отмена'}
          variant={'primary'}
          size={'small'}
          type={'button'}
        />
      </Box>
    </form>
  );
};
