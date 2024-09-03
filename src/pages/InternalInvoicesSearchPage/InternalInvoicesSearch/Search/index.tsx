import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box } from '@mui/material';

import { Button } from 'components/UI/Button';
import { DateRangeFieldValue } from 'components/UI/MuiDateRangeFieldValue';
import { CustomTextField } from 'components/UI/TextFieldInput';
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
        <CustomTextField
          label='Номер ВЗН'
          type='text'
          register={register('insideInvoiceNumber')}
          error={errors.insideInvoiceNumber}
        />

        <CustomTextField
          label='Отправитель'
          type='text'
          register={register('sender')}
          error={errors.sender}
        />

        <CustomTextField
          label='Получатель'
          type='text'
          register={register('recipient')}
          error={errors.recipient}
        />
        <DateRangeFieldValue />
      </Box>
      <div className={styles.SearchRowBtn}>
        <Button
          children={'Поиск'}
          variant={'primary'}
          size={'extra-large'}
          type={'submit'}
        />
        <Button
          children={'Отмена'}
          variant={'outlined'}
          size={'extra-large'}
          type={'button'}
          disabled
        />
      </div>
    </form>
  );
};
