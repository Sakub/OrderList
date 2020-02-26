Vue.component('orders-wrapper', {
    template: `
    <div>
        <div class="order" v-for="order in listOfOrders" :key="order.id" :class="{'order--active': order.active}" @click="selectOrder(order.id)">
            <p class="order__name">{{order.name}}</p>
            <p class="order__price">{{order.price}}$</p>
        </div>
        <div class="totalPriceWrapper">
            <p class="totalPrice__text">Total price:</p>
            <p class="totalPrice__price">{{ totalPrice }}$</p>
        </div>
        
    </div>
    `,
    data() {
        return {
            listOfOrders: [{
                    name: 'Gaming mouse',
                    price: 70,
                    active: false,
                    id: 0
                },
                {
                    name: 'Gaming keyboard',
                    price: 120,
                    active: false,
                    id: 1
                }
            ],
            totalPrice: 0
        }
    },
    methods: {
        selectOrder(id) {
            for (let i = 0; i < this.listOfOrders.length; i++) {
                if (this.listOfOrders[i].id === id) {
                    if (!this.listOfOrders[i].active) {
                        this.totalPrice += this.listOfOrders[i].price
                    } else {
                        this.totalPrice -= this.listOfOrders[i].price
                    }
                    this.listOfOrders[i].active = !this.listOfOrders[i].active
                    break
                }
            }
        }
    }
})

var app = new Vue({
    el: '#app'
})