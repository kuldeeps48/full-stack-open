import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <Part key={p.id} part={p} />
      ))}
      <b>
        Total of {parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
        exercises
      </b>
    </div>
  );
};

export default Content;
