import React, { useState } from 'react';

const useForm = <T>(formContent: T): [T, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [form, setForm] = useState<T>(formContent);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return [form, handleChange];
}

export default useForm;