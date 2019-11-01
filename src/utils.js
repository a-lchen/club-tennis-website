const getTwoUserIntersects = (user1, user2) => {
  for (k in user1.available) {
    console.log(k)
    console.log(user1.available[k])
    // intersection = user1.available[k].map((h) => )
    // some kind of zip function? look up js later
  }
}

const getIntersects = (user, data) => {
  console.log(user.available)
  intersections = data.map(d => getTwoUserIntersects(user, d))
  return intersections.filter((i) => {
    return (sum(i.intersect) > 0)
  });
}

module.exports = { getIntersects }
