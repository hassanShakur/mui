import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel='Nav speed dial'
      icon={<SpeedDialIcon />}
      sx={{
        position: 'absolute',
        bottom: 30,
        right: 30,
      }}
    >
      <SpeedDialAction icon={'✅'} tooltipTitle='Check' />
      <SpeedDialAction icon={'🌍'} tooltipTitle='Globe' />
      <SpeedDialAction icon={'🌹'} tooltipTitle='Rose' />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
