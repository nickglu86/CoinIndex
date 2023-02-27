import React from "react";
import { Stack, Card, Button, Container } from "react-bootstrap";
import { youtube } from "../mockdata/youtube";
import YouTube from 'react-youtube';

const YouTubeVids = (params) => {
  console.log(youtube);
  let arr = [];

  Object.keys(youtube).forEach((key, index) =>
    arr.push(
      <YouTube videoId={youtube[key].items[0]['id']['videoId']} opts={{
        height: '260',
        width: '400'}} />
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
    <Container>
       <h2>Latest YouTube Videos</h2>
      <Stack
        direction="horizontal"
        className="h-100 justify-content-center align-items-center"
        gap={3}
      >
        {arr}
      </Stack>
    </Container>
  );
};

export default YouTubeVids;
