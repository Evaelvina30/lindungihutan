import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Buttons from '../component/buttons';

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
    position: 'sticky',
    marginBottom: 35,
  },
  media: {
    height: 140,
  },
});

function Card4() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
            Selengkapnya
          <Typography gutterBottom variant="h5" component="h2" class="Bolt">
            Ambil bagian untuk menghijaukan kembali indonesia
          </Typography>
          <Buttons />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Card4;