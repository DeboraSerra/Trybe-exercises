const db = {};

// 1
db.movies.find({
  category: {
    $all: ['action', 'adventure']
  }
})

// 2
db.movies.find({
  $and: [
    { category: {
      $all: ['action', 'sci-fi']
      }
    },
    { imdbRating: {
      $gt: 7,
      }
    }
  ]
});

// 3
db.movies.find({
  ratings: {
    $elemMatch: {
      $gt: 103
    }
  }
}, {
  title: 1,
  ratings: 1,
  _id: 0,
})

// 4
db.movies.find({
  ratings: {
    $elemMatch: {
      $gt: 100,
      $lt: 105,
    }
  }
}, {
  title: 1,
  ratings: 1,
  _id: 0,
})

// 5
db.movies.find({
  ratings: {
    $elemMatch: {
      $gt: 64,
      $lt: 105,
      $mod: [9, 0]
    }
  }
}, {
  title: 1,
  ratings: 1,
  _id: 0,
})

// 6
db.movies.find({
  category: 'adventure',
  ratings: {
    $elemMatch: {
      $gt: 103,
    }
  }
}, {
  _id: 0,
  title: 1,
  ratings: 1,
  category: 1
})

// 7
db.movies.find({
  category: { $size: 2 },
}, {
  _id: 0,
  title: 1,
})

// 8
db.movies.find({
  ratings: { $size: 4 },
}, {
  _id: 0,
  title: 1,
})

// 9
db.movies.find({
  budget: {
    $mod: [5, 0]
  },
  category: { $size: 2 }
})

// 10
db.movies.find({
  $or: [
    { category: 'sci-fi' },
    { ratings: {
        $elemMatch: { $gt: 199 }
      }
    }
  ]
}, {
  _id: 0,
  title: 1,
  ratings: 1,
  category: 1
})

// 11
db.movies.find({
  $and: [
    { ratings: { $size: 4 } },
    { $or: [
        { category: 'adventure' },
        { category: 'family' }
      ]
    },
    { imdbRating: { $gte: 7 } }
  ]
})

// 12
db.movies.find({
  description: { $regex: /^The/ }
})

// 13
db.movies.find({
  description: { $regex: /humanity$/ }
})
