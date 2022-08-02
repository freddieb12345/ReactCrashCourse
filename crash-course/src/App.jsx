import './css/App.css';
import React from 'react';
//import Joke from './components/Joke';
//import Header from './components/Header';
// import MyInfo from './components/MyInfo.jsx'
// import Footer from './components/Footer.jsx'
//import ContactCard from './components/ContactCard';
//import jokesData from "./data/jokesData"
// import productsData from "./data/products"
// import Product from './components/product';
// import ToDoItem from './components/ToDoItem';
// import "./css/ToDo.css"
// import todosData from "./data/toDosData"
// import Conditional from "./components/Conditional"
import Form from "./components/form"

function App() {
    return (
        <Form />
    )
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age:"",
//             gender:"",
//             location:""
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({[name]: checked}) : this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit() {
//         this.setState({
            
//         })
//     }
    
//     render() {
//         return(
//             <main>
//                 <form onSubmit={this.handleSubmit}>
//                     <input 
//                         placeholder="First name" 
//                         type="text"
//                         name='firstName'
//                         value={this.state.firstName}
//                         onChange={this.handleChange}
//                     /> 
//                     <br />
//                     <input 
//                         placeholder="Last name"
//                         name='lastName'
//                         value={this.state.lastName} 
//                         onChange={this.handleChange}
//                     /> 
//                     <br />
//                     <input 
//                         placeholder="Age"
//                         name='age'
//                         value={this.state.age} 
//                         onChange={this.handleChange}
//                     /> 
//                     <br />
//                     <label>
//                         <input 
//                             type="radio" 
//                             name= "gender"
//                             checked = {this.state.gender === "male"}
//                             value = "male"
//                             onChange={this.handleChange}
//                      /> Male
//                     </label>
//                     <label>
//                         <input 
//                             type="radio" 
//                             name= "gender"
//                             value= "female"
//                             checked = {this.state.gender === "female"}
//                             onChange={this.handleChange}
//                      /> Female
//                     </label>
//                     <br />
//                     <label>
//                         <select 
//                             name="location"
//                             value={this.state.location}
//                             onChange={this.handleChange}
//                         >
//                             <option value="">---Please select your location---</option>
//                             <option value="england">England</option>
//                             <option value="america">America</option>
//                             <option value="france">France</option>
//                             <option value="spain">Spain</option>
//                             <option value="portugal">Portugal</option>
//                             <option value="germany">Germany</option>
//                         </select>
//                     </label>
//                     <br />
//                     <button>Submit</button>
//                 </form>
//                 <h1>Your name is {this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are {this.state.age} years old</h2>
//                 <h3>You are {this.state.gender}</h3>
//                 <h4>You live in {this.state.location}</h4>
//             </main>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName:"",
//             isFriendly: true,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({[name]: checked}) : this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     name="firstName" 
//                     value={this.state.firstName} 
//                     placeholder='First Name' 
//                     onChange={this.handleChange}
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     name="lastName" 
//                     value={this.state.lastName} 
//                     placeholder='Last Name' 
//                     onChange={this.handleChange}
//                 />
//                 <br />
//                 <textarea 
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />
//                 <br />
//                 <label>
//                     <input 
//                         type="checkbox" 
//                         name= "isFriendly"
//                         checked = {this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly? 
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name= "gender"
//                         checked = {this.state.gender === "male"}
//                         value = "male"
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <label>
//                     <input 
//                         type="radio" 
//                         name= "gender"
//                         value= "female"
//                         checked = {this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 <br />
//                 <label>
//                     <select 
//                         value={this.state.favColor}
//                         onChange={this.handleChange}
//                         name="favColor"
//                     >
//                         <option value="blue">Blue</option>
//                         <option value="green">Green</option>
//                         <option value="red">Red</option>
//                         <option value="orange">Orange</option>
//                         <option value="yellow">Yellow</option>
//                     </select>
//                 </label>
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender}</h2>
//                 <h3>Your favorite color is {this.state.favColor}</h3>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state ={
//             loading: false,
//             character: {}
//         }
//     }

//     componentDidMount() {
//         this.setState({ loading: true })
//         fetch("https://swapi.dev/api/people/1")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     character: data,
//                     loading: false
//                 })
//             })

//     }

//     render() {
//         return (
//             <div>
//                 {this.state.loading ? <h1>Page is loading</h1>: <h1>{this.state.character.name}</h1>}
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     this.setState(prevState => {
//         const updatedTodos = prevState.todos.map(todo => {
//             if(todo.id === id) {
//                 todo.completed = !todo.completed
//             }
//             return todo
//         })
//         return {
//             todos: updatedTodos
//         }
//     })
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
//     return(
//       <div className='todo-list'>
//         {todoItems}
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState((prevState) => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }

//     render() {
//         console.log(this.state.isLoggedIn)
//         return (
//             <div>
//                 {this.state.isLoggedIn ? <button onClick={this.handleClick}>Log out</button> : <button onClick={this.handleClick}>Log in</button>}
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             unreadMessages: [
//                 "Call your mum!",
//                 "new spam email available. All links are definately safe to click."
//             ]
//         }
//     }

//     render() {
//         return(
//             <div>
//                 {
//                     this.state.unreadMessages.length > 0 &&
//                     <h2>You have {this.state.unreadMessages.length} unread messages</h2>
//                 }
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoading: true
//         }
//     }
//     //After the set timeout, this will change the state isLoading, to false, causing the Conditional component to re-render, allowing you to change the 
//     //Conditionaly component based off of this prop
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         },1500)
//     }

//     render() {
//         return (
//             <div>
//                 <Conditional isLoading={this.state.isLoading}/>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {}
//     }

//     //The component was just shown to the screen. So this will only run once, when it is shown to the screen
//     // This will not call for re-renders, because in this scenario, the component isn't unmounted and remounted
//     //Most common use case for this is API calls
//     componentDidMount() {

//     }

//     //
//     shouldComponentUpdate(nextProps, nextState) {
//         //return true if we want it to update
//         //return false if we dont want it to update
//     }

//     //Common use case for this, is if in componentDidMount, you set up an event listener, e.g set up code every time someone scrolled, you can use this to 
//     //remove that event
//     componentWillUnmount() {
//         //removes event listener
//         //in genereal, teardown or cleanup your code befor your component disappears
//     }

//     static getDerivedStateFromProps(props, state) {
//         // return the new, updated state based upon the props
//         // likely won't need this
//         // For rare cases, where component needs to take incoming props from its parent, and sets it's own state based upon its props
//         // react team discourages this method
//     }
//     getSnapshotBeforeUpdate() {
//         // create a backup of the current way things are
//         // saves data before it is changed, so it can be referred back to later 
//         // not a super common lifecylce method
//     }


//     render() {
//         return (
//             <div>
//                 code goes here
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }


// function handleClick() {
//     console.log("i was clicked")
// }

// function handleHover() {
//     console.log("I as hovered")
// }

// function App() {
//     return(
//         <div>
//             <img src="https://www.fillmurray.com/200/100" alt="" onMouseOver={handleHover}/>
//             <br />
//             <br />
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )
// }



// function App() {
//   //const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
//   //const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description}/>)
//   return (
//     <div>
//       {productComponents}
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//   }
//   render() {
//     let userStatus
//     if(this.state.isLoggedIn) {
//       userStatus = "in"
//     } else {
//       userStatus = "out"
//     }
//     return(
//       <div>
//         <h1>You are logged {userStatus}</h1>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "Yes"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know?</h1>
//         <h2>{this.state.answer}</h2>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header username="Freddie"/>
//         <Greeting/>
//       </div>
//     )
//   }
// }

// class Header extends React.Component {
//   render(props) {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     )
//   }
// }

// class Greeting extends React.Component {
//   render () {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
//     if(hours < 12) {
//       timeOfDay = "morning"
//     } else if (hours > 12 && hours < 18) {
//       timeOfDay = "afternoon"
//     } else {
//       timeOfDay = "night"
//     }
//     return (
//       <h3>Good {timeOfDay} to you, sir or madam</h3> 
//     )
//   }
// }


export default App;
