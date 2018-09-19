let ary = [1, 2, 3, 4, 5, 6, 7, 8]

function filter (item) {
  if(item % 2) {
    return item
  }
}

function add (filter, ...rest) {
  let sum = 0
  rest.forEach(item => {
    if (filter(item)) {
      sum += item
    }
  })
  return sum
}

/* example 1:
  pass function as a paremeter
*/
let sum = add(filter, ...ary)
console.log(sum)


/* example 2:
  return a function from a function
*/
function fetchTopic (topicId) {
  return dispatch => {
    dispatch({
      type: 'AJAX_START',
      payload: true
    })
    axios
      .get(`topic?id=${topicId}`)
      .then(({data}) => {
        let topic = data.success ?  data.data : null
        if (topic) {
          dispatch({
            type: 'SET_TOPIC',
            payload: topic
          })
        }
      }).catch(e => {
        dispatch({
          type: 'AJAX_ERROR',
          payload: e
        })
      }).finally(function () {
        dispatch({
          type: 'AJAX_START',
          payload: false
        })
      })
  }
}