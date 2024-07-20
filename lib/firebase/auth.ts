import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { Dispatch, SetStateAction } from "react";

const LoginGoogle = (setIsUser: Dispatch<SetStateAction<boolean>>) => {
  signInWithPopup(auth, provider)
    .then((result: any) => {
      // 소셜 로그인이 성공하면 result 인자에 유저 정보를 넣어준다.
      // 로그인 성공 후 로직 작성
      const { uid, displayName, accessToken } = result.user;

      sessionStorage.setItem("accessToken", accessToken);
      // 엑세스 토큰 추가 -> 로그인 상태 유효성 검사

      sessionStorage.setItem("uid", uid);
      // 각 유저의 아이템을 저장하기 위해 고유 id가 필요

      sessionStorage.setItem("displayName", displayName);
      // 헤더에 이름 기입

      alert("로그인 되었습니다.");
      setIsUser(true);
    })
    .catch((error) => {
      //로그인 실패했을때 로직 작성
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error, credential);
    });
};

const LogOutGoogle = (setIsUser: Dispatch<SetStateAction<boolean>>) => {
  auth.signOut();
  // 파이어베이스에서 제공하는 소셜 로그인의 로그아웃 함수

  sessionStorage.setItem("accessToken", "");
  sessionStorage.setItem("uid", "");
  sessionStorage.setItem("displayName", "");
  // 로그아웃 후에 세션 스토리지의 각 아이템 비우기

  alert("로그아웃 되었습니다. 이용해주셔서 감사합니다.");
  // 작업 완료 후 로그아웃 알리기

  setIsUser(false);
  // UI 업데이트 용 setState
};

export { LoginGoogle, LogOutGoogle };
