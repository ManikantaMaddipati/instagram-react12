import React from "react";
import FeedPage from "./pages/feed";
import ExplorePage from "./pages/explore";
import ProfilePage from "./pages/profile";
import EditProfilePage from "./pages/edit-profile";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import NotFoundPage from "./pages/not-found";
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom";
import PostPage from "./pages/post";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={FeedPage}/>
      <Route path="/explore" component={ExplorePage}/>
      {/*<Route exact path="/:username" component={ProfilePage}/>*/}
      <Route exact path="/p/:postId" component={PostPage}/>
      <Route path="/account/edit" component={EditProfilePage}/>
      <Route path="/account/login" component={LoginPage}/>
      <Route path="/account/emailsignup" component={SignUpPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Switch>
  </Router>
  )
}

export default App;
