# Lucky Grab — Tablet Crane Game

GitHub Pages에서 바로 실행되는 정적 웹앱입니다. 서버나 Firebase 없이 태블릿 한 대에서 게임 화면과 조이스틱을 함께 사용합니다.

## 파일

- `index.html` — 앱 화면
- `style.css` — 입체 크레인 머신/UI 스타일
- `app.js` — 조이스틱, 공 뽑기, 점수, 100개 명언 로직

## GitHub Pages 배포

1. 새 GitHub 저장소를 만듭니다.
2. 위 3개 파일과 README를 저장소 루트에 업로드합니다.
3. GitHub 저장소에서 **Settings → Pages**로 이동합니다.
4. **Deploy from a branch**를 선택합니다.
5. Branch를 `main`, 폴더를 `/ (root)`로 설정하고 저장합니다.
6. 생성된 Pages 주소를 태블릿에서 엽니다.

## 조작

- 태블릿: 조이스틱을 드래그하여 상/하/좌/우 이동
- `GRAB`: 집게 작동
- 성공 시 공이 사라지고 점수 +100, 100개 문구 중 하나 표시
- 데스크톱 테스트: 방향키 또는 WASD, Space로 GRAB

## 커스터마이징

`app.js`의 `QUOTES` 배열에서 문구를 바꿀 수 있습니다. 현재 정확히 100개가 들어 있습니다.
