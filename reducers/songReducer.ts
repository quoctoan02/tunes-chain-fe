import {
  SongContextState,
  SongReducerAction,
  SongReducerActionType,
} from "../types";

export const songReducer = (
  state: SongContextState,
  { type, payload }: SongReducerAction
): SongContextState => {
  switch (type) {
    case SongReducerActionType.SetDevice:
      return { ...state, ...payload };
    case SongReducerActionType.ToggleIsPlaying: {
      return { ...state, ...payload };
    }
    case SongReducerActionType.SetCurrentPlayingSong:
      return { ...state, ...payload };
    case SongReducerActionType.ChangeVolume:
      return { ...state, ...payload };
    default:
      return state;
  }
  return state;
};
