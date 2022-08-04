import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ElMessage } from "element-plus";
import router from "../router";
export const useStateStore = defineStore("userState", {
  state: () => ({
    userNickname: "",
    userRealname: "",
    isLoggedIn: false,
    userToken: "",
    userId: "",
    userEmail: "",
    userAvatar: "",
  }),
  getters: {
    getUserName: (state) => state.userName,
  },
  actions: {
    loginAction(payload) {
      const {
        userNickname,
        userRealname,
        userToken,
        userId,
        userEmail,
        userAvatar,
      } = payload;
      localStorage.token = userToken;
      localStorage.setItem("token", JSON.stringify(userToken));
      localStorage.setItem("userId", JSON.stringify(userId));
      localStorage.setItem("userAvatar", userAvatar);
      this.userNickname = userNickname;
      this.userRealname = userRealname;
      this.userId = userId;
      this.userEmail = userEmail;
      this.userAvatar = userAvatar;
      this.isLoggedIn = true;
    },
    logoutAction() {
      const token = useStorage("token");
      const userId = useStorage("userId");
      const userAvatar = useStorage("userAvatar");
      token.value = null;
      userId.value = null;
      userAvatar.value = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
      this.userNickname = "";
      this.userRealname = "";
      this.userId = "";
      this.userEmail = "";
      this.userAvatar = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
      this.isLoggedIn = false;
      router.push("/user/login");
      ElMessage.success("退出登录！");
    },
  },
});
