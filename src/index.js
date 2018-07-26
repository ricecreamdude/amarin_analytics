const email = {
  addSubscriber: function() {
    // let email = document.getElementById('emailName').value
    // console.log('const email!', email)
    TrackerModule.subscribe(document.getElementById('emailName').value)
  }
}

const purchase = {
  trackPurchase: function() {}
}

const subscribe = {
  addSubscriber: function() {}
}

// ==========================Product 'Data' ============================= //
const products = [
  {
    name: 'apple',
    price: 0.5,
    quantity: 1,
    tax: 0.1,
    currency: 'USD',
    total: 0.6
  },
  {
    name: 'banana',
    price: 1.0,
    quantity: 1,
    tax: 0.15,
    currency: 'USD',
    total: 1.15
  }
]

class Activity {
  constructor(action, data) {
    // this.user = user
    this.action = action
    this.data = data
    this.cookie = null
  }
}

// ====================================================================== //
const TrackerModule = {
  //History activity is stored as class definedobjects
  history: [],
  addActivity: function(action, data) {
    let act = new Activity(action, data)
    this.history.push(act)
    console.log('History Array', this.history)
    console.log('Tracker data', data)
  },
  subscribe: function(email) {
    let data = {
      name: email.toString()
    }
    this.addActivity('subscribe', data)
  },
  interest: function() {
    let data = {}

    this.addActivity('interest', data)
  },
  purchase: function(item) {
    let data = {}
    let price = item.price
    let quantity = item.quantity

    this.addActivity('purchase', data)
  }
}
// ================================================ //

document.getElementById('emailBtn').addEventListener('click', email.addSubscriber)

// document.getElementById('interest').addEventListener('click', )
//
// document.getElementById('purchase').addEventListener('click', )
