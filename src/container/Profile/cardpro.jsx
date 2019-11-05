import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Border from '../Profile/border';
import Gridprof from '../Profile/gridprof';
const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    background: 'linear-gradient(#045f50,rgba(16, 186,158,1))',
    color: 'white',
    textAlign: 'center',
  },
  media: {
    height: 140,
  },
});

function Cardpro() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Border />
          </Typography>
          <Typography variant="body" color="white" component="body">
            <h2>eva elvina prasanti</h2>
          </Typography>
          <Typography variant="body" color="white" component="p">
            Gabung Relawan Sekarang
          </Typography>
          <Gridprof />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cardpro;