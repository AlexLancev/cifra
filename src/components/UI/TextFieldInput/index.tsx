import React from 'react';
import { TextField } from '@mui/material';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import styles from './CustomTextField.module.css';

interface CustomTextFieldProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  type,
  register,
  error,
}) => {
  return (
    <>
      <TextField
        label={label}
        type={type}
        variant='outlined'
        margin='normal'
        fullWidth
        sx={{
          marginBottom: 0,
          marginTop: '15px',
          padding: 0,
          '& .MuiOutlinedInput-root.Mui-focused fieldset': {
            color: 'var(--primary-400)',
            borderColor: 'var(--primary-400)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--primary-400)',
          },
          '& .MuiInputLabel-root': {
            color: 'var(--text-black-300)',
          },
        }}
        {...register}
      />
      {error && <span className={styles.SearchError}>{error.message}</span>}
    </>
  );
};
