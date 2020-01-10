const shuffle =  (array:any[]):any[] => {
    let count = array.length,
        value,
        i;
    while (count) {
      i = Math.floor(Math.random() * count--);
      value = array[count];
      array[count] = array[i];
      array[i] = value;
    }
  
    return array;
  }


export default shuffle;