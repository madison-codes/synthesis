interface Payload {
  id: string;
  name: string;
  mp3?: Object;
}

interface GlobalState {
  id: string;
  name: string;
  mp3?: Object;
}

declare module "wavesurfer.js";
