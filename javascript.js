var bannerCurrent = 1;
var bannerTime = 3000;

function bannerRun() {
  if (bannerCurrent === 1) {
    document.querySelector("bannerimg1").style.right = "0px";
    document.querySelector("bannerimg1").style.zIndex = "5000";
    document.querySelector("bannerimg2").style.right = "-70%";
    document.querySelector("bannerimg2").style.zIndex = "6000";
    document.querySelector("bannerimg3").style.right = "70%";
    document.querySelector("bannerimg3").style.zIndex = "4000";
  }
  bannerCurrent = 2;
}
