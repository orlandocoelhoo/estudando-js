const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      reject(new Error("error in login!"));
    }
    console.log("user logged!");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const videos = ["video1", "video2", "video3"];
      console.log(videos);
      resolve(videos);
    }, 2000);
  });
};

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(video);
      resolve({ title: "Title video" });
    }, 2500);
  });
};

const displayUser = async () => {
  try {
    const user = await loginUser("orlando@teste.com", "123456");
    const videos = await getUserVideos(user.email);
    const videosDetails = await getVideoDetails(videos[0]);
    console.log(videosDetails);
  } catch (error) {
    console.log(error);
  }
};

displayUser();
