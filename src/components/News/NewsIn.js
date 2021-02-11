import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './News.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import app from '../../base';
import firebase from '../../Firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '30px',
    marginLeft: '200px',
    marginTop: '150px',
    justifyContent: 'flex-star',
    marginBottom: '155px',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginLeft: '20px',
      marginBottom: '15px',
      marginTop: '50px',
    },
  },
  typo: {
    textAlign: 'left',
    marginBottom: 90,
  },
  img: {
    width: '700px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
  },
  red: {
    color: '#E74D4D',
    textAlign: 'left',
  },
  blue: {
    color: '#729DFF ',
    textAlign: 'left',
  },
}));

const NewsIn = (props) => {
  const classes = useStyles();

  const [data, setData] = React.useState([]);
  const [image, setImage] = React.useState();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const db = firebase.firestore();
      const post = await db.collection('posts').get();
      setData(post.docs.map((doc) => doc.data()).reverse());
    };
    fetchPosts();
  }, []);
  console.log(data);
  return (
    <>
      <div className={classes.root}>
        {data.map((item) => (
          // const reader = new FileReader();
          // reader.readAsDataURL(blob)

          <>
            <NavLink
              style={{ textDecoration: 'none' }}
              to={{ pathname: `/main/news/${item.id}`, state: { item } }}
            >
              {!!item.img && <img className={classes.img} src={item.img.src} />}
              <Typography className={classes.red} variant="h5" gutterBottom>
                {item.title}
              </Typography>
              <Typography className={classes.blue} gutterBottom>
                {item.published_at}
              </Typography>
            </NavLink>
            <Typography className={classes.typo} gutterBottom>
              {item.body}
            </Typography>
          </>
        ))}
      </div>
      <div>

      </div>
    </>


  );
};

export default NewsIn;
