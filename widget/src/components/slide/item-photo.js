import { VscAdd } from "react-icons/vsc";
export function ItemPhoto({ item, getClassName, switchActiveIndex }) {
  return (
      <div className={"item " + getClassName(item.i)} onClick={() => switchActiveIndex(item.i)}>
        <img
          src={item.content.src}
          alt={item.content.alt}
          title={item.content.title}
          loading="lazy"
        />
        {!item.active && <VscAdd />}
      </div>
  );
}
