import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Progress from '../component/progres';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    marginTop: 50,
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    marginLeft: 20,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cover1: {
      width: 103,
      marginLeft: 20,

  },
  hijau: {
    width: 180,
    marginLeft: 20,

  }
}));

function Card3() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <div>
    <Card className={classes.card}>
        <CardMedia
        className={classes.cover}
        image={require('../image/plant.png')}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body" variant="body">
            <strong>#SatuHutan 1000 Pohon untuk Gunung Salak!</strong>
          </Typography>
          <Progress />
        </CardContent>
      </div>
    </Card>
    <Card className={classes.card}>
        <CardMedia
        className={classes.cover1}
        image={require('../image/pantai.png')}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body" variant="body">
            <strong>1000 Pohon untuk Bima</strong>
          </Typography>
          <Progress />
        </CardContent>
      </div>
    </Card>
    <Card className={classes.card}>
        <CardMedia
        className={classes.hijau}
        image={require('../image/hijau.png')}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body" variant="body">
            <strong>#SatuHutan 1 Pohon untuk 1000 Kehidupan Kalimantan</strong>
          </Typography>
          <Progress />
        </CardContent>
      </div>
    </Card>
    </div>
  );
}

export default Card3;