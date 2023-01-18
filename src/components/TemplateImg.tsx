import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import {ITemplate} from 'src/constants';

import Stack from '@mui/material/Stack';
import {Mms} from '@mui/icons-material';

export interface ITemplateImgProps {
  templates: ITemplate[];
}

const items = [
  {
    name: 'Electronics',
    fileName: '/cert1.png',
  },
  {
    name: 'Macbook Pro',
    fileName: 'https://source.unsplash.com/featured/?macbook',
  },
  {
    name: 'iPhone',
    fileName: 'https://source.unsplash.com/featured/?iphone',
  },
  {
    name: 'Home Appliances',
    fileName: '/cert1.png',
  },
  {
    name: 'Washing Machine WX9102',
    fileName: 'https://source.unsplash.com/featured/?washingmachine',
  },
  {
    name: 'Learus Vacuum Cleaner',
    fileName: 'https://source.unsplash.com/featured/?vacuum,cleaner',
  },

  {
    name: 'Decoratives',
    fileName: '/cert1.png',
  },
  {
    name: 'Living Room Lamp',
    fileName: 'https://source.unsplash.com/featured/?lamp',
  },
  {
    name: 'Floral Vase',
    fileName: 'https://source.unsplash.com/featured/?vase',
  },
];

function test() {
  const AA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const B = AA.reduce(
    (A, v) => {
      const M = A[A.length - 1];
      M.length < 2 ? M.push(v) : A.push([v]);
      return A;
    },
    [[]]
  );
  console.log(B);
}

function Item(props) {
  return (
    <Card sx={{maxWidth: 200}}>
      <CardMedia sx={{height: 140}} image={props.fileName} title={props.name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
interface BannerProps {
  items: any;
  length?: number;
}

const Banner = (props: BannerProps) => {
  const totalItems: number = props.length ? props.length : 2;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className="Content">
        {/* <Typography className="Title">{props.item.name}</Typography> */}
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item;

    const media = (
      <Grid item xs={6} key={item.name}>
        <CardMedia
          className="Media"
          image={item.fileName}
          title={item.name}
          sx={{
            backgroundColor: 'white',
            height: 400,
            overflow: 'hidden',
            position: 'relative',
          }}>
          <Typography className="MediaCaption">{item.name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }
  // //items.push(content);

  return (
    <Card raised className="Banner" sx={{height: 400, position: 'relative'}}>
      <Grid
        container
        spacing={0}
        className="BannerGrid"
        sx={{height: 400, position: 'relative'}}>
        {items}
      </Grid>
    </Card>
  );
};

export default function TemplateImg(props: ITemplateImgProps) {
  return (
    <Stack spacing={3} alignItems="stretch">
      <Box p={1}>
        <Paper sx={{height: 200}}></Paper>
      </Box>
      <Carousel height={200}>
        {items
          .reduce(
            (A, v: any) => {
              const M = A[A.length - 1];
              M.length < 2 ? M.push(v) : A.push([v]);
              return A;
            },
            [[]] as number[][]
          )
          .map((item, index) => {
            return <Banner item={item} key={index} />;
          })}
      </Carousel>
    </Stack>
  );
}
