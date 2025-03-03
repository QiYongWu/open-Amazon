import {defineStore} from 'pinia'
export const useCartStore = defineStore('cart',
   {
       actions : 
        {
            pushProduct(product,value)
            {
                this.cartQuantity+=value;
                
                const cartProduct  = this.cart.find((item) => {
                    return item.id == product.id && item.name == product.name
                })

                if(!cartProduct){
                this.cart.push(product)
                console.log(`成功添加数量为:${value}商品 : ${product.name}  进入购物车`);
                }

                else{
                    cartProduct.quantity +=value;
                    console.log(`商品 : ${product.name} 在购物车中的数量成功 + ${value}`)
                }
                },
            
            showCart(){
                console.log(this.cart);
            },

            
        }  ,     
    //真正存储数据的地方
    state(){
        return {
            cart:[],
            cartQuantity:0,
        }
    }
   }
)