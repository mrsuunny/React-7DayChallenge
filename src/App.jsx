{
	/* <article>
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
 */
}

import {Children, use} from 'react'
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

// import Avatar from "./Avatar";

// function Card({children}) {
//   return(
//     <div className="card">
//       { children }
//     </div>
//   );
// }

// export default function Profile() {
//   return(
//     <Card>
//       <Avatar
//         size={100}
//         person = {{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// export default function Button() {
//   function Response() {
//     alert('Ki Haal Chaal a Sarkar!')
//   }
//   return(
//     <>
//     <button onClick={Response}>
//       useful Button
//     </button>
//     <br /><br />
//     <button>
//       useless Button
//     </button>
//     </>
//   );
// }

// function AlertButton({message, children}){
//   return(
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function Menu(){
//   return(
//     <>
//       <AlertButton message="Playing...">
//         Play Songs
//       </AlertButton>
//       <AlertButton message={'Uploading...'}>
//         Upload Playlist
//       </AlertButton>
//     </>
//   )
// }

// function Button({onClick, children}) {
// 	return <button onClick={onClick}>{children}</button>
// }

// function PlayButton({movieName}) {
// 	function handlePlayClick() {
// 		alert(`Playing ${movieName}!`)
// 	}

// 	return <button onClick={handlePlayClick}>Play "{movieName}"</button>
// }

// function UploadButton() {
// 	return <button onClick={() => alert('Uploading')}>Upload Image</button>
// }

// export default function Toolbar() {
// 	return (
//     <div>
// 			<PlayButton movieName={'Avengers EndGame'} />
// 			<UploadButton />
//     </div>
// 	)
// }

// function Button({onSmash, children}){
//   return(
//     <button onClick={onSmash}>{children}</button>
//   );
// }

// export default function App() {
//   return(
//     <>
//       <Button onSmash={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onSmash={() => alert('Uploading!')}>
//         Upload Movie
//       </Button>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie = {() => alert('Playing Movie')}
//       onUploadImage = {() => alert('Uloading Image')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage}) {
//   return (
//     <>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </>
//   );
// }

// function Button ({ onClick, children}) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function Button ({ onClick, children }) {
//   return (
//     <button onClick = { e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       { children }
//     </button>
//   );
// }

// export default function Toolbar() {
//   return(
//     <div className='Toolbar' onClick={() => {
//       alert('You CLicked at the Toolbar');
//     }}>
//       <Button onClick={() => alert('Playing Movie...')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading Image...')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// export default function Signup() {
//   return (
//     <form onSubmit={() => alert('Submitted')}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

// export default function Signup() {
//   return (
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert('Submitted')
//     }}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

// import { sculptureList } from './data'

// export default function Gallary() {
//   let index = 0;

//   function handleClick() {
//     index = index + 1;
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>Next</button>
//       <h2>
//         <i>{sculpture.name}</i> by {sculpture.artist}
//       </h2>
//       <h3>
//         {index + 1} of {sculptureList.length}
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// import { sculptureList } from './data'
// import { useState } from 'react';

// export default function Gallary() {
//   const [ index, setIndex ] = useState(0);
//   const [ showMore, setShowMore ] = useState(false)

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore)
//   }

//   const sculpture = sculptureList[index];
//   return(
//     <>
//     <button onClick={handleNextClick}>
//       Next
//     </button>
//     <h2>
//       <i>{sculpture.name}</i> by {sculpture.artist}
//     </h2>
//     <h3>
//       {index + 1} of {sculptureList.length}
//     </h3>
//     <button onClick={handleMoreClick}>
//       {showMore? 'Hide' : 'Show'} details
//     </button>
//       {showMore && <p>{sculpture.description}</p> }
//       <br />
//       <br />
//     <img
//       src={sculpture.url}
//       alt={sculpture.alt}
//     />
//     </>
//   );
// }

// import { useState } from 'react';
// import { sculptureList } from './data';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handleNextClick() {
//     if (hasNext) {
//     setIndex(index + 1);
//   }}

//   function handlePrevClick() {
//     if (hasPrev) {
//       setIndex(index - 1)
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick} disabled={!hasNext}>
//         Next
//       </button>
//       <br /><br />
//       <button onClick={handlePrevClick} disabled={!hasPrev}>
//         Previous
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <br />
//       <br />
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// ......................................... //

