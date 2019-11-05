import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gambar from '../image/Merch.png';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    height: '130px',
    marginTop: 50,
  },
  media: {
    height: 140,
  },
});

function Cardku() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
       <img src={ gambar } width='100%' height='100%' />
      </CardActionArea>
      <CardContent>
      </CardContent>
    </Card>
  );
}

export default Cardku;