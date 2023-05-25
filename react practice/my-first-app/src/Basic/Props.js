// import React, { Component } from "react";

// class Greet extends Component {
//   state = {
//     sname: "allu",
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <h3>{this.state.sname}</h3>
//       </div>
//     );
//   }
// }
// export default Greet;

// import React, { Component } from "react";

// class Greet extends Component {
//   constructor() {
//     super();
//     this.state = {
//       sname: "allu",
//     };
//   }
//   render() {
//     return <h1>allu {this.state.sname}</h1>;
//   }
// }

// export default Greet;

// import React from "react";

// const object = {
//   name: "alli",
//   age: 20,
// };

// const Allu = (props) => {
//   return <h1>allu{props.sname}</h1>;
// };

// const Greet = () => {
//   const var1 = "allu";
//   return (
//     <Allu sname={var1} />
//     // <Allu />
//     // <Allu />
//     // <Allu />
//   );
// };

// export default Greet;

// import React, { Component } from "react";

// class Greetings extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <h1>display{this.props.sname}</h1>
//       </>
//     );
//   }
// }

// class Greet extends Component {
//   render() {
//     return <Greetings sname="durgarao" />;
//   }
// }
// export default Greet;

// import React from "react";

// import { userState } from "react";
// import "./index.css";

//  const myStyle={
//   color:red,
//   background-color:yellow,
// }

// const Greet = () => {
//   const myStyle={
//     color:red,
//     background-color:yellow,
//   }
//   // const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1 style={myStyle}>allu</h1>
//     </>
//   );
// };

// import React from "react";
// const user = {
//   name: "allu",
//   age: 20,
// };

// const Greets = () => {
//   function greet(user) {
//     return `this is ${user.name} ${user.age}`;
//   }
//   return (
//     <>
//       <h1>{greet(user)}</h1>
//     </>
//   );
// };

// const Greet = () => {
//   return (
//     <>
//       <Greets />
//     </>
//   );
// };
// export default Greet;

//........practice based on the props and destructuring......
// import React from "react";
// const arr = [
//   {
//     imgURL:
//       "https://images.unsplash.com/photo-1677782465590-415ac196ebc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     title: "movies",
//   },
//   {
//     imgURL:
//       "https://images.unsplash.com/photo-1677786094716-663497a4b1a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     title: "web series",
//   },
//   {
//     imgURL:
//       "https://images.unsplash.com/photo-1677646309413-afbb660967d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     title: "short films",
//   },
// ];

// const Greet = () => {
//   return (
//     <article class="content-container">
//       {arr.map((eachObj) => {
//         const { imgURL, title } = eachObj;
//         return <Movies imgURL={imgURL} title={title} />;
//       })}
//       ;
//     </article>
//   );
// };

// const Movies = (props) => {
//   const { imgURL, title } = props;
//   return (
//     <section>
//       <img src={imgURL} />
//       <h1>{title}</h1>
//       <p>
//         it is the one of the best web series in the worl sso we can be probably
//         we capable of the doing somthing
//       </p>
//     </section>
//   );
// };

// // const Title = (props) => {
// //   return (
// //     <section class="title-container">
// //       <h1>{props.title}</h1>
// //       <p>
// //         it is the one of the best web series in the worl sso we can be probably
// //         we capable of the doing somthing
// //       </p>
// //     </section>
// //   );
// // };

// export default Greet;

// import React from "react";
// const data = [
//   {
//     albumId: 1,
//     id: 1,
//     title: "accusamus beatae ad facilis cum similique qui sunt",
//     url: "https://via.placeholder.com/600/92c952",
//     thumbnailUrl: "https://via.placeholder.com/150/92c952",
//   },
//   {
//     albumId: 1,
//     id: 2,
//     title: "reprehenderit est deserunt velit ipsam",
//     url: "https://via.placeholder.com/600/771796",
//     thumbnailUrl: "https://via.placeholder.com/150/771796",
//   },
//   {
//     albumId: 1,
//     id: 3,
//     title: "officia porro iure quia iusto qui ipsa ut modi",
//     url: "https://via.placeholder.com/600/24f355",
//     thumbnailUrl: "https://via.placeholder.com/150/24f355",
//   },
//   {
//     albumId: 1,
//     id: 4,
//     title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     url: "https://via.placeholder.com/600/d32776",
//     thumbnailUrl: "https://via.placeholder.com/150/d32776",
//   },
//   {
//     albumId: 1,
//     id: 5,
//     title: "natus nisi omnis corporis facere molestiae rerum in",
//     url: "https://via.placeholder.com/600/f66b97",
//     thumbnailUrl: "https://via.placeholder.com/150/f66b97",
//   },
//   {
//     albumId: 1,
//     id: 6,
//     title: "accusamus ea aliquid et amet sequi nemo",
//     url: "https://via.placeholder.com/600/56a8c2",
//     thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
//   },
//   {
//     albumId: 1,
//     id: 7,
//     title: "officia delectus consequatur vero aut veniam explicabo molestias",
//     url: "https://via.placeholder.com/600/b0f7cc",
//     thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
//   },
//   {
//     albumId: 1,
//     id: 8,
//     title: "aut porro officiis laborum odit ea laudantium corporis",
//     url: "https://via.placeholder.com/600/54176f",
//     thumbnailUrl: "https://via.placeholder.com/150/54176f",
//   },
//   {
//     albumId: 1,
//     id: 9,
//     title: "qui eius qui autem sed",
//     url: "https://via.placeholder.com/600/51aa97",
//     thumbnailUrl: "https://via.placeholder.com/150/51aa97",
//   },
//   {
//     albumId: 1,
//     id: 10,
//     title: "beatae et provident et ut vel",
//     url: "https://via.placeholder.com/600/810b14",
//     thumbnailUrl: "https://via.placeholder.com/150/810b14",
//   },
//   {
//     albumId: 1,
//     id: 11,
//     title: "nihil at amet non hic quia qui",
//     url: "https://via.placeholder.com/600/1ee8a4",
//     thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
//   },
//   {
//     albumId: 1,
//     id: 12,
//     title:
//       "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
//     url: "https://via.placeholder.com/600/66b7d2",
//     thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
//   },
//   {
//     albumId: 1,
//     id: 13,
//     title: "repudiandae iusto deleniti rerum",
//     url: "https://via.placeholder.com/600/197d29",
//     thumbnailUrl: "https://via.placeholder.com/150/197d29",
//   },
//   {
//     albumId: 1,
//     id: 14,
//     title: "est necessitatibus architecto ut laborum",
//     url: "https://via.placeholder.com/600/61a65",
//     thumbnailUrl: "https://via.placeholder.com/150/61a65",
//   },
//   {
//     albumId: 1,
//     id: 15,
//     title: "harum dicta similique quis dolore earum ex qui",
//     url: "https://via.placeholder.com/600/f9cee5",
//     thumbnailUrl: "https://via.placeholder.com/150/f9cee5",
//   },
//   {
//     albumId: 1,
//     id: 16,
//     title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
//     url: "https://via.placeholder.com/600/fdf73e",
//     thumbnailUrl: "https://via.placeholder.com/150/fdf73e",
//   },
//   {
//     albumId: 1,
//     id: 17,
//     title: "natus doloribus necessitatibus ipsa",
//     url: "https://via.placeholder.com/600/9c184f",
//     thumbnailUrl: "https://via.placeholder.com/150/9c184f",
//   },
//   {
//     albumId: 1,
//     id: 18,
//     title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
//     url: "https://via.placeholder.com/600/1fe46f",
//     thumbnailUrl: "https://via.placeholder.com/150/1fe46f",
//   },
//   {
//     albumId: 1,
//     id: 19,
//     title: "perferendis nesciunt eveniet et optio a",
//     url: "https://via.placeholder.com/600/56acb2",
//     thumbnailUrl: "https://via.placeholder.com/150/56acb2",
//   },
//   {
//     albumId: 1,
//     id: 20,
//     title:
//       "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
//     url: "https://via.placeholder.co m/600/8985dc",
//     thumbnailUrl: "https://via.placeholder.com/150/8985dc",
//   },
// ];

// const Greet = () => {
//   return (
//     <section className="post-container">
//       {data.map((eachObj) => {
//         const { id, thumbnailurl, title, url } = eachObj;
//         return (
//           <Profile
//             title={title}
//             url={url}
//             thumbnailurl={thumbnailurl}
//             id={id}
//             key={id}
//           />
//         );
//       })}
//     </section>
//   );
// };

// const Profile = (props) => {
//   const { title, url, thumbnailurl } = props;
//   return (
//     <article className="profile-card">
//       <img src={thumbnailurl} alt="img" />
//       <h1 class="title">{title}</h1>
//       <a href={url}>allu</a>
//     </article>
//   );
// };

// export default Greet;

// import React from "react";
// import Rating from "./Rating";

// const arr = [
//   {
//     postId: 1,
//     id: 1,
//     name: "id labore ex et quam laborum",
//     email: "Eliseo@gardner.biz",
//     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//   },
//   {
//     postId: 1,
//     id: 2,
//     name: "quo vero reiciendis velit similique earum",
//     email: "Jayne_Kuhic@sydney.com",
//     body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//   },
//   {
//     postId: 1,
//     id: 3,
//     name: "odio adipisci rerum aut animi",
//     email: "Nikita@garfield.biz",
//     body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//   },
//   {
//     postId: 1,
//     id: 4,
//     name: "alias odio sit",
//     email: "Lew@alysha.tv",
//     body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
//   },
//   {
//     postId: 1,
//     id: 5,
//     name: "vero eaque aliquid doloribus et culpa",
//     email: "Hayden@althea.biz",
//     body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
//   },
//   {
//     postId: 2,
//     id: 6,
//     name: "et fugit eligendi deleniti quidem qui sint nihil autem",
//     email: "Presley.Mueller@myrl.com",
//     body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
//   },
//   {
//     postId: 2,
//     id: 7,
//     name: "repellat consequatur praesentium vel minus molestias voluptatum",
//     email: "Dallas@ole.me",
//     body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
//   },
//   {
//     postId: 2,
//     id: 8,
//     name: "et omnis dolorem",
//     email: "Mallory_Kunze@marie.org",
//     body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
//   },
//   {
//     postId: 2,
//     id: 9,
//     name: "provident id voluptas",
//     email: "Meghan_Littel@rene.us",
//     body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
//   },
//   {
//     postId: 2,
//     id: 10,
//     name: "eaque et deleniti atque tenetur ut quo ut",
//     email: "Carmen_Keeling@caroline.name",
//     body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
//   },
//   {
//     postId: 3,
//     id: 11,
//     name: "fugit labore quia mollitia quas deserunt nostrum sunt",
//     email: "Veronica_Goodwin@timmothy.net",
//     body: "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea",
//   },
//   {
//     postId: 3,
//     id: 12,
//     name: "modi ut eos dolores illum nam dolor",
//     email: "Oswald.Vandervort@leanne.org",
//     body: "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit",
//   },
//   {
//     postId: 3,
//     id: 13,
//     name: "aut inventore non pariatur sit vitae voluptatem sapiente",
//     email: "Kariane@jadyn.tv",
//     body: "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et",
//   },
//   {
//     postId: 3,
//     id: 14,
//     name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
//     email: "Nathan@solon.io",
//     body: "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum",
//   },
//   {
//     postId: 3,
//     id: 15,
//     name: "debitis magnam hic odit aut ullam nostrum tenetur",
//     email: "Maynard.Hodkiewicz@roberta.com",
//     body: "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia",
//   },
//   {
//     postId: 4,
//     id: 16,
//     name: "perferendis temporibus delectus optio ea eum ratione dolorum",
//     email: "Christine@ayana.info",
//     body: "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
//   },
//   {
//     postId: 4,
//     id: 17,
//     name: "eos est animi quis",
//     email: "Preston_Hudson@blaise.tv",
//     body: "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore",
//   },
//   {
//     postId: 4,
//     id: 18,
//     name: "aut et tenetur ducimus illum aut nulla ab",
//     email: "Vincenza_Klocko@albertha.name",
//     body: "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias",
//   },
//   {
//     postId: 4,
//     id: 19,
//     name: "sed impedit rerum quia et et inventore unde officiis",
//     email: "Madelynn.Gorczany@darion.biz",
//     body: "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut",
//   },
//   {
//     postId: 4,
//     id: 20,
//     name: "molestias expedita iste aliquid voluptates",
//     email: "Mariana_Orn@preston.org",
//     body: "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore",
//   },
// ];

// const Greet = () => {
//   return (
//     <section className="main-container">
//       {arr.map((eachObj) => {
//         const { id, name, email, body } = eachObj;
//         return (
//           <Rating id={id} name={name} email={email} body={body} key={id} />
//         );
//       })}

//       {/* <ul className="sub-container">
//           <li className="box">
//             <div className="header">
//               <h3 className="sub-header">molestias expedita iste aliquid</h3>
//               <h3 className="sub-header">Mariana_Orn@preston.org</h3>
//             </div>
//             <p>qui harum consequatur fugiat\net eligendi perferen</p>
//           </li>
//         </ul>
//       </main> */}
//       {/* <main className="container">
//         <ul className="sub-container">
//           <li className="box">
//             <div className="header">
//               <h3 className="sub-header">molestias expedita iste aliquid</h3>
//               <h3 className="sub-header">Mariana_Orn@preston.org</h3>
//             </div>
//             <p>qui harum consequatur fugiat\net eligendi perferen</p>
//           </li>
//         </ul>
//       </main> */}
//     </section>
//   );
// };

// // const Rating = (props) => {
// //   const { name, email, body } = props;
// //   return (
// //     <main className="container">
// //       <ul className="sub-container">
// //         <li className="box">
// //           <div className="header">
// //             <h3 className="sub-header">{name}</h3>
// //             <h3 className="sub-header">{email}</h3>
// //           </div>
// //           <p>{body}</p>
// //         </li>
// //       </ul>
// //     </main>
// //   );
// // };

// import React, { Component } from "react";
// import ReactDom from "react-dom";
// class Greetings extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h1>{this.props.value}</h1>;
//   }
// }
// class Greet extends Component {
//   render() {
//     return <Greetings value="100" />;
//   }
// }
// export default Greet;
