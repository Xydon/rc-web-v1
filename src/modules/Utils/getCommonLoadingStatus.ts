export default function getCommonLoadingStatus(...asyncStates : AsyncState[]) {
  return asyncStates.filter(v => v.status === 'initialized').length !== 0;
}