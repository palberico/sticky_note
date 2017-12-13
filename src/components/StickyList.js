import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { Grid, Segment, Header, Button } from 'semantic-ui-react'

const filtered = (notes, activeFilter) => {
  switch (activeFilter) {
    case 'Active':
      return notes.filter( t => !t.complete )
    case 'Completed':
      return notes.filter( t => t.complete )
    default:
      return notes;
  }
}

const StickyList = ({ notes, filter }) => (
  <Grid>
    { filtered(notes, filter).map( t => <Note key={t.id} {...t} /> )}
  </Grid>
)

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }
}

export default connect(mapStateToProps)(StickyList);
