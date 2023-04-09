export function ItemText({ item, getClassName }) {
  return (
      <div className={"item " + getClassName(item.i)}>
        <div className="text">
          <h1>{item.content.title}</h1>
          <p>{item.content.description}</p>
        </div>
      </div>
  );
}
