import { useState } from "react";

// Stand-in for the existing Home page included in the provided project archive.
export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="home-page">
      <h1>Welcome to the Home page</h1>
      <p>This is the existing application page.</p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </main>
  );
}
