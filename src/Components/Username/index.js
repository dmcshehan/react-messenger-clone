import React, { useEffect, useState } from "react";
import firebase from "firebase";

import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Wrapper from "../Wrapper";

import smile from "../../assets/images/smile.svg";
import sad from "../../assets/images/sad.svg";

import db from "../../firebase";

import { setHasUsername } from "../../store/userSlice";

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
  button: {
    marginTop: 20,
  },
  warning: {
    marginTop: 20,
  },
}));

function Signin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, hasUsername, usernames } = useSelector((state) => state.user);

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const checkUsername = (e) => {
    setNewUsername(e.target.value);
    const enteredName = e.target.value;

    usernames.forEach((obj) => {
      if (obj.username === enteredName) {
        setIsUsernameValid(false);
      } else if (
        enteredName !== "" &&
        /^[a-z0-9]+$/.test(enteredName) &&
        enteredName.length >= 5
      ) {
        setIsUsernameValid(true);
      } else {
        setIsUsernameValid(false);
      }
    });
  };

  const addUsername = () => {
    db.collection("usernames")
      .add({
        uid: user.uid,
        username: newUsername,
      })
      .then(() => {
        dispatch(setHasUsername());
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

  return user && hasUsername ? (
    <Redirect to="/" />
  ) : (
    <Wrapper className={classes.root}>
      <div>
        {isUsernameValid ? (
          <img src={smile} alt="Chat Image" className={classes.image} />
        ) : (
          <img src={sad} alt="Chat Image" className={classes.image} />
        )}

        <Typography variant="h5" component="h1" className={classes.title}>
          Select Your Username
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter a username"
          onChange={checkUsername}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          disabled={!isUsernameValid}
          onClick={addUsername}
        >
          Continue
        </Button>
        <Typography component="p" className={classes.warning}>
          Minimum 5 characters / Only letters and numbers
        </Typography>
      </div>
    </Wrapper>
  );
}

export default Signin;
