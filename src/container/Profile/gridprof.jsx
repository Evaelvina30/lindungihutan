import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Facebook';
import AssignmentIcon from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';
import Buttonsss from '../Profile/button';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    marginTop: '50px',
    color: '#fff',
    backgroundColor: '#3f51b5',
  },
  greenAvatar: {
    marginTop: '50px',
    color: '#fff',
    backgroundColor: '#2196f3',
    },
bagi: {
    marginTop: '70px',
}
});

function Gridprof() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <h4 className={classes.bagi}>Bagikan:</h4>
      <Avatar className={classes.pinkAvatar}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.greenAvatar}>
        <AssignmentIcon />
      </Avatar>
      <Buttonsss />
    </Grid>
  );
}

export default Gridprof;
