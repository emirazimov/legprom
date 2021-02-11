import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import './News.css';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCPMb_ANtyxvTzWMVYgRqqzWnxFmvhCA_c",
    authDomain: "admindashboard-7df9b.firebaseapp.com",
    databaseURL: "https://admindashboard-7df9b-default-rtdb.firebaseio.com",
    projectId: "admindashboard-7df9b",
    storageBucket: "admindashboard-7df9b.appspot.com",
    messagingSenderId: "587446494866",
    appId: "1:587446494866:web:67d90e3e0582f13a56a84b",
    measurementId: "G-D5YKGDZH8L"
};

const database = firebase.database();
const ref = database.ref('posts');

const useStyles = makeStyles((theme) => ({
    root: {
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
        marginRight: 65
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

        textAlign: 'left',
    },
    blue: {
        color: '#729DFF ',
        textAlign: 'left',
    }
}));


const News = (props) => {
    const classes = useStyles();

    let posts = props.location.state.item


    // const body = (data) => {
    //     for (var value in data) 
    //     return key
    // }

    return (
        <>
            <div className={classes.root} >

                <>
                    <Typography className={classes.red} variant="h5" gutterBottom>{posts.title}</Typography>
                    <Typography className={classes.blue} gutterBottom>{posts.published_at}</Typography>

                    {!!posts.img && (
                        <>
                            <img className={classes.img} src={posts.img.src} />
                            </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body}
                    </Typography>
                    <br></br>


                    {!!posts.img2 && (
                        <>
                    <img className={classes.img} src={posts.img2.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body2}
                    </Typography>
                    <br></br>
                    

                    {!!posts.img3 && (
                        <>
                    <img className={classes.img} src={posts.img3.src} />
                    </>
                    )
                    }
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body3}
                    </Typography>
                    <br></br>
                        

                   {!!posts.img4 && (
                        <>
                    <img className={classes.img} src={posts.img4.src} />
                    </>
                    )
                    }  
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body4}
                    </Typography>
                    <br></br>
                    
                    
                    {!!posts.img5 && (
                        <>
                    <img className={classes.img} src={posts.img5.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body5}
                    </Typography>
                    <br></br>

                    {!!posts.img6 && (
                        <>
                    <img className={classes.img} src={posts.img6.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body6}
                    </Typography>
                    <br></br>
                    

                    {!!posts.img7 && (
                        <>
                    <img className={classes.img} src={posts.img7.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body7}
                    </Typography>
                    <br></br>

                    {!!posts.img8 && (
                        <>
                    <img className={classes.img} src={posts.img8.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body8}
                    </Typography>
                    <br></br>

                    {!!posts.img9 && (
                        <>
                    <img className={classes.img} src={posts.img9.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body9}
                    </Typography>
                    <br></br>

                    {!!posts.img10 && (
                        <>
                    <img className={classes.img} src={posts.img10.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body10}
                    </Typography>
                    <br></br>

                    {!!posts.img11 && (
                        <>
                    <img className={classes.img} src={posts.img11.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body11}
                    </Typography>
                    <br></br>

                    {!!posts.img12 && (
                        <>
                    <img className={classes.img} src={posts.img12.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body12}
                    </Typography>
                    <br></br>

                    {!!posts.img13 && (
                        <>
                    <img className={classes.img} src={posts.img13.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body13}
                    </Typography>
                    <br></br>

                    {!!posts.img14 && (
                        <>
                    <img className={classes.img} src={posts.img14.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body14}
                    </Typography>
                    <br></br>

                    {!!posts.img15 && (
                        <>
                    <img className={classes.img} src={posts.img15.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body15}
                    </Typography>
                    <br></br>

                    {!!posts.img16 && (
                        <>
                    <img className={classes.img} src={posts.img16.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body16}
                    </Typography>
                    <br></br>

                    {!!posts.img17 && (
                        <>
                    <img className={classes.img} src={posts.img17.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body17}
                    </Typography>
                    <br></br>

                    {!!posts.img18 && (
                        <>
                    <img className={classes.img} src={posts.img18.src} />
                    </>
                    )
                    } 
                    <Typography className={classes.typo} gutterBottom>
                        {posts.body18}
                    </Typography>
                    <br></br>



                </>

                

            </div>

        </>

    );
}



export default News