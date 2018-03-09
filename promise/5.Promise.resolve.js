// Promise.resolve used to convert an object into a Promise instance
const admin = {name: 'admin'}
const adminPromise = Promise.resolve(admin)

adminPromise.then(data => {
  console.log(data)
}).catch(e => console.log(e))
