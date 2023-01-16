import React from "react";
import Carousel from "react-material-ui-carousel";
import anisha from "../images/avatar-anisha.png";
import ali from "../images/avatar-ali.png";
import richard from "../images/avatar-richard.png";
import shanai from "../images/avatar-shanai.png";
// import dskPrev from "../design/testimonials-slider.jpg";
import Item from "./Item.js";

const Review = () => {
  const items = [
    {
      src: anisha,
      name: "Anisha Li",
      comment: `“Manage has supercharged our team’s workflow. The ability to maintain 
      visibility on larger milestones at all times keeps everyone motivated.”`,
    },
    {
      src: ali,
      name: " Ali Bravo",
      comment: `“We have been able to cancel so many other subscriptions since using 
      Manage. There is no more cross-channel confusion and everyone is much 
      more focused.”`,
    },
    {
      src: richard,
      name: " Richard Watts",
      comment: `“Manage allows us to provide structure and process. It keeps us organized 
      and focused. I can’t stop recommending them to everyone I talk to!”`,
    },
    {
      src: shanai,
      name: " Shanai Gough",
      comment: `“Their software allows us to track, manage and collaborate on our projects 
      from anywhere. It keeps the whole team in-sync without being intrusive.”`,
    },
  ];

  // const breakPoints = [
  //   { width: 1, itemsToshow: 1 },
  //   { width: 550, itemsToshow: 2 },
  //   { width: 768, itemsToshow: 3 },
  // ];

  return (
    <div className="w-full h-full my-10 ">
      <div className="max-w-screen-lg m-auto h-full text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">What they've said</h1>
        </div>
        {/* <div className="hidden md:block h-full" >
          <img src={dskPrev} alt="notfoud" />
        </div> */}
        <div className="my-10 px-5">
          <Carousel
          
            activeIndicatorIconButtonProps={{
              style: {
                color: "orangered", // 2
              },
            }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
        <div className="flex justify-center items-center">
          <div className="capitalize px-5 py-2 rounded-full bg-orange-600  font-semibold text-white w-fit shadow-lg shadow-orange-600">
            get started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

// // import Slide from '@material-ui/core/Slide';
// import React, { Component } from "react";
// // import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import { Carousel, CarouselSlide } from "material-ui-carousel";

// export default class App extends Component {
//   pictures = [
//     {
//       imagel: "./images/radio7-2-1.png",
//       imager: "./images/radio7-2-2.png",
//       title: "r7-2",
//     },
//     {
//       imagel: "./images/radio7-3-1.png",
//       imager: "./images/radio7-3-2.png",
//       title: "r7-3",
//     },
//     {
//       imagel: "./images/masterphil-1.png",
//       imager: "./images/masterphil-2.png",
//       title: "mp",
//     },
//     {
//       imagel: "./images/vito-1.png",
//       imager: "./images/vito-2.png",
//       title: "vito",
//     },
//   ];

//   render() {
//     return (
//       // <Grid container justify="center" spacing={0}>
//       /* {[0, 1].map(value => (
//     <Grid key={value} item> */
//       <Carousel>
//         {this.pictures.map(({ imagel, imager, title }) => (
//           <CarouselSlide key={title}>
//             <GridList cellHeight={160} cols={2}>
//               <GridListTile key={title} style={{ height: "auto" }}>
//                 <img src={imagel} alt={title} />
//               </GridListTile>
//             </GridList>
//             {/* <Card width="100%" key={title}>
//             <CardMedia
//               image={imagel}
//               title={title}
//               style={{
//               height: 0,
//               width: '50%',
//               paddingTop: '75%',
//               }}
//             />
//             <CardMedia
//               image={imager}
//               title={title}
//               style={{
//               height: 0,
//               width: '50%',
//               paddingTop: '75%',
//               }}
//             />
//             <CardContent>
//               <Typography>{title}</Typography>
//             </CardContent>
//           </Card> */}
//           </CarouselSlide>
//         ))}
//       </Carousel>

//       /* </Grid>
//   ))}
// </Grid> */
//     );
//   }
// }
