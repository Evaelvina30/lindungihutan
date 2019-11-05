import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import gambar from '../image/lindungibersama.png';
import Buttons from '../component/button';

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
  },
  media: {
    height: 140,
  },
});

function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <img src={gambar} width='100%' height='100%'  alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hal sederhana,jadi lebih bermakna bersama LindungiHutan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Buat Aksi penanaman dan lingkungan dengan mudah,aman dan transparant.Mulai Tanam #PohonPertama Kamu.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Buttons />
    </Card>
  );
}

export default Card1;