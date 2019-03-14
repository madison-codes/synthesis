import * as Api from "../lib/Api";

export function saveVoice(name: string, text: string) {
  return (dispatch: any) => {
    const id = (Math.floor(Math.random() * (1000 - 0 + 1)) + 0).toString();
    Api.saveVoice({ id, name, text })
      .then(() => {
        Api.getRecord(id).then(res => {
          dispatch({
            type: "TO_VOICE",
            payload: { id, name, mp3: res.mp3.data }
          });
          return res;
        });
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };
}

export function getRecord(id: string, success: any) {
  return (dispatch: any) => {
    Api.getRecord(id)
      .then(res => {
        if (res.status === 404) {
          return;
        }
        success();
        dispatch({
          type: "GET_RECORD",
          payload: {
            id,
            name,
            mp3: res
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function getRecords() {
  return (dispatch: any) => {
    Api.getRecords()
      .then(res => {
        console.log("in response");
        console.log(res);
        dispatch({
          type: "GET_ALL_RECORDS",
          payload: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
