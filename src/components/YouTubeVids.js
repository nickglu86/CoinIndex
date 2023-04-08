import React from "react";
import { Stack, Card, Button, Container } from "react-bootstrap";
import { youtube } from "../mockdata/youtube";
import YouTube from 'react-youtube';

const YouTubeVids = (params) => {
  let arr = [];

  Object.keys(youtube).forEach((key, index) =>
    arr.push(

        <Card className="youtube-card" key={index}>
        <Card.Body>
        <YouTube videoId={youtube[key].items[0]['id']['videoId']} opts={{
        height: '200',
        width: '100%'}} />
          <Card.Title className="mt-1"> {youtube[key].items[0]["snippet"]["title"]}</Card.Title>
          <Button variant="light" 
                  style={{position: "absolute",
                      right: "16px",
                      bottom: "10px"}}
                  href={youtube[key].items[0]["snippet"]["thumbnails"]["medium"]["url"]}    
                      >
              Watch
            </Button>
        </Card.Body>
      </Card>

    //   <Card style={{ width: "400px", height: "340px" }} key={index}>
    //     {console.log(
    //       youtube[key].items[0]["snippet"]["thumbnails"]["medium"]["url"]
    //     )}
    //     <Card.Body>
    //       <img
    //         src={
    //           youtube[key].items[0]["snippet"]["thumbnails"]["medium"]["url"]
    //         }
    //         height="180"
    //       />
    //       <Card.Title className="mt-1">
    //         {youtube[key].items[0]["snippet"]["title"]}
    //       </Card.Title>
    //       <Button
    //         variant="light"

    //         // href={youtube[key].items[0]['id']['videoId']}
    //       >
    //         Watch
    //       </Button>
    //     </Card.Body>
    //   </Card>
     )
  );
  return (
    <Container className="my-4">
       <h2>Latest YouTube Videos</h2>
      <Stack
        direction="horizontal"
        className="h-100 justify-content-center align-items-center youtube-stack" 
        gap={3}
      >
        {arr}
      </Stack>
    </Container>
  );
};

export default YouTubeVids;
