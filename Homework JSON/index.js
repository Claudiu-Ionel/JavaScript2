"use strict";
{
  let gudrunStore = [
    {
      "product": "Milk, 1L carton",
      "best_before": "2018-10-04",
      "price": 15.5,
    },
    {
      "product": "Milk, 1L carton",
      "best_before": "2018-10-04",
      "price": 15.5,
    },
    {
      "product": "Eggs 12pcs",
      "best_before": "2018-10-04",
      "price": 35.0,
    },
    {
      "product": "Swedish meatballs",
      "best_before": "2018-10-025",
      "price": 22.0,
    }
  ]

  let myJson = JSON.stringify(gudrunStore);

  function cheap(array) {
    let parseJSON = JSON.parse(array);
    let minPrice = parseJSON.map((item) => {
      return item.price;
    })
    console.log(minPrice);
    let cheapest = Math.min(...minPrice);
    console.log(cheapest);
    let cheapItems = [];
    for (let i = 0; i < gudrunStore.length; i++) {
      if (gudrunStore[i].price === cheapest) {
        cheapItems.push(gudrunStore[i]);
      } else {
        console.log("not cheap");
      }
    }
    return JSON.stringify(cheapItems);
  };

  function expensive(array) {
    let parseJSON = JSON.parse(array);
    console.log(parseJSON);
    let maxPrice = parseJSON.map((item) => {
      return item.price;
    })
    console.log(maxPrice);
    let expensive = Math.max(...maxPrice);
    console.log(expensive);
    let expensiveItems = [];
    for (let i = 0; i < gudrunStore.length; i++) {
      if (gudrunStore[i].price === expensive) {
        console.log(gudrunStore[i]);
        expensiveItems.push(gudrunStore[i]);
      } else {
        console.log("not expensive");
      }
    }
    return JSON.stringify(expensiveItems);
  }
  console.log(`cheapest items`, cheap(myJson));
  console.log(`most expensive items`, expensive(myJson));
}
