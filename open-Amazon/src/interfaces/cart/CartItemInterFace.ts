interface CartItem {
    id: string,
    name: string,
    quantity: number,
    count? : number    //如果count属性存在，则必须为number类型数据
}

export  {type CartItem}

