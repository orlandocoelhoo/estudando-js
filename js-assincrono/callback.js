const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError(new Error("error in login"));
    }
    console.log("user logged");
    onSuccess({ email });
  }, 1500);
};

const getUserVideos = (email, callBack) => {
  setTimeout(() => {
    callBack(["video1", "video2", "video3"]);
  }, 2000);
};

const getVideoDetails = (video, callBack) => {
  setTimeout(() => {
    callBack("Title video");
  }, 2500);
};

const userA = loginUser(
  "orlando@teste.com",
  "123456",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log({ videos });
      getVideoDetails(videos[0], (video) => {
        console.log({ video });
      });
    });
  },
  (error) => {
    console.log({ error });
  }
);
