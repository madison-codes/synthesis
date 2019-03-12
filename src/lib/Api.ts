const URL = "http://localhost:3001";

export function toVoice(text: string) {
  return fetch(`${URL}/voice`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      text
    })
  });
}

// export function getJWT(userID: any) {
//   return fetch(`http://localhost:3001/jwt?userID=${userID}`)
//     .then(response => response.text())
//     .catch(e => console.log(e));
// }

// export function getPII(key, item) {
//   fetch(`${URL}/pii`, {
//     mode: "cors"
//   })
//     .then(res => res.json())
//     .then(res => {
//       res.text();
//   context.commit("pii", res);
//     });
// }
