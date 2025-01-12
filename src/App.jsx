import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="bg-blue-700 w-full p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-xl">Aplikasi Footer</h1>
        </div>
      </header>
      <main className="h-screen">
        <article>
          <h2>Ini Artikel Terserah Mauku</h2>
        </article>
      </main>
      <footer className="p-4 bg-blue-700">
        <div className="container mx-auto">
          <p className="text-white text-center">Copyright @kodeku</p>
        </div>
      </footer>
    </>
  );
}

export default App;
