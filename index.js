const button = document.querySelector('button');

function getTime() {
  const currentTime = new Date();
  return currentTime;
}
function handleClick() {
  const newTime = getTime();
  console.log(newTime);
}
button.addEventListener('click', handleClick);
