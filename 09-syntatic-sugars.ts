const numberInString = "1234567";

//const number = +numberInString

//const number = parseInt(numberInString)

const number = Number(numberInString);
const isNumberNotNull = Boolean(number);
const numberAsString = String(number);

//DESAFIO:
function getFirstFiveRatings(ratings) {
    return ratings.length >= 5 && ratings.slice(0, 5)
  }
  
  function sumFirstFiveRatings(ratings) {
    const ratingsBool = !!ratings
  
    if (ratingsBool) {
      const firstFiveRatings = getFirstFiveRatings(ratings)
  
      if (!firstFiveRatings) return { error: 'there must be at least 5 ratings' }
  
      let ratingsSum = 0;
  
      for (const rating of firstFiveRatings) {
        ratingsSum += +rating
      }
  
      return { ratingsSum, created_at: +new Date() }
    }
  
    return { error: 'ratings is required' }
  }
  
  const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
  sumFirstFiveRatings(appRatings)

//Remover o máximo de syntatic-sugars do código

function getFirstFiveRatings(ratings) {
    return ratings.length >= 5 ? ratings.slice(0, 5) : null;
}

function sumFirstFiveRatings(ratings) {
    if (!ratings) {
        return {error: 'ratings is required'};
    }

    const firstFiveRatings = getFirstFiveRatings(ratings);

    if (!firstFiveRatings) {
        return {error: 'there must be at latest 5 ratings'};
    }

    let ratingSum = 0;

    for (const rating of firstFiveRatings) {
        ratingSum += Number(rating)
    }

    return {ratingSum, created_at: +new Date()};
}

const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3'];
console.log(sumFirstFiveRatings(appRatings));