import React from 'react';
import { connect } from 'react-redux'
import { Grid, Segment, Header, Button } from 'semantic-ui-react'

const Note = ({id, name }) => (
  <Grid.Column width={4}>
    <Segment inverted color='blue'> 
      <Header>  </Header> 
        <Segment basic> { name } </Segment> 
    </Segment> 
 </Grid.Column>
)

export default connect()(Note);