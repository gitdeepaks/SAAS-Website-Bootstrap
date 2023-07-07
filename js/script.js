const checkReplace = document.querySelector(".replace-me");
if (checkReplace !== null) {
  const replace = new ReplaceMe(document.querySelector(".replace-me"), {
    animation: "animated fadeIn",
    speed: 2000,
    separator: ",",
    loopCount: "infinite",
    autoRun: true,
  });
}
