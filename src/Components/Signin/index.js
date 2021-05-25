import React from "react";
import { useSelector, useDispatch } from "react-redux";

import firebase from "firebase";
import { googleAuthProvider } from "../../firebase";
import db from "../../firebase";

import { Redirect } from "react-router-dom";

import { signin, setUsernames } from "../../store/userSlice";

import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "../Wrapper";
import chatIcon from "../../assets/images/chat.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  title: {
    marginBottom: 20,
  },
  image: {
    maxWidth: 100,
    marginBottom: 30,
  },
}));

function Signin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, hassUsername } = useSelector((state) => state.user);

  //start - experiment
  async function setnames(snapshot, result) {
    await dispatch(
      setUsernames(snapshot.docs.map((doc) => ({ ...doc.data() })))
    );

    dispatch(signin(result.user));
  }
  //end - experiment

  const signinWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        db.collection("usernames").onSnapshot((snapshot) => {
          setnames(snapshot, result);
        });
      })

      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        //var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
      });
  };

  return user && hassUsername ? (
    <Redirect to="/" />
  ) : user && !hassUsername ? (
    <Redirect to="/username" />
  ) : (
    <Wrapper className={classes.root}>
      <div>
        <img src={chatIcon} alt="Chat Image" className={classes.image} />
        <Typography variant="h4" component="h1" className={classes.title}>
          React Messenger
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={signinWithGoogle}
        >
          Signin With Google
        </Button>
      </div>
    </Wrapper>
  );
}

export default Signin;
