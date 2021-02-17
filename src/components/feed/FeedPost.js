import React from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import {CommentIcon, MoreIcon, ShareIcon} from "../../icons";
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

function FeedPost({post}) {
 const classes = useFeedPostStyles();
 const {id,media,likes,user,caption,comments} = post;



  return (<>
            <article className={classes.article}>
               <div className={classes.postHeader}>
                 <UserCard/>
                 <MoreIcon classname={classes.moreIcon}/>
               </div>

              {/*{FeedPost post image}*/}
              <div>
                <img src={media} alt={"post media"} className={classes.image}/>
              </div>

              {/*{Feed post buttons}*/}
              <div className={classes.postButtonsWrapper}>
                <div className={classes.postButtons}>
                   <LikeButton/>
                   <Link to={`/p/${id}`}>
                     <CommentIcon/>
                   </Link>

                  <ShareIcon/>
                  <SaveButton/>
                </div>
                <Typography className={classes.like} variant={"subtitle"}>
                  <span>{likes === 1 ? '1 like' : `${likes} likes`}</span>
                </Typography>
                <div className={showCaption ? classes.expanded : classes.collapsed}>
                  <Link to={`${user.username}`}>
                    <Typography variant={"subtitle2"}
                                component={"span"}
                                className={classes.username} >
                      {user.username}
                    </Typography>
                  </Link>
                  {showCaption ? (<Typography variant={"body2"} component={"span"} dangerouslySetInnerHTML={{__html: caption}}/>) : (
                      <div className={classes.captionWrapper}>
                        <HTMLEllipsis
                        unsafeHTML={caption}
                        className={classes.caption}
                        maxLine="0"
                        basedOn={"letters"}
                        ellipsis={"..."}/>

                        <Button className={classes.moreButton}
                                onClick={()=> setCaption(true)}>
                        more
                        </Button>
                      </div>
                  )}
                </div>
                  <Link to={`/p/${id}`}>

                      <Typography className={classes.commentsLink}
                                   variant={"body2"}
                                    component={"div"}>
                          View all {comments.  }
                      </Typography>
                  </Link>
              </div>

            </article>
          </>)
}

function LikeButton(){

}

function SaveButton(){

}

export default FeedPost;
