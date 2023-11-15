//Easier way to access this bigObject?

const bigObject = {
  level: 1,
  floors: {
    basement: {
      level: -1,
    },
    main: {
      level: 1,
      floors: {
        second: {
          level: 2,
        }
      }
    }
  },
}

// console.log(bigObject.floors.main.floors.second.level)
// console.log(bigObject.floors.main.level)

const main = bigObject.floors.main
console.log(main.floors.second.level)
console.log(main.level)