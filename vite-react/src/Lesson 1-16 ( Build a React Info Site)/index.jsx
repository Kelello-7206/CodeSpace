import React from "react"


// //Lesson 1
//ReactDOM.render(<h1>Hello, booi!</h1>, document.getElementById("root"))
//ReactDOM.render(<p>Hello, My name is Kelello!</p>, document.getElementById("root"))


// //Lesson 2
//ReactDOM.render(<ul><li>Here to learn React</li><li>First time learning React</li></ul>,document.getElementById('root'))


// //Lesson 3 - Create your own custom React component!
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }
// function Content() {
//     return ( 
//         <div>
//          <h1 className="heading">Job</h1>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque minima molestias nisi beatae quibusdam optio ipsam!
//          Sint odit quod commodi dignissimos autem pariatur repudiandae qui natus nam adipisci esse voluptates harum nobis iure at,
//          perferendis eius laudantium sequi veritatis iusto quas, dolor veniam odio. Nihil velit nostrum numquam libero cumque?</p>
//         </div>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <Content />
//     </div>, document.getElementById("root")
// )


// //Lesson 4 - recreate the above line of code in vanilla JS by creating and appending an h1.
// const h1 = document.createElement("ul")
// h1.textContent = "This is React"
// h1.className = "header"
// document.getElementById("root").append(h1)

// //Lesson 5 - Create a navbar in JSX:
// const nav1 = (
//     <nav>
//         <h1>Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(nav1,document.getElementById('root'))


// // Lesson 6 - Find out what happens if we try to append JSX to our div#root using .append() instead of ReactDOM
// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I learn React</h3>
//         <ol>
//             <li>It's my first time learning</li>
//             <li>It's fun learning so far</li>
//             <li>I am learning React form CodeSpace and scrimba</li>
//         </ol>
//     </div>
// )
// ReactDOM.render(page, document.getElementById("root"))
// //document.getElementById("root").append(JSON.stringify(page))

// //Jsx returns plain JavaScript objects


// //Lesson 7 - Starting from scratch, build and render the HTML for our section project. Check the Google slide for what you're trying to build.
const page = (
    <div>
        <img src="./react-logo.png" width="32px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)
ReactDOM.render(page, document.getElementById("root"))
