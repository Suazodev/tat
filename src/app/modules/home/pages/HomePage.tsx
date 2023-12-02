import { Box, Button, Divider, Typography } from "@mui/material";
import { Carousel } from "../components/Carousel";
import { ImagesGallery } from "./ImageGallery";

export const HomePage = () => {
  return (
      <Box style={{ width: "100%" }}>
      <Typography
        sx={{ my: 2 }}
        variant="h2"
        style={{
          color: "#ad9859",
          textAlign: "center",
        }}
      >
        Ink Addict Tattoo Studio
      </Typography>
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
      <ImagesGallery />
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
      <Button>Make an appointment</Button>
     </Box>
  );
};
