import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BigTweet } from "./BigTweet";

export const TweetDetails = () => {
    const {tweetId} = useParams()
    const [tweetClicked, setTweetClicked] = useState(null);
    useEffect(() => {
        fetch(`/api/tweet/${tweetId}`)
          .then((res) => {
              if (res?.ok){
                  return res.json()
                } else {
                    throw new Error('res error')
                } })
          .then((data) => {
              console.log(data)
            setTweetClicked(data.tweet);
          })
          .catch((error) => {
            console.log('error', error);
          });
      }, [tweetId]);

    return  (
        <>
        {tweetClicked ?
        <BigTweet tweet={tweetClicked} />
        : <div>loading</div> }
        </>
    )
};