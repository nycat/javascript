// Convert admin object to a Promise object.
const admin = {name: 'admin'}
const adminPromise = Promise.resolve(admin)

adminPromise.then(data => {
  console.log(data)
}).catch(e => console.log(e))
