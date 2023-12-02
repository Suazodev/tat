import { Box, ImageListItem, ImageList, } from "@mui/material";

const itemData = [
  {
    img: "/assets/images/tattoos/tattoo01.png",
  },
  {
    img: "/assets/images/tattoos/tattoo02.png",
  },
  {
    img: "/assets/images/tattoos/tattoo03.jpeg",
  },
  {
    img: "/assets/images/tattoos/tattoo04.png",
  },
  {
    img: "/assets/images/tattoos/tattoo05.png",
  },
  {
    img: "/assets/images/tattoos/tattoo06.png",
  },
  {
    img: "/assets/images/tattoos/tattoo07.png",
  },
  {
    img: "/assets/images/tattoos/tattoo08.png",
  },
  {
    img: "/assets/images/tattoos/tattoo09.png",
  },
];

export const ImagesGallery = () => {

return (
<Box sx={{display: 'flex', justifyContent: 'center'}}>
<ImageList cols={3} rowHeight={350}>
  {itemData.map((item) => (
    <ImageListItem key={item.img} sx={{
      maxWidth: '250px', 
      margin: '10px',
    }}>
      <img
        srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
</Box>

 ) }




