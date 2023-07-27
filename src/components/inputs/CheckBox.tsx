import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

import { BookmarkBorder, Bookmark } from '@mui/icons-material';
import { useState } from 'react';

type SkillsProp = React.ChangeEvent<HTMLInputElement>;

const CheckBox = () => {
  const [acceptedTnC, setAcceptedTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log({ skills });

  const skillChangeHandler = (e: SkillsProp) => {
    const currSkill = e.target.value;
    const skillIndex = skills.indexOf(currSkill);

    skillIndex === -1
      ? setSkills((prevSkills) => [...prevSkills, currSkill])
      : setSkills((prevSkills) =>
          prevSkills.filter((skill) => skill !== currSkill)
        );
  };

  return (
    <Box>
      {/* Single checkbox */}
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptedTnC}
              onChange={(e) => setAcceptedTnC(e.target.checked)}
            />
          }
          label='I accept terms & conditions'
        />
      </Box>
      <Box>
        <Checkbox
          icon={<Bookmark />}
          checkedIcon={<BookmarkBorder />}
        />
      </Box>

      <br />

      {/* Multiple Boxes */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              value={'js'}
              label='JavaScript'
              control={
                <Checkbox
                  checked={skills.includes('js')}
                  onChange={skillChangeHandler}
                />
              }
            />
            <FormControlLabel
              value={'ts'}
              label='Typescript'
              control={
                <Checkbox
                  checked={skills.includes('ts')}
                  onChange={skillChangeHandler}
                />
              }
            />
            <FormControlLabel
              value={'py'}
              label='Python'
              control={
                <Checkbox
                  checked={skills.includes('py')}
                  onChange={skillChangeHandler}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CheckBox;
