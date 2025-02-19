import LikeButton from "./like-button";

// React components are functions
// React "properties" are arguments passed to components
function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
  const names = ["Eyad", "Hazem", "Dana"];

  return (
    <div>
      <Header title="Hello" />
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
