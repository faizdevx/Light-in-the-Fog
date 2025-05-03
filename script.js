async function getRandomVerse() {
    const display = document.getElementById("verse-display");
    display.textContent = "Fetching something for your soul...";
  
    // Randomly choose a source
    const sources = ["bible", "quran", "gita"];
    const choice = sources[Math.floor(Math.random() * sources.length)];
  
    try {
      if (choice === "bible") {
        const response = await fetch("https://labs.bible.org/api/?passage=random&type=json");
        const data = await response.json();
        const verse = `${data[0].bookname} ${data[0].chapter}:${data[0].verse} – "${data[0].text}"`;
        display.textContent = verse;
      } else if (choice === "quran") {
        const randomAyah = Math.floor(Math.random() * 6236) + 1;
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomAyah}/en.asad`);
        const data = await response.json();
        const verse = `Quran ${data.data.surah.englishName} [${data.data.numberInSurah}]: "${data.data.text}"`;
        display.textContent = verse;
      } else if (choice === "gita") {
        const gitaVerses = [
          "You have the right to work, but never to the fruit of work. – Bhagavad Gita 2:47",
          "There is neither this world, nor the world beyond. Nor happiness for the one who doubts. – Bhagavad Gita 4:40",
          "Be steadfast in yoga, O Arjuna. Perform your duty and abandon all attachment to success or failure. – Bhagavad Gita 2:48"
        ];
        const verse = gitaVerses[Math.floor(Math.random() * gitaVerses.length)];
        display.textContent = verse;
      }
    } catch (error) {
      display.textContent = "Couldn't fetch verse. Try again soon.";
      console.error(error);
    }
  }
  
  // 🔇 Toggle background audio
function toggleAudio() {
    const audio = document.getElementById("peaceful-audio");
    const btn = document.getElementById("audio-btn");
    if (audio.muted) {
      audio.muted = false;
      btn.textContent = "🔊 Mute";
    } else {
      audio.muted = true;
      btn.textContent = "🔇 Unmute";
    }
  }
  