const data = {
  banners: {
    mainBanner: {
      main: true,
      title: "Mom...",
      pic: require("../images/weloveyou/thefam.jpg")
    },
    lifegiver: {
      main: false,
      text: "Today is a very special day...",
      pic: require("../images/crumbscomic.jpg")
    },
    love: {
      main: false,
      text: "You bring joy to everyone around you.",
      pic: require("../images/fullfamily.jpg")
    },
    end: {
      main: true,
      title: "Happy Mother's Day!",
      pic: require("../images/weloveyou/irene2.jpg")
    }
  },
  carousels: {
    selfies: {
      text: "You've been such a bright light in my life...",
      reversed: false,
      images: [
        require("../images/selfies/cuteselfie001.jpg"),
        require("../images/selfies/cuteselfie004.jpg"),
        require("../images/selfies/peppers.jpg"),
        require("../images/selfies/cuteselfie005.jpg"),
        require("../images/selfies/dorkyselfie01.jpg"),
        require("../images/selfies/cuteselfie003.jpg")
      ]
    },
    loved: {
      text: "As well as the lives of so many others...",
      reversed: true,
      images: [
        require("../images/weloveyou/jessicaandthekids02.jpg"),
        require("../images/weloveyou/meandchris03.jpg"),
        require("../images/weloveyou/colorrun2.jpg"),
        require("../images/weloveyou/theagirls.jpg"),
        require("../images/weloveyou/beckyonthebeach.jpg"),
        require("../images/weloveyou/julie1.jpg"),
        require("../images/weloveyou/family1.jpg"),
        require("../images/weloveyou/miaandelijah01.jpg"),
        require("../images/weloveyou/beachfam.jpg"),
        require("../images/weloveyou/girlsatthebeach.jpg")
      ]
    },
    baking: {
      text: "Whether it's with your delicious baking...",
      reversed: false,
      images: [
        require("../images/baking/cakeballs.jpg"),
        require("../images/baking/ladybugcupcakes.jpg"),
        require("../images/baking/rockstarcupcakes.jpg"),
        require("../images/baking/zombiefingers.jpg"),
        require("../images/baking/rockyroad.jpg")
      ]
    },
    spirit: {
      text: "Or your loving spirit...",
      reversed: true,
      images: [
        require("../images/weloveyou/miliandtalia04.jpg"),
        require("../images/weloveyou/gunshow.jpg"),
        require("../images/weloveyou/becky3.jpg"),
        require("../images/weloveyou/tracie01.jpg"),
        require("../images/hellacute1.jpg")
      ]
    }
  }
};

export default data;
