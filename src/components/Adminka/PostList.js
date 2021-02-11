
import { Button } from '@material-ui/core'
import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, ImageField, NumberField, Show, DateField, } from 'react-admin'
import app from '../../base'
import firebase from '../../Firebase'
import "firebase/auth"

const PostList = (props) => {
  return (
    <>
      <List {...props}>
        <Datagrid>
          <TextField source='id' />
          <TextField mutliline source='title' />
          <DateField mutliline source='published_at' />
          <TextField mutliline source='body' />
          <TextField mutliline source='body2' />
          <TextField mutliline source='body3' />
          <TextField mutliline source='body4' />
          <TextField mutliline source='body5' />
          <TextField mutliline source='body6' />
          <TextField mutliline source='body7' />
          <TextField mutliline source='body8' />
          <TextField mutliline source='body9' />
          <TextField mutliline source='body10' />
          <TextField mutliline source='body11' />
          <TextField mutliline source='body12' />
          <TextField mutliline source='body13' />

          <ImageField mutliline source='img.src' />
          <EditButton basePath='/posts' />
          <DeleteButton basePath='/posts' />
        </Datagrid>
      </List>
      <div>
        <Button onClick={() => firebase.auth().signOut()} variant="contained" color="primary" style={{ marginTop: 20 }}>Выйти</Button>
      </div>
    </>
  )
}

export default PostList 