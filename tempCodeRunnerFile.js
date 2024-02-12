< computerNum){
        //화면에서 resultArea를 text로 띄워주기
        resultArea.textContent = "UP!!";
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!";
    }else{
        resultArea.textContent = "정답!!!!";
        gameOver = true;
    }
    // 입력한 값 히스토리 배열에 저장
    history.push(userValue);
    console.log(history);
    
    if(chances < 1){