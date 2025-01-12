import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="bg-purple-700 w-full p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-xl font-bold">
            Aplikasi Mencoba GITFLOW
          </h1>
        </div>
      </header>
      <main className="min-h-screen container mx-auto py-10">
        <div className="grid grid-cols-3 gap-4">
          <article className="flex flex-col gap-2 col-span-2">
            <h2 className="text-xl font-semibold">Judul Artikel</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis repellat dolorum veniam omnis in reprehenderit? Vel
              labore impedit nulla eius! Recusandae atque laborum ut
              voluptatibus odit eligendi saepe, quod enim!
            </p>
          </article>
          <aside className="col-span-1">
            <h2 className="text-lg font-semibold">Artikel Lainnya</h2>
            <ul className="flex flex-col w-full gap-4 mt-4">
              <li>
                <article className="w-full h-40 bg-slate-400 rounded-lg"></article>
              </li>
              <li>
                <article className="w-full h-40 bg-slate-400 rounded-lg"></article>
              </li>
              <li>
                <article className="w-full h-40 bg-slate-400 rounded-lg"></article>
              </li>
            </ul>
          </aside>
        </div>
      </main>
      <footer className="p-4 bg-purple-700">
        <div className="container mx-auto">
          <p className="text-white text-center">Copyright @kodeku</p>
        </div>
      </footer>
    </>
  );
}

export default App;
