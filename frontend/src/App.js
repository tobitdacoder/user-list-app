// src/App.js
import React from 'react';
import { UsersPage } from './pages/UsersPage';
import { TasksPage } from './pages/TasksPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ChronoFlow</h1>
        <p>"A goal without a plan is just a wish." – Antoine de Saint-Exupéry</p>
      </header>
      <main className="App-main">
        <section className="App-section">
          <h2>Meet the Crew (aka Users)</h2>
          <UsersPage />
        </section>
        <section className="App-section">
          <h2>Quest Log (aka Tasks)</h2>
          <TasksPage />
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 TaskMe Pro - Conquering to-dos since tomorrow. 😉</p>
      </footer>
    </div>
  );
}

export default App;