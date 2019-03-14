const URL = "http://localhost:3001";

export function toVoice(text: string) {
  return fetch(`${URL}/to-voice`, {
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

export function save(payload: Payload) {
  const recording = { ...payload };
  return fetch(`${URL}/save`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      id: recording.id,
      name: recording.name,
      mp3: recording.mp3,
      wave: recording.mp3
    })
  });
}

export function saveVoice(payload: any) {
  return fetch(`${URL}/save-voice`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload)
  });
}

export function getRecord(id: string) {
  return fetch(`${URL}/recording/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "GET",
    mode: "cors"
  })
    .then(res => res.json())
    .then(res => {
      return res;
    });
}

export function getRecords() {
  return fetch(`${URL}/recordings`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "GET"
  });
}
