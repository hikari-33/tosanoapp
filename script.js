const musicData = {
  heartful: {
    message: "心がじんわり温まる、愛しい時間のために。",
    songs: [
      { title: "Family Song", artist: "星野源", url: "https://www.youtube.com/results?search_query=星野源+Family+Song" },
      { title: "優しさに包まれたなら", artist: "荒井由実", url: "https://www.youtube.com/results?search_query=荒井由実+優しさに包まれたなら" },
      { title: "大好物", artist: "スピッツ", url: "https://www.youtube.com/results?search_query=スピッツ+大好物" },
      { title: "シアワセ", artist: "aiko", url: "https://www.youtube.com/results?search_query=aiko+シアワセ" }
    ]
  },
  lonely: {
    message: "静かな夜、ひとりの時間にそっと寄り添います。",
    songs: [
      { title: "月明かり", artist: "カネコアヤノ", url: "https://www.youtube.com/results?search_query=カネコアヤノ+月明かり" },
      { title: "グッドバイ", artist: "サカナクション", url: "https://www.youtube.com/results?search_query=サカナクション+グッドバイ" },
      { title: "いちについて", artist: "あいみょん", url: "https://www.youtube.com/results?search_query=あいみょん+いちについて" },
      { title: "いきどまり", artist: "星野源", url: "https://www.youtube.com/results?search_query=星野源+いきどまり" }
    ]
  },
  groove: {
    message: "リズムに乗って、日常の解像度を上げよう。",
    songs: [
      { title: "AIZO", artist: "King Gnu", url: "https://www.youtube.com/results?search_query=King+Gnu+AIZO" },
      { title: "東京フラッシュ", artist: "Vaundy", url: "https://www.youtube.com/results?search_query=Vaundy+東京フラッシュ" },
      { title: "新宝島", artist: "サカナクション", url: "https://www.youtube.com/results?search_query=サカナクション+新宝島" },
      { title: "GOLDEN BUDDY feat. くるま", artist: "礼賛", url: "https://www.youtube.com/results?search_query=礼賛+GOLDEN+BUDDY" }
    ]
  },
  motivation: {
    message: "自分を突き動かす、熱いエネルギーをその手に。",
    songs: [
      { title: "飛行艇", artist: "King Gnu", url: "https://www.youtube.com/results?search_query=King+Gnu+飛行艇" },
      { title: "燃えよ", artist: "藤井風", url: "https://www.youtube.com/results?search_query=藤井風+燃えよ" },
      { title: "裸の勇者", artist: "Vaundy", url: "https://www.youtube.com/results?search_query=Vaundy+裸の勇者" },
      { title: "ジャンヌ・ダルクによろしく", artist: "サザンオールスターズ", url: "https://www.youtube.com/results?search_query=サザンオールスターズ+ジャンヌ+ダルクによろしく" }
    ]
  }
};



function changeMood(mood) {

  document.body.className = mood;
  
  
  document.getElementById('mood-text').innerText = mood.toUpperCase();
  document.getElementById('mood-message').innerText = musicData[mood].message;
  

  const list = document.getElementById('playlist');
  list.innerHTML = ""; 

  musicData[mood].songs.forEach((song, index) => {
    const li = document.createElement('li');
    
    li.style.animationDelay = `${index * 0.1}s`;
    
    li.innerHTML = `
      <a href="${song.url}" target="_blank" rel="noopener noreferrer">
        <div>
          <div class="song-title"><strong>${song.title}</strong></div>
          <div class="artist-name">${song.artist}</div>
        </div>
        <span class="play-icon">▶︎</span>
      </a>
    `;
    list.appendChild(li);
  });
}


window.changeMood = changeMood;
