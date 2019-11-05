import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Nature';
import LocationOnIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: "fixed",
    bottom: 0,
    backgroundColor:"white",
    zIndex:200,
  },

  fontTitle:{
    color: 'green',
},
  fontText: {
    color: 'grey',
  }
});

function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/"><BottomNavigationAction className={classes.fontTitle} label="Home" icon={<RestoreIcon />} /></Link>
      <Link to="/kampanye"><BottomNavigationAction className={classes.fontTitle} label="Kampanye" icon={<FavoriteIcon />} /></Link>
      <Link to="/profile"><BottomNavigationAction className={classes.fontTitle} label="Profile" icon={<LocationOnIcon />} /></Link>
    </BottomNavigation>
  );
}

export default Navigation;