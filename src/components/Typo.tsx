import { Typography } from '@mui/material';

const Typo = () => {
  return (
    <div>
      <Typography variant='h1'>Heading 1</Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      {/* gutterBottom adds a bottom margin */}
      <Typography variant='h4' gutterBottom>
        Heading 4
      </Typography>
      <Typography variant='h5' component={'h5'}>
        Heading 5
      </Typography>
      <Typography variant='h6'>Heading 6</Typography>

      <hr />

      <Typography variant='subtitle1'>Sub 1</Typography>
      <Typography variant='subtitle2'>Sub 2</Typography>

      <hr />

      {/* Default variant is body1 */}
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis dolor eos ducimus autem eligendi blanditiis ipsum
        error? Natus eos doloribus consectetur, repudiandae excepturi
        fugiat molestiae perferendis, doloremque quidem, dolorem
        minus?
      </Typography>
      <br />
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        neque labore voluptate officiis numquam velit architecto id,
        facilis, recusandae obcaecati ipsa nam accusantium libero
        dolorum ea sed odio ratione ducimus!
      </Typography>
    </div>
  );
};

export default Typo;
