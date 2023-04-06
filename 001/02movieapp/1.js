
function getAPI () {
    //로딩
    let parent = document.querySelector("#app") // 보통 id로 들어감 , parent 안에다가 정보 담기
    parent.innerHTML= "로딩중입니다" // 페치전에는 로딩중입니다로 뜨게끔

    //API 취득
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating") //fetch라는 기본함수 만들기 / 비동기로 처리
        .then((res) => res.json()) //json으로 받아온 값을 json으로 변환
        .then((json) => {
            let movies = json.data.movies //json으로 받아온 값을 console.log로 출력 , json안에서 data-movies 정보
            console.log(movies)

            // 로딩 끝
            parent.innerHTML = "" // 윗과정들을 걸치고 parent 자리를 빈칸으로

            //DOM조작 : DOM은 JS가 (HTML문서조작을 위해) HTML문서를 객체화해서 document에 담은것
            for (let i = 0; i < movies.length; i++) { // 1개씩 집어넣기
                //타이틀
                let movietitle = document.createElement("a") // movietitle 추가하는 명령어 '태그명'
                movietitle.setAttribute('class','movietitle') // 주고싶은 선택자(class) class명이 movietitle / a태그안에 클래스타입을 넣음
                movietitle.innerHTML = movies[i].title // movies에 i번째 있는 title로 바꾸는 작업
                movietitle.href = movies[i].url // url이동
                parent.appendChild(movietitle) // ppendChild로 parent에 movietitle을 갖다 붙히기

                //이미지
                let movieimage = document.createElement("img") // movieimage 추가하는 명령어 '태그명'
                movieimage.src = movies[i].medium_cover_image // F12안에서 medium_cover_image 이미지 불러오기
                parent.appendChild(movieimage) 
            }                   //
           
        })
    
}

function init() {           // 초기실행
    getAPI()
}



// 작업 돌아가는 순서
// 1. fetch : 페칭을 하여 불러오기
// 2. response 받아서 json타입이 아니니 json타입으로 변환시키기
// 3. json타입으로 받게된 데이터를 console.log로 출력
// 4. movies라는 담을수 있는 상자를 만들어 집어넣는다
// 5. DOM조작부분은 주석보면서 순서대로 진행
// 6. 이미지 추가
// 7. 누르면 링크이동이 되고 a태그로 변경할건데 a는 인라인이라 블록으로 변경하기 위해 CSS 등장
// 8. setAttribute를 이용하여 a태그안에 class 넣기




// 화살표함수
// function click(){
//     return 'click됨'
// } 
//
// const click = () => {
//     return 'click됨'
// }
//
// const click = () => "click됨"