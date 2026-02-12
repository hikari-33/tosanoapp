// プレイリストのデータ
const moodData = {
  heartful: ["Song A - Artist", "Song B - Artist", "Song C - Artist"],
  lonely: ["Song D - Artist", "Song E - Artist"],
  groove: ["Song F - Artist", "Song G - Artist", "Song H - Artist"],
  motivation: ["Song I - Artist", "Song J - Artist"]
};

// 気分を変更するメインの関数
function changeMood(mood) {
  const moodText = document.getElementById('mood-text');
  const playlist = document.getElementById('playlist');
  
  // テキストの更新
  moodText.innerText = mood.toUpperCase();
  
  // リストのクリア
  playlist.innerHTML = "";
  
  // 該当する曲を追加
  moodData[mood].forEach(song => {
    const li = document.createElement('li');
    li.className = 'playlist-item';
    li.textContent = song;
    playlist.appendChild(li);
  });
}

// GitHub Pagesなどで読み込みエラーを防ぐため、
// 関数をwindowオブジェクトに明示的に紐付けます
window.changeMood = changeMood;
