import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Carousel } from "../components/Carousel";

export const HomePage = () => {
  return (
    <Box>
      <Carousel />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" sx={{ my: 2 }}>
        Irure eu consequat ut elit consectetur et mollit reprehenderit id
        mollit. Fugiat est adipisicing irure nisi aliquip ea non tempor veniam
        dolore. Mollit adipisicing in magna laborum magna est ullamco sint
        proident amet velit dolore ullamco aute. Irure veniam enim non velit
        veniam elit nulla occaecat proident consequat in ad. Tempor elit ullamco
        proident reprehenderit sint dolore eu. Consectetur deserunt incididunt
        incididunt nisi sit commodo officia velit magna minim. Velit
        reprehenderit non proident est qui ut nisi excepteur consectetur non
        voluptate dolore in pariatur. Fugiat pariatur dolor amet consequat
        pariatur pariatur do. Commodo ullamco deserunt anim reprehenderit
        eiusmod adipisicing et fugiat exercitation eiusmod in ad laboris
        consequat. Quis commodo culpa irure culpa consequat irure pariatur
        exercitation. Mollit magna est in velit adipisicing irure laborum
        occaecat Lorem. Non magna ut laborum consectetur veniam ea Lorem aliquip
        ullamco officia mollit veniam.
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <ImageList cols={4} rowHeight={250}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
