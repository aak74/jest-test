function getHAngle(hours, mins) {
  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours === 0 || hours === 12) {
    return 0;
  }
  // return 30 * hours;
  return 30 * hours + (mins / 60 * 30);
}  

function getMAngle(mins) {
  if (mins === 0 || mins === 60) {
    return 0;
  }
  return 6 * mins;
}  

function getAngle(hours, mins) {
  return Math.abs(getHAngle(hours, mins) - getMAngle(mins));
}


export default getAngle;