export const convertDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60)
  const seconds = (duration % 60).toFixed(0)
  return minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds
}
