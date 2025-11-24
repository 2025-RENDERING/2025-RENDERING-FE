const pageTitles: Record<string, string> = {
  "/": "메인",
  "/works": "작품 목록",
  "/works/": "작품 설명",
  "/booth": "부스 배치도",
  "/guestbook": "방명록",
  "/partners": "협찬/제휴 소개",
  "/exhibition": "전시 소개",
};

export const getPageTitle = (pathname: string) => {
  if (pathname === "/") {
    return pageTitles["/"];
  }

  const match = Object.keys(pageTitles)
    .filter((key) => key !== "/")
    .sort((a, b) => b.length - a.length)
    .find((key) => pathname.startsWith(key));

  return match ? pageTitles[match] : "2025 Rendering";
};

export default pageTitles;
