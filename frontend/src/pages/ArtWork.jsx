import React from "react";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArtworkArts from "@/components/ArtworkArts";
function Artwork() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
      author: "swabdesign",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
      author: "Pavel Nekoranec",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
      author: "Charles Deluvio",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
      author: "Christian Mackie",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
      author: "Darren Richardson",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
      author: "Taylor Simpson",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
      author: "Ben Kolde",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
      author: "Philipp Berndt",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
      author: "Jen P.",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
      author: "Douglas Sheppard",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
      author: "Fi Bell",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
      author: "Hutomo Abrianto",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: "75px",
      }}
    >
      <Container
      // sx={{
      //   width: {
      //     xs: "100%",
      //   },
      // }}
      >
        <Typography>ARTWORK</Typography>
        <Typography display={"flex"} justifyContent={"end"}>
          Илүү мэдрэмж
        </Typography>
        <Box sx={{ width: "100%", background: "black", height: "1px" }}></Box>
        <Box
          sx={{
            marginTop: "50px",
            width: "100%",
          }}
        >
          <ImageList variant="masonry" cols={{ xs: "1", sm: "2" }} gap={10}>
            {itemData.map((item) => (
              <ArtworkArts
                image={item.img}
                author={item.author}
                title={item.title}
              />
            ))}
          </ImageList>
        </Box>
      </Container>
    </Box>
  );
}

export default Artwork;
