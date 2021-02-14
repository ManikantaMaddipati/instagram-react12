import React from "react";
import Layout from "../components/shared/Layout";
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

function NotFoundPage() {
  return( <Layout marginTop={120} title="Page not found">

    <Typography variant="h5" align="center" paragraph>
      Sorry, this page in not available
    </Typography>

    <Typography align="center" paragraph>
      The link might be broken or the page is removed
    </Typography>


    <Link to="/">
      <Typography color="primary" component="span">
        Go back to Instagram.
      </Typography>
    </Link>


  </Layout> )

}

export default NotFoundPage;
