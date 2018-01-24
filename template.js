import axios from 'axios';

// data = data.replace(/<<A>>/g, args);
// data = data.replace(/<<B>>/g, lowerCaseArgs);
// data = data.replace(/<<C>>/g, lowerCasePlural);
// data = data.replace(/<<D>>/g, upperCaseArgs);
// data = data.replace(/<<E>>/g, upperCasePlural);
// data = data.replace(/<<F>>/g, capCase);
// data = data.replace(/<<G>>/g, capCasePlural);

export const INDEX_<<E>>   = 'INDEX_<<E>>';
export const CREATE_<<D>>   = 'CREATE_<<D>>';
export const READ_<<D>>     = 'READ_<<D>>';
export const UPDATE_<<D>>   = 'UPDATE_<<D>>';
export const DELETE_<<D>>  = 'DELETE_<<D>>';

let API_URL = '/api/<<C>>';

// sync actions

// Read all
export const index<<G>> = <<C>> => ({
  type: INDEX_<<E>>,
  <<C>>
});

// Create
export const Create<<F>> = <<B>> => ({
  type: CREATE_<<D>>,
  <<B>>
});

// Read
export const Read<<F>> = <<B>> => ({
  type: READ_<<D>>,
  <<B>>
});

// Update
export const Update<<F>> = <<B>> => ({
  type: UPDATE_<<D>>,
  <<B>>
});

// Delete
export const Delete<<F>> = <<B>> => ({
  type: DELETE_<<D>>,
  <<B>>
});

// async actions

// Read all
export const fetch<<G>> = () => dispatch => (
  axios.get(API_URL)
    .then( res => dispatch(index<<G>>(res.data)) )
);

// Create
export const create<<F>> = (<<B>>) => dispatch => (
  $.ajax({
    url: `${API_URL}`,
    method: 'POST',
    data: { <<B>> }
  })
  .then( res => {
    dispatch(Create<<F>>(<<B>>));
  }, err => {
    console.log(err);
  })
  // axios.post(`${API_URL}`, {
  //   data: {todo}
  // })
  //   .then( res => dispatch(Create<<F>>(todo)) )
  //   .catch( err => console.log(err))
);

// Read
export const fetch<<F>> = (<<B>>) => dispatch => (
  axios.get(`${API_URL}/${<<B>>.id}`)
    .then( res => dispatch(Read<<F>>(res)) )
);

// Update
export const update<<F>> = (<<B>>) => dispatch => (
  $.ajax({
    url: `${API_URL}/${<<B>>.id}`,
    method: 'PATCH',
    data: { <<B>> }
  })
  .then( res => {
    dispatch(Update<<F>>(<<B>>));
  }, err => {
    console.log(err);
  })
  // axios.get(`${API_URL}/${todo.id}`)
  //   .then( res => dispatch(Update<<F>>(res)) )
);

// Update
export const delete<<F>> = (<<B>>) => dispatch => (
  $.ajax({
    url: `${API_URL}/${<<B>>.id}`,
    method: 'DELETE',
    data: { <<B>> }
  })
  .then( res => {
    dispatch(Delete<<F>>(<<B>>));
  }, err => {
    console.log(err);
  })
  // axios.delete(`${API_URL}/${todo.id}`)
  //   .then( res => dispatch(Delete<<F>>(res)) )
);
