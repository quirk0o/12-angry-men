import React from 'react'
import {Container, Grid} from 'semantic-ui-react'

export default ({children}) => (
  <Container>
    <Grid>
      {children}
    </Grid>
  </Container>
);
