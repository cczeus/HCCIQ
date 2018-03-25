
export function test(userName, password) {

  return (dispatch) => {
    console.log("OI");
    let request=new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
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

// Log in
export function getNotes(doctorID) {

  return (dispatch) => {
    let request=new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
      request.open('GET', '/getRequests/' + doctorID, true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.send()
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          // console.log(request.responseText)
           if(request.responseText === 'error') {
            reject("Failed to retrieve data");
          }
           else {
              
              resolve(JSON.parse(request.responseText));
           }   
        }
      };
    })
    .then(json => {
      dispatch(getNotesSuccess(json))
    })
  }
}

export function getNotesSuccess(data) {
  console.log(data);
  return {
    type: "FETCHING DOCTOR SUCCESS",
    data,
  }
}


export function createNote(note) {

  return (dispatch) => {
    let request=new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
      request.open('POST', '/note', true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.send(JSON.stringify({
        note: note.note,
        img: note.imgURL,
        doctor: note.doctor,
        patient: note.patient
      }))
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          // console.log(request.responseText)
           if(request.responseText === 'error') {
            reject("Failed to retrieve data");
          }
           else {
              resolve(request.responseText);
           }   
        }
      };
    })
  }
}
