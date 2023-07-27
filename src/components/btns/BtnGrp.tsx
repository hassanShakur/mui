import {
  Button,
  ButtonGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from '@mui/icons-material';

import { useState } from 'react';

const BtnGrp = () => {
  const [formats, setFormats] = useState<string[]>([]);

  console.log(formats);

  const formatChangeHandler = (
    _: React.MouseEvent<HTMLElement>,
    newFormat: string[]
  ) => {
    setFormats(newFormat);
  };

  return (
    <Stack spacing={3}>
      <Stack direction={'row'}>
        <ButtonGroup variant='outlined'>
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <hr />

      <Stack direction={'row'}>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='name of button group'
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <hr />

      <Stack direction={'row'}>
        {/* Add exclusive prop to only select 1 at  time. Change state to hold string | null */}
        <ToggleButtonGroup
          size='small'
          value={formats}
          onChange={formatChangeHandler}
        >
          <ToggleButton value={'bold'}>
            <FormatBold />{' '}
          </ToggleButton>
          <ToggleButton value={'italic'}>
            <FormatItalic />{' '}
          </ToggleButton>
          <ToggleButton value={'underline'}>
            <FormatUnderlined />{' '}
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default BtnGrp;
