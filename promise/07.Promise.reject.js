const admin = {name: 'admin', title: 'super user', status: 'deleted'}
const adminPromise = Promise.reject(admin)

adminPromise.catch(e => {
  console.log(e)
})

