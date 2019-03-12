import * as Api from "../lib/Api";
// import showSnackbar from "../lib/Snackbar";
// import * as IronWeb from "@ironcorelabs/ironweb";

export function toVoice(text: string) {
  //   const UTF8 = (IronWeb as any).codec.utf8.toBytes(message);
  //   const ID = (Math.floor(Math.random() * (1000 - 0 + 1)) + 0).toString();

  return (dispatch: any) => {
    // (IronWeb as any).document.encrypt(UTF8).then((data: any) => {
    Api.toVoice(text)
      .then(() => {
        dispatch({
          type: "TO_VOICE",
          payload: {
            text: text
          }
        });
        //   showSnackbar("PII saved", "success");
      })
      .catch((e: Error) => {
        console.log(e.message);
        //   showSnackbar(e.message, "error");
      });
    // });
  };
}

// export function initialize(password: string) {
//   const newUserID = (Math.floor(Math.random() * (1000 - 0 + 1)) + 0).toString();
//   return (dispatch: any) => {
//     IronWeb.initialize(
//       () => Api.getJWT(newUserID),
//       () => Promise.resolve(password)
//     ).then(() => {
//       dispatch({
//         type: "INIT_ENCRYPT",
//         payload: newUserID
//       });
//       //   showSnackbar("User initialized", "success");
//     });
//   };
// }

// export function getPII() {
//   return {
//     type: "GET_PII",
//     operation: Api.getPII
//   };
// }
