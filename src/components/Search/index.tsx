import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Box } from '@mui/material';
import { DateRangeFieldValue } from 'components/UI/MuiDateRangePicker';

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
          margin: '0 auto 15px',
        }}
      >
        <TextField
          label='Номер ВЗН'
          type='text'
          variant='outlined'
          margin='normal'
          fullWidth
          sx={{
            marginBottom: '0',
            marginTop: '0',
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: '#3064A3',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#3064A3',
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
            marginBottom: '0',
            marginTop: '15px',
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              color: '#3064A3',
              borderColor: '#3064A3',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#3064A3',
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
            marginBottom: '0',
            marginTop: '15px',
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              color: '#3064A3',
              borderColor: '#3064A3',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#3064A3',
            },
          }}
          {...register('recipient')}
        />
        {errors.recipient && (
          <span className={styles.SearchError}>{errors.recipient.message}</span>
        )}

        <DateRangeFieldValue />
      </Box>
      <div className={styles.SearchRowBtn}>
        <Button
          children={'Поиск'}
          variant={'primary'}
          size={'medium'}
          type={'submit'}
        />
        <Button
          children={'Отмена'}
          variant={'secondary'}
          size={'medium'}
          type={'button'}
          disabled
        />
      </div>
    </form>
  );
};
