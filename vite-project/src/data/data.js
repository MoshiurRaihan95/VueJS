const message = 'Welcome. Get ready to master Vue.js 3!'
const date = '30th june, 2023'
// Display current date with function
function getDate(){
  const date = new Date();
  return date.toDateString()
}

//Display current date with object

const data = {
    message: 'Welcome. Get ready to master Vue.js 3!',
    date: '30th june, 2023',
    task: [1,2,3,4,5,6,'No'],
    gateCurrentDate(){
      const currentdate = new Date();
      return currentdate.toDateString()
    }
}
const images = [
  {
      image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Water surrounded by trees and mountains',
      link: 'https://unsplash.com/photos/NRQV-hBF10M',
  },
  {
      image:'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Brown wooden dock between lavender flower field',
      link: 'https://unsplash.com/photos/K2s_YE031CA',
  },
  {
      image:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Brown house near body of water',
      link: 'https://unsplash.com/photos/zAjdgNXsMeg',
  },
]
const card = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title:'Water surrounded by trees and mountains',
    link:'https://unsplash.com/photos/NRQV-hBF10M'
  }
]
export { data, images, card };