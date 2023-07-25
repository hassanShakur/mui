import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import img from './../../images/hack-1.jpg';

const MuiCard = () => {
  return (
    <Box width={'350px'}>
      <Card>
        <CardMedia
          component={'img'}
          height={150}
          image={img}
          alt='Random img'
        ></CardMedia>

        <CardContent>
          <Typography variant='h4' component={'div'} gutterBottom>
            Lorem
          </Typography>
          <Typography variant='body2' color={'text.secondary'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos praesentium, quisquam quo ex, vitae ad
            blanditiis provident culpa nam totam fugiat similique odio
            repudiandae consectetur exercitationem maxime. Sit, vel
            voluptatem!
          </Typography>
        </CardContent>

        <CardActions>
          <Button size='small'>share</Button>
          <Button size='small'>learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;

// Card by default takes parent's width
// CardContent is for text
// Actions is for buttons
// Media is for images
// source.unsplash.com/random
