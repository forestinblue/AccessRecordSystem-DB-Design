# Express 개념 공부

[Express 참고 사이트 1](https://junspapa-itdev.tistory.com/7?category=781922)

### Express 기본 폴더 구조
    bin 폴더
        - 프로그램의 실행과 관련된 파일이 있는 폴더입니다.
        - www 파일을 실행해서 서버가 실행됩니다.
    pulbic 폴더
        - JS, CSS, img 파일 등 리소스 파일이 있는 폴더
    routes 폴더
        - 라우터와 관련된 모듈이 있는 폴더
    views 폴더
        - ejs 파일과 같은 템플릿 파일이 있는 폴더
    app.js 파일
        - 애플리케이션에서 중심이 되는 파일
        - 서버 설정 / 미들웨어 정의 / 라우트 정의 등 여러가지를 설정하고, 서버 운영을 위한 로직을 작성합니다.
    package.json
        - 현재 애플리케이션과 관련된 정보와 모듈을 설치하는데 필요한 의존성이 작성된 파일

    
 ### Express 함수
 라우팅 매핑시 클라이언트 요청의 URL + 프로토콜 메소드 를 사용

    GET(조회): router.get()
    POST(저장): router.post()
    PUT(수정): router.put()
    DELETE(삭제): router.delete()
 

res 파라미터는 클라이언트로 응답을 하는 객체이다. 응답을 위한 함수는 여러개가 있다.

    res.send(): 문자열로 응답
    res.json(): 제이슨(Json) 객체로 응답
    res.render():  html 변환 템플릿을 렌더링(ejs)
    res.sendfile(): 파일 다운로드
