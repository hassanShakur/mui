import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from '@mui/material';

const ImgList = () => {
  return (
    <Stack spacing={2}>
      <ImageList
        sx={{ width: 500, height: 500 }}
        cols={3}
        rowHeight={164}
      >
        {myImages.map((image) => (
          <ImageListItem key={image.href}>
            <img
              src={`${image.href}${unsplashParams}`}
              alt={image.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Woven gives images their original height & they all just fit. Masonry does even a better job */}

      <ImageList
        variant='woven'
        sx={{ width: 500, height: 500 }}
        cols={3}
        gap={8}
      >
        {myImages.map((image) => (
          <ImageListItem key={image.href}>
            <img
              src={`${image.href}${unsplashParams}`}
              alt={image.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Masonry => Put in a box */}

      <Box sx={{ width: 500, height: 500, overflowY: 'scroll' }}>
        <ImageList variant='masonry' cols={3} gap={8}>
          {myImages.map((image) => (
            <ImageListItem key={image.href}>
              <img
                src={`${image.href}${unsplashMasonry}`}
                alt={image.title}
                loading='lazy'
              />
              <ImageListItemBar title={image.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default ImgList;
// Lazy loading on screen intersection
// You can add itemBar right next to the img tag for image title => You can add to it position, subtitle, & clickable item (actionIcon)

const unsplashParams = '?w=164&h=164&fit=crop&auto=format&drp=2';
const unsplashMasonry = '?w=248&fit=crop&auto=format&drp=2';
const myImages = [
  {
    href: '',
    title: '',
  },
];
