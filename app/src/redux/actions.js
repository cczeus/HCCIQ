
// Log in
export function test(userName, password) {

  return (dispatch) => {
    console.log("OI");
    let request=new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
      console.log("OI@")
      request.open('GET', '/api/hello', true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.send()
      request.onreadystatechange = () => {
         console.log("requst");
         console.log(request);
        if (request.readyState === 4) {
          console.log("EHER");
          console.log(request.responseText)
           if(request.responseText === 'error') {
            console.log("ERROR");
            reject("Username or Password not correct");
          }
           else                                 resolve(request.responseText);
        }
      };
      // console.log(request.responseText);
    })
  }
}