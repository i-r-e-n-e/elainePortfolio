import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>404</h1>
      <p>Sorry, that page doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </main>
  );
}
