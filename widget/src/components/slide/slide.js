import { useState } from "react";
import { cloneDeep } from "lodash";
import "./slide.scss";
import {
  createItems,
  sortItems,
  clearItems,
  setLargeWidth,
  setLargeHeight,
} from "./helper";
import { ItemPhoto } from "./item-photo";
import { ItemText } from "./item-text";

export function Slide({
  photos,
  text,
  textIndex,
  activeIndex,
  breakingPointSmall,
  id,
}) {
  const [activeItemIndex, setActiveItemIndex] = useState(activeIndex);
  const [classVersion, setClassVersion] = useState(0);
  const [items, setItems] = useState(
    createItems(photos, text, photos.length + 1, textIndex, activeIndex)
  );

  const switchActiveIndex = (index) => {
    if (index !== activeItemIndex) {
      prepareItems(cloneDeep(items), index, activeItemIndex);
      setClassVersion(+!classVersion);
      setActiveItemIndex(index);
    }
  };

  const prepareItems = (newItems, newIndex, activeIndex) => {
    const activeIndexItems = newItems[activeIndex];
    const newIndexItems = newItems[newIndex];
    if (!activeIndexItems.largeHeight) {
      const jumperOrder =
        newIndexItems.position === "top" &&
        +newIndexItems.order + 1 < newItems.length
          ? +newIndexItems.order + 1
          : +newIndexItems.order - 1;
      const jumperNewOrder = +activeIndexItems.order + 0.1;
      const jumperIndex = newItems.findIndex(
        (item) => item.order === jumperOrder
      );
      if (!newItems[jumperIndex].active) {
        newItems = clearItems(newItems);
        newItems[newIndex].active = true;
        if (jumperIndex > -1) {
          newItems[jumperIndex] = {
            ...newItems[jumperIndex],
            order: jumperNewOrder,
            active: false,
            jumper: true,
          };
        }
      } else {
        newItems = clearItems(newItems);
        newItems[newIndex].active = true;
      }
    } else {
      newItems = clearItems(newItems);
      newItems[newIndex].active = true;
    }
    setItems(setLargeHeight(setLargeWidth(sortItems(newItems))));
  };

  const getClassName = (index) => {
    let className = "";
    if (items[index].active) {
      className += " active";
    }
    if (!breakingPointSmall) {
      className += " order-" + items[index].order + "-" + classVersion;

      if (items[index].jumper) {
        className += " jumper-" + classVersion;
      }
      if (items[index].largeWidth) {
        className += " large-width";
      }
      if (items[index].largeHeight) {
        className += " large-height";
      }
    }
    return className;
  };

  const getClassSlideName = () => {
    if (photos.length > 4) return "size-1";
    if (photos.length > 2) return "size-2";
    return "size-3";
  };

  const props = {
    item: null,
    getClassName,
    switchActiveIndex,
  };

  return (
    <div className={"slide " + getClassSlideName()} id={id}>
      {items.map((item) => {
        props.item = item;
        switch (item.contentType) {
          case "text":
            return <ItemText {...props} key={item.i} />;
          default:
            return <ItemPhoto {...props} key={item.i} />;
        }
      })}
    </div>
  );
}
