import { cloneDeep } from "lodash";

export const isTopPosition = (order, items) => {
  let topPosition = true;
  let q = 0;
  const sortItems = sortByOrder(cloneDeep(items));
  for (const item of sortItems) {
    if (order === item.order) break;
    if (item.active) q = 2;
    else q++;
    if (q === 2) {
      topPosition = true;
      q = 0;
    } else topPosition = false;
  }
  return topPosition;
};

export const sortByOrder = (items) => {
  return items.sort((a, b) =>
    a.order < b.order ? -1 : a.order > b.order ? 1 : 0
  );
};

export const setPositions = (items) => {
  for (const item of items) {
    item.position = isTopPosition(item.order, items) ? "top" : "bottom";
  }
  return items;
};

export const setLargeWidth = (items) => {
  const lastIndex = items.length - 1;
  const even = isEven(items.length);
  const lastItem = items.filter(item => item.order === lastIndex)[0];
  const sumComponent =  even ? 1 : 2;
  for (const item of items) {
    if( !item.active){
      if(
        (item.order > lastIndex-sumComponent && !lastItem.active)
        || (item.order < 2 && lastItem.active)
      ){
        item.largeWidth=true;
      }else{
        item.largeWidth=false;
      }
    }
  }
  return items;
};

export const setLargeHeight = (items) => {
  const even = isEven(items.length);
  if(even){
    const lastIndex = items.length - 1;
    const lastItem = items.filter(item => item.order === lastIndex)[0];
    for (const item of items) {
      if( !item.active){
        if(
          (item.order === lastIndex && !lastItem.active)
          || (item.order === lastIndex-1 && lastItem.active)
        ){
          item.largeHeight=true;
        }else{
          item.largeHeight=false;
        }
      }
    }
  }
  return items;
};


export const createItems = (photos, text, quantity, textIndex, activeIndex) => {
  const items = [];
  if (textIndex && textIndex !== activeIndex) {
    let photoIndex = 0;
    for (let i = 0; i < quantity; i++) {
      const content = i === textIndex ? text : photos[photoIndex];
      const contentType = i === textIndex ? 'text' : 'photo';
      items.push({
        i,
        order: i,
        active: activeIndex === i,
        jumper: false,
        position: null,
        content,
        contentType,
        largeWidth:false,
        largeHeight:false
      });
      if(i !== textIndex)photoIndex++;
    }
  }
  return setPositions(setLargeHeight(setLargeWidth(items)));
};

export const clearItems = (items) => {
  return items.map((item) => {
    item.active = false;
    item.jumper = false;
    item.largeWidth = false;
    item.largeHeight = false;
    return item;
  });
};

export const sortItems = (items) => {
  const sortItemsByOrder = sortByOrder(cloneDeep(items));
  for (const index in sortItemsByOrder) {
    items[sortItemsByOrder[index].i].order = +index;
  }
  return setPositions(items);
};

export const handleJumper = (newItems,jumperIndex,jumperNewOrder) => {

  if (jumperIndex > -1) {
    newItems[jumperIndex] = {
      ...newItems[jumperIndex],
      order: jumperNewOrder,
      active: false,
      jumper: true,
    };
  }

}

const isEven = (n) => {
  return n % 2 === 0;
}
