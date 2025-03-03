// // src/App.js
// import React from 'react';
// import { UsersPage } from './pages/UsersPage';
// import { TasksPage } from './pages/TasksPage';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>⏳ ChronoFlow ⏳</h1>
//         <p>"Small daily improvements are the key to staggering long-term results." – James Clear</p>
//       </header>
//       <main className="App-main">
//         <section className="App-section">
//           <h2>Our dear Users</h2>
//           <UsersPage />
//         </section>
//         <section className="App-section">
//           <h2>Quest list (Our tasks)</h2>
//           <TasksPage />
//         </section>
//       </main>
//       <footer className="App-footer">
//         <p>&copy; 2025 ChronoFlow - One after another, then repeat. 📃</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React from "react";
import TaskManager from "./components/TaskList/TaskManager";

function App() {
    return (
        <div>
            <TaskManager />
        </div>
    );
}

export default App;
