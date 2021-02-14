import React from "react";
import { useSignUpPageStyles } from "../styles";
import SEO from "../components/shared/Seo";
import {Card, CardHeader, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {LoginWithFacebook} from "./login";

function SignUpPage() {
  const classes = useSignUpPageStyles();

  return(
      <>
        <SEO title="Sign up"></SEO>
        <section className={classes.section}>
          <article>
            <Card className={classes.card}>
              <CardHeader className={classes.cardHeader} />
              <Typography className={classes.cardHeaderSubHeader}>
                Sign up to see photos and videos from your friends
              </Typography>
              <LoginWithFacebook color={"primary"} iconColor={"white"} variant={"contained"}/>
              <form>
                <TextField fullWidth variant="filled" label="Email" margin={"dense"} className={classes.textField} autoComplete={"email"}/>
                <TextField fullWidth variant="filled" label="Full Name" margin={"dense"} className={classes.textField} autoComplete={"current-textField"}/>
                <TextField fullWidth variant="filled" label="Username" margin={"dense"} className={classes.textField} autoComplete={"username"}/>
                <TextField fullWidth variant="filled" label="password" type={"password"} margin={"dense"} className={classes.textField} autoComplete={"new-password"}/>
                <Button  variant="contained" fullwidth color={"primary"} className={classes.button} type={"submit"}> Sign Up </Button>
              </form>
            </Card>
            <Card className={classes.loginCard}>
              <Typography align={"right"} variant={"body2"}>
                 Have an account?
              </Typography>
              <Link to={"/account/login"}/>
              <Button color={"primary"} className={classes.signUpButton}>
                 Log in
              </Button>
            </Card>
          </article>
        </section>
      </>);

}

export default SignUpPage;
