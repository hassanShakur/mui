import { Autocomplete, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'NextJS',
  'Python',
];

const AutoComplete = () => {
  const [mySkill, setMySkill] = useState<string | null>(null);

  console.log({ mySkill });

  return (
    <Stack spacing={2} width={'200px'}>
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField label='Skills' {...params} />
        )}
        value={mySkill}
        onChange={(_: any, skill: string | null) => setMySkill(skill)}
        // Allow other vals not in the array
        freeSolo
      />
    </Stack>
  );
};

export default AutoComplete;
