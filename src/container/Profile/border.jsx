import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
  bgcolor: 'linear-gradient(#045f50,rgba(16, 186,158,1))',
  borderColor: '#045f50',
  m: 1,
  border: 1,
  style: { width: '8rem', height: '8rem' },
  marginTop: '10%',
  boxShadow: "5px 5px #00897b",

  
};

function Border() {
  return (
    <Box display="flex" justifyContent="center">
      <Box borderRadius="50%" {...defaultProps} />
    </Box>
  );
}

export default Border;