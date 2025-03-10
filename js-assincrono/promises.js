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
      resolve(videos);
      console.log(videos);
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

loginUser("orlando@teste.com", "123456")
  .then((user) => {
    getUserVideos(user.email).then((videos) => {
      console.log(videos);
      getVideoDetails(videos[0]).then((video) => console.log(video));
    });
  })
  .catch((error) => {
    console.log(error);
  });

loginUser("orlando@teste.com", "123456")
  .then((user) => getUserVideos(user.email))
  .then((videos) => getVideoDetails(videos[0]))
  .catch((error) => {
    console.log(error);
  });

loginUser("orlando@teste.com", "123456")
  .then((user) => {
    return getUserVideos(user.email);
  })
  .then((videos) => {
    return getVideoDetails(videos[0]);
  })
  .catch((error) => {
    console.log(error);
  });