// import { useState } from 'react'

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{ number }</h1>
//       <button onClick={() => {
//         setNumber(number + 1)
//         setNumber(number + 1)
//         setNumber(number + 1)
//       }}>
//         +3
//       </button>
//     </>
//   );
// }

// import { useState } from 'react'

// export default function Form() {
//   const [ to, setTo ] = useState('Alice')
//   const [ message, setMessage ] = useState('Hello')

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 3000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To: {' '}
//         <select
//           value={to}
//           onChange={e => setTo(e.target.value)}>
//             <option value="Alice">Alice</option>
//             <option value="Bob">Bob</option>
//           </select>
//       </label>
//       <br /><br />
//       <textarea
//         placeholder='Message'
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       /> <br /><br />
//       <button type='submit'>Send</button>
//     </form>
//   )
// }

// import { useState } from 'react'

// export default function TrafficLight() {
//   const [ walk, setWalk ] = useState(true)

//   function handleClick() {
//     setWalk(!walk)
//     alert( walk? "Stop is next" : "Walk is next" )
//   }

//   return (
//     <>
//     <button onClick={handleClick}>
//       Change to { walk? 'Stop' : 'Walk' }
//     </button>
//     <h1 style={{
//       color: walk? 'darkgreen' : 'darkred'
//     }}>
//       { walk? 'Walk' : 'Stop' }
//     </h1>
//     </>
//   );
// }

// ......................................... //

// import { useState } from 'react'

// export default function Buy() {
//   const[ pending, setPending ] = useState(0)
//   const [ completed, setCompleted ] = useState(0)

//   async function handleClick() {
//     setPending(pending + 1)
//     await delay(3000);
//     setPending(pending - 1)
//     setCompleted(completed + 1)
//   }

//   return (
//     <>
//     <h3>
//       Pending: {pending}
//     </h3>
//     <h3>
//       Completed: {completed}
//     </h3>
//     <button onClick={handleClick}>
//       Buy
//     </button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   })
// }
 // ........................................... //

//  import { useState } from 'react';

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY,
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   );
// }

// import { useState } from 'react';

// export default function MovingCircle() {
//   const [ position, setPosition ] = useState({
//     x: 0,
//     y: 0
//   });

//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}
//     >
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'blueviolet',
//         borderRadius: '100%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         right: -10,
//         width: 50,
//         height: 50,
//       }} />
//     </div>
//   );
// }

// import { useState } from 'react'

// export default function Form() {
//   const [ person, setPerson ] = useState({
//     firstName: 'Sana',
//     lastName: 'Ullah',
//     email: 'sanaullah@gmail.com'
//   })

//   function handleFirstnameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     })
//   }
//   function handleLastnameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     })
//   }
//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     })
//   }

//   return (
//     <>
//     <label>
//       First name:
//       <input
//         value={person.firstName}
//         onChange={handleFirstnameChange}
//       />
//     </label>

//     <label>
//       Last name:
//       <input
//         value={person.lastName}
//         onChange={handleLastnameChange}
//       />
//     </label>
//     <label>
//       Email:
//       <input
//         value={person.email}
//         onChange={handleEmailChange}
//       />
//     </label>

//     <p>
//       {person.firstName} {' '} {person.lastName} {' '} ({person.email})
//     </p>
//     </>
//   )

// }

// import { useState } from 'react'

// export default function Form() {
//   const [ person, setPerson ] = useState({
//     name: 'Sanaullah',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Humburg',
//       image: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }


//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>

//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i> by {person.name}
//         <br />
//         (located in: {person.artwork.city})
//         <br />
//         <img src={person.artwork.image} alt={person.artwork.title} />
//       </p>
//     </>
//   );
// }

import { useState } from 'react'

export default function ScoreBoard() {
  const [ player, setPlayer ] = useState({
    firstName: 'Sana',
    lastName: 'Ullah',
    score: 10,
  })

  function handleScore() {
    setPlayer({
      score: player.score + 1
    })
  }

  function handleFirstName(e) {
    setPlayer({
      firstName: e.target.value
    })
  }

  function handleLastName(e) {
    setPlayer({
      lastName: e.target.value
    })
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handleScore}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstName}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastName}
        />
      </label>
    </>
  );
}

