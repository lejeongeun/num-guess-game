// 랜덤 번호 지정
// 유저가 번호 입력 후 go라는 버튼 입력
// 만약 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤 번호가 < 유저 번호라면 Down!!!
// 랜덤 번호가 > 유저 번호라면  Up
// reset버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임이 끝난다 
//유저가 1과 100 범위 밖의 숫자를 입력하면 알려줌 -> 기회를 깍지 않음 
// 유저가 이미 입력한 숫자를 또 입력하면 알려즈고 기회 숫자 유지
// Math.random()이란 0~1까지의 숫자를 랜덤으로 보여주는 함수이므로 *100을 할 경우 0~100까지의 숫자를 출력 
// getElementById : html의 태그를 Id로 가져오는 것


let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play); // 함수를 변수처럼 넘겨줌으로 play()가 아닌 Play사용

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1; // 
    console.log("정답", computerNum);
}
function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        //화면에서 resultArea를 text로 띄워주기
        resultArea.textContent = "UP!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!"
    }else{
        resultArea.textContent = "정답!!!!"
    }
}
pickRandomNum();