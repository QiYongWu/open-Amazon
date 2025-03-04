import { defineStore } from "pinia";

export const useDeliveryStore = defineStore('delivery',{
        state(){
            return {
                deliveries : [
                    {
                        date : 'Tuesday,June21'
                    }
                ]
            }
        }
})