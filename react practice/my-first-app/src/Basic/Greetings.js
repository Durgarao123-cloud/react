import React from "react";
const arr = [
  {
    imgURL:
      "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420",
    title: "zooaric park",
    description: "lorem20 ipusn from vangara village",
  },

  {
    imgURL:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    title: "web series",
    description: "onethe most popupalr and most liked bviedo in the world",
  },
  {
    imgURL:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    title: "movis",
    description:
      "one of the most popupalr and most loved and liked bviedo in the world",
  },
];

const Greetings = () => {
  // let temparray = [<h1>mango</h1>, <h1>banana</h1>];

  // let newtempArray = arr.map((eachOb) => {
  //   return (
  //     <article>
  //       <h1>{eachOb.title}</h1>
  //       <img src={eachOb.imgUrl} alt={eachOb.title} />
  //       <p>{eachOb.description}</p>
  //     </article>
  //   );
  // });
  // console.log(newtempArray);

  return (
    <section className="movie-container">
      {/* {newtempArray} */}

      {/* {arr.map((eachObj) => {
        // console.log(eachObj)
      
        return (
          <Movies
            title={eachObj.title}
            imgURL={eachObj.imgURL}
            description={eachObj.description}
          />
        );
      })} */}

      {arr.map((eachObj, index) => {
        // console.log(eachObj)
        const { title, imgURL, description } = eachObj;
        return (
          <Movies
            key={index}
            title={title}
            imgURL={imgURL}
            description={description}
          />
        );
      })}

      {/* <Movies
        imgURL={arr[0].imgURL}
        title={arr[0].title}
        description={arr[0].description}
      />
      <Movies
        imgURL={arr[1].imgURL}
        title={arr[1].title}
        description={arr[1].description}
      />
      <Movies
        imgURL={arr[2].imgURL}
        title={arr[2].title}
        description={arr[2].description}
      /> */}

      {/* <Movies imgURL1={imgURL} title1={title} description={description} /> */}
      {/* <Movies /> */}
      {/* <Movies />
      <Movies />
      <Movies />
      <Movies />
      <Movies />  */}
    </section>
  );
};

const Movies = (props) => {
  console.log(props);
  const { title, imgURL, description } = props;
  return (
    <div className="image-container">
      <img src={imgURL} alt="allu" />
      <h1>{title || "altenative"} </h1>
      <p>{description || "so"}</p>
    </div>
  );
};
// const Movies = (props) => {
//   console.log(props);
//   return (
//     <div className="image-container">
//       <img src={props.imgURL} alt="allu" />
//       <h1>{props.title || "altenative"} </h1>
//       <p>{props.description || "so"}</p>
//     </div>
//   );
// };

// function getData(firstName) {
//   console.log(firstName);
// }

// getData("yamma");

// function getData(userObj) {
//   const { firstName, lastName } = userObj;
//   console.log(userObj);
//   console.log(firstName);
//   console.log(lastName);
// }

// getData({
//   firstName: "allu",
//   lastName: "durga",
// });

export default Greetings;
