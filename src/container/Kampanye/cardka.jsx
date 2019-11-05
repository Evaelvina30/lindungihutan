import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Butkam from '../../component/butkam';


const useStyles = makeStyles({
  card: {
    maxWidth: 360,
    background: 'linear-gradient(#045f50,rgba(16, 186,158,1))',
    borderRadius: '30px 30px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '30px',
    borderBottomLeftRadius: '30px',
    color: 'white',
  },
  kam: {
    marginTop: '30%',
    marginLeft: '20%',
  },
  mul: {
    textAlign: 'center',
  },
});

function Cardka() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.kam} gutterBottom variant="body" component="h1">
            <strong>
            Kampanye Alam
            </strong>
          </Typography>
          <Typography className={classes.mul} variant="body2" color="white" component="h5">
            Mulai Kampanye Alam pertamamu, buat gerakan penanaman atau aksi lingkungan dengan mudah, aman dan transparan.
          </Typography>
          <Butkam />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cardka;