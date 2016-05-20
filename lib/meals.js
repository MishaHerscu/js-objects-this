'use strict';

let user = {
  name: 'Misha',
  age: 25,
  calorieTarget: 4000,
  meals:[
    {
      title: 'Lunch',
      date: '2016-06-25',
      description: 'delicious',
      calories: 500
    },
    {
      title: 'Dinner',
      date: '2016-06-25',
      description: 'yummy',
      calories: 2000
    },
    {
      title: 'Breakfast',
      date: '2016-06-24',
      description: 'yuk!',
      calories: 3000
    }
  ],

caloriesEatenOn: function(date){
  let dateCalories = 0;
  for(let i = 0; i < this.meals.length; i++){
    if(this.meals[i].date === date){
      dateCalories += this.meals[i].calories;
    }
  }
  return dateCalories;
},

avgDailyCalories: function(){

  // Total calories
  let totalCalories = 0;
  for(let i = 0; i < this.meals.length; i++){
    totalCalories += this.meals[i].calories;
  }

  // Total days
  let dayCount = 0;
  let uniqueDays = [];
  for(let j = 0; j < this.meals.length; j++){
    if(uniqueDays.indexOf(this.meals[j].date) === -1){
      uniqueDays.push(this.meals[j].date);
    }
  }

  //console.log('uniqueDays: ', uniqueDays);
  dayCount = uniqueDays.length;

  // Average calories per day
  let avgCalories = Math.floor(totalCalories/dayCount);

  return avgCalories;
},

onTrack: function(){
    let avgCaloriesPerDay = this.avgDailyCalories();
    let goal = this.calorieTarget;

    let onTrackBool;

    if(avgCaloriesPerDay <= goal){
      onTrackBool = true;
    }else{
      onTrackBool = false;
    }

  return onTrackBool;
}
};

// Checks
console.log('user: ', user);
console.log('caloriesEatenOn: ', user.caloriesEatenOn('2016-06-25'));
console.log('avgDailyCalories: ', user.avgDailyCalories());
console.log('onTrack: ', user.onTrack());
