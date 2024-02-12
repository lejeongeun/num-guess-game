// 랜덤 번호 지정
// 유저가 번호 입력 후 go라는 버튼 입력
// 만약 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤 번호가 < 유저 번호라면 Down!!!
// 랜덤 번호가 > 유저 번호라면  Up
// reset버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1과 100 범위 밖의 숫자를 입력하면 알려줌 -> 기회를 깍지 않음 
// 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회 숫자 유지
// Math.random()이란 0~1까지의 숫자를 랜덤으로 보여주는 함수이므로 *100을 할 경우 0~100까지의 숫자를 출력 
// getElementById : html의 태그를 Id로 가져오는 것


let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5;
let history = [];

// 함수를 변수처럼 넘겨줌으로 play()가 아닌 Play사용
playButton.addEventListener("click", play); 
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){ 
    userInput.value = ""; //입력창을 다시 클릭할 경우 빈 입력창을 생성
})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1; // 
    console.log("정답", computerNum);
}
function play(){
    let userValue = userInput.value;
    // 유효성 검사 (1~100)
    if(userValue<1 || userValue > 100){
        resultArea.textContent = "1~100사이 숫자를 입력하시오";
        return;
    }
    // 이미 입력한 값 유효성 검사
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다시 입력하시오";
        return;
    }
    // 남은 기회 출력
    chances --;
    chanceArea.textContent = `남은 기회:${chances}번`; //``(백틱)사용, "", '' 사용불가
    console.log("chances", chances);
    
    //숫자에 대한 비교값 출력 
    if(userValue < computerNum){
        //화면에서 resultArea를 text로 띄워주기
        resultArea.textContent = "UP!!";
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!";
    }else{
        resultArea.textContent = "내가 잃어버린 숫자는 바로 너!!!";
        gameOver = true;
    }
    // 입력한 값 히스토리 배열에 저장
    history.push(userValue);
    console.log(history);
    
    if(chances < 1){
        gameOver = true;
    }

    //버튼 disable
    if(gameOver == true){
        playButton.disabled = true;

    }
}
function reset(){
    // user input창이 깨끗하게 정리됨
    userInput.value = ""
    // uew 번호 생성
    pickRandomNum();
    // reset 버튼을 누른 후 정답! text 재설정 
    resultArea.textContent = " 잃어버린 숫자를 잡아라!";
    // reset 초기화 
    chances = 5;
    chanceArea.textContent = `남은 기회 ${chances}번`;
    history = [];
    gameOver = false;
    playButton.disabled = false;

}

pickRandomNum();