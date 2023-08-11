export function convertStoMMSS(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const extraSeconds = Math.round(seconds % 60);
  const finalMinutes = minutes < 10 ? "0" + minutes : minutes;
  const finalSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
  return finalMinutes + " : " + finalSeconds;
}
