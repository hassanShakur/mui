import { FormLabel, Rating, Stack } from '@mui/material';
import React, { useState } from 'react';

const Ratings = () => {
  const [rating, setRating] = useState<number | null>(null);

  console.log({ rating });

  const ratingChangeHandler = (
    _: React.ChangeEvent<{}>,
    newRating: number | null
  ) => {
    setRating(() => newRating);
  };

  return (
    <Stack spacing={2}>
      <FormLabel>Rate the course</FormLabel>
      {/* You can add icon and emptyicon as props to use own icons */}
      <Rating
        precision={0.5}
        value={rating}
        onChange={ratingChangeHandler}
        // highlightSelectedOnly // Can be used with emoji commenting
      />
    </Stack>
  );
};

export default Ratings;
