    const APPLICATION_KEY = "9d75b1dfb86d99d40ad5bcd29aeb657c75cc6a684bc4c97bc8d6211c8d9749a2";
    const CLIENT_KEY = "e9398f6e4547ffc68929754814c2a438676cd0bd4f089af90b91a4390434f6b0";
    const ncmb = new NCMB(APPLICATION_KEY,CLIENT_KEY);
    const DBName = "GameScore";
    let GameScore = ncmb.DataStore(DBName);
//scoreを降順にしたDBから１つ持ってくればいいから普通の変数でいい


     function fetch(){      // データの読み込み
       let scorearray;
      GameScore
           .order("score")
           .fetchAll()
           .then(function(results){
            scorearray=[];
            for(let i=0;i<results.length;i++)
              scorearray.push(results[i].score);
            console.log("scorearray",scorearray,score.textContent,
            scorearray[0],parseInt(score.textContent)==scorearray[0]);
            if(parseInt(score.textContent)==scorearray[0])
                alert("High score! :"+score.textContent);
           })
           .catch(function(err){
            console.log("ERR",err);
           });
    }

    function save(){  // データの保存
        console.log("save("+score.textContent+")");
        let test = new GameScore();
        let key = "score";
        let value = parseInt(score.textContent);
        test.set(key,value);
        test.save()
          .then(function(){
            console.log("save ok");
            fetch()
          })
          .catch(function(err){
            console.log("NG\n",err);
          });
        }
