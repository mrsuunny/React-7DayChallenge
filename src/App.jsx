{/* <article>
  <h1>My First Artical</h1>
  <ol>
    <li>Ki Haal Chaal aaa</li>
    <li>Main Theek Tu Suna</li>
    <li>Mevi Theek</li>
  </ol>
</article>

function Profile() {
  return (
  <img src="https://react.dev/images/docs/scientists/MK3eW3Am.jpg" alt="Katherine" />
  )
}

export default function Gallary(){
  return(
    <section>
      <h1>Amazing People</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </section>
  );
}
 */}

import { Children } from "react";
// import Gallery from "./Gallery"
// import { Profile } from "./Profile"

//  export default function App() {
//   return(
//     <><Profile /><Gallery /></>
//   );
//  }

// export default function TodoList() {
//   return(
//     <>
//     <h1>Hello G</h1>
//     <img
//       src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
//       alt="Hedy Lamarr"
//       class="photo"
//     />
//     <ul>
//       <li>Ki Haal Chaal</li>
//       <li>Main theek</li>
//       <li>or suna</li>
//     </ul>
//     </>
//   );
// }

// export default function Bio() {
//   return(
//   <>
//     <div className="intro">
//       <h1>Welcome to my Website</h1>
//     </div>
//     <p className="summary">
//       You can find my thoughts here
//       <br /><br />
//       <b>And <i>pictures of </i></b> scientists
//     </p>
//   </>
//   );
// }


// export default function Avatar() {
//   const avatar = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
//   const description = 'Gregorio Y. Zara';
//   return(
//     <>
//     <img
//       className="avatar"
//       src={avatar}
//       alt={description}
//      />
//      <TodoList />
//      </>
//   );
// }

// const today = new Date();

// function formatDate(date){
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date)
// }

// export default function TodoList() {
//   const name = "Gregorio Y. Zara";
//   return(
//     <h1>{name}'s To Do List for {formatDate(today)}</h1>
//   );
// }

// export default function TodoList() {
//   return(
//     <ul style={{
//       backgroundColor: "black",
//       color: "white"
//     }}>
//       <li>Assalamoalaikum</li>
//       <li>Waalaikumasalam</li>
//       <li>Jazakallah</li>
//       <li>wa iyyak</li>
//     </ul>
//   );
// }

// const person = {
//   name: 'Sanaullah',
//   theme: {
//     backgroundColor: 'black',
//     color: 'white'
//   }
// }

// export default function TodoList() {
//   return(
//     <div style={person.theme}>
//       <h1>{person.name}'s to do list</h1>
//       <img class="avatar" src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg" alt="Sanaullah" />
//       <ul>
//         <li>Hello G</li>
//         <li>Hi G</li>
//         <li>Nah G</li>
//       </ul>
//     </div>
//   );
// }


// const baseUrl = 'https://react.dev/images/docs/scientists/';
// const person = {
//   name: 'Sanaullah',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: "Pink",
//     color: "Yellow"
//   }
// };

// export default function TodoList() {
//   return(
//     <div style={person.theme}>
//       <h1>{person.name} To Do List</h1>
//       <img
//         class="avatar"
//        src={ baseUrl + person.imageId + person.imageSize + '.jpg' }
//        alt="Kuch Bhi" />
//        <ul>
//         <li>hello</li>
//         <li>hello</li>
//         <li>hello</li>
//        </ul>
//     </div>
//   );
// }

// Task 3 — Component Naming + Markup Bug
// Solved: multiple html tags use karny hai to unhe <></> main likhna ho ga, or function ka name capital latters main likhty hai jsx main

// function TodoCard() {
//   return (
//     <>
//     <h2>Groceries</h2>
//     <ul>
//       <li>Milk</li>
//       <li>Eggs</li>
//     </ul>
//     </>
//   );
// }
// export default TodoCard;


// Task 2 — JS in JSX Bug
// Solved: curly brackets laga ky lyty hai data object sy.

// export default function Greeting() {
//   const user = { name: "Ayesha", age: 22 };
//   return (
//     <div>
//       <h1>Hello, {user.name}</h1>
//       <p>You are {user.age} years old.</p>
//     </div>
//   );
// }


// Task 2
// `Solution: section ka closing tag nai tha, or profile named component tha

// import { Profile } from "./Profile";

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing Scientists</h1>
//       <Profile />
//       <Profile />
//     </section>
//   );
// }


// Task 4 — Write from scratch (no code given)

// Ek component banao naam Recipe ka jo:
// - Ek JS object use kare: dish = { name: 'Biryani', time: '45 mins' }
// - <h2> mein dish ka naam dikhaye (curly braces se)
// - Ek <p> mein cooking time dikhaye (curly braces se)
// - Default export ho

// const dish = {
//   name: 'Biryani',
//   time: '45 mins'
// }

// export default function Recipe() {
//   return(
//     <>
//     <h2>i Love {dish.name}</h2>
//     <p> it takes just {dish.time} to cook my favorite {dish.name}</p>
//     </>
//   );
// }


// .............................PROPS..................................//

// import { getImageUrl } from "./utils"

// function Avatar({person, size}) {
//   return(
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//     <Avatar
//       person = {{
//         name: 'Lin Lanying',
//         imageId: '1bX5QH6'
//       }}
//       size={100}
//     />
//     <Avatar
//       person = {{
//         name: 'Katsuko Saruhashi',
//         imageId: 'YfeOqp2'
//       }}
//       size={80}
//     />
//     <Avatar
//       person = {{
//         name: 'Aklilu Lemma',
//         imageId: 'OKS67lh'
//       }}
//       size={50}
//     />
//     </>
//   );
// }


// import { getImageUrl } from "./utils";

// function Avatar({person, size}){
//   return(
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return(
//     <div>
//       <Avatar
//         person = {{
//           name: '',
//           imageId: ''
//         }}
//         size = {100}
//       />
//       <Avatar
//         person = {{
//           name: '',
//           imageId: ''
//         }}
//         size = {100}
//       />
//       <Avatar
//         person = {{
//           name: '',
//           imageId: ''
//         }}
//         size = {100}
//       />
//     </div>
//   );
// }


import Avatar from "./Avatar";

function Card({children}) {
  return(
    <div className="card">
      { children }
    </div>
  );
}

export default function Profile() {
  return(
    <Card>
      <Avatar
        size={100}
        person = {{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

