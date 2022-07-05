import axios from "axios"
  
export async function postapi({endPoint, param, isLogin = false, token = null}) {
  return axios({
    method: 'POST',
    url: 'https://binh-test.herokuapp.com/' + endPoint,
    data: param,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': isLogin ? null : 'Bearer ' +  token, 
    },
  }).then(function (response) {
    const data = response.data
    console.log('response API: ', data)
    return data
  }).catch(function (error) {
    console.log('response API: ', error)
    return error
  })
}

export async function getapi({endPoint, token = null}) {
  return axios({
    method: 'GET',
    url: 'https://binh-test.herokuapp.com/' + endPoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  token, 
    },
  }).then(function (response) {
    const data = response.data
    console.log('response API: ', data)
    return data
  }).catch(function (error) {
    console.log('response API: ', error)
    return error
  })
}