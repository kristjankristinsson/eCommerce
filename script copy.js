const streamers = [
  { name: "Ninja", platform: "Twitch", votes: 0 },
  { name: "Shroud", platform: "Twitch", votes: 0 },
  { name: "Pokimane", platform: "Twitch", votes: 0 },
  { name: "TimTheTatman", platform: "Twitch", votes: 0 },
  { name: "xQcOW", platform: "Twitch", votes: 0 },
  { name: "Myth", platform: "Twitch", votes: 0 },
  { name: "Tfue", platform: "Twitch", votes: 0 },
  { name: "DrLupo", platform: "Twitch", votes: 0 },
  { name: "summit1g", platform: "Twitch", votes: 0 },
  { name: "Asmongold", platform: "Twitch", votes: 0 },
  { name: "LIRIK", platform: "Twitch", votes: 0 },
  { name: "DisguisedToast", platform: "Twitch", votes: 0 },
  { name: "Amouranth", platform: "Twitch", votes: 0 },
  { name: "Greekgodx", platform: "Twitch", votes: 0 },
  { name: "SypherPK", platform: "Twitch", votes: 0 },
  { name: "Valkyrae", platform: "Twitch", votes: 0 },
  { name: "Mizkif", platform: "Twitch", votes: 0 },
  { name: "Alinity", platform: "Twitch", votes: 0 },
  { name: "TheGrefg", platform: "Twitch", votes: 0 },
  { name: "NICKMERCS", platform: "Twitch", votes: 0 },
  { name: "CohhCarnage", platform: "Twitch", votes: 0 },
  { name: "RanbooLive", platform: "Twitch", votes: 0 },
  { name: "Fedmyster", platform: "Twitch", votes: 0 },
  { name: "Trainwreckstv", platform: "Twitch", votes: 0 },
  { name: "Yassuo", platform: "Twitch", votes: 0 },
  { name: "Quackity", platform: "Twitch", votes: 0 },
  { name: "Forsen", platform: "Twitch", votes: 0 },
  { name: "EsfandTV", platform: "Twitch", votes: 0 },
  { name: "Sodapoppin", platform: "Twitch", votes: 0 },
  { name: "MissKyliee", platform: "Twitch", votes: 0 },
  { name: "AdmiralBulldog", platform: "Twitch", votes: 0 },
  { name: "Ludwig", platform: "Twitch", votes: 0 },
  { name: "xChocoBars", platform: "Twitch", votes: 0 },
  { name: "JERICHO", platform: "Twitch", votes: 0 },
  { name: "ItsSlikeR", platform: "Twitch", votes: 0 },
  { name: "Loserfruit", platform: "Twitch", votes: 0 },
  { name: "Zerkaa", platform: "Twitch", votes: 0 },
  { name: "Kitboga", platform: "Twitch", votes: 0 },
  { name: "NickEh30", platform: "Twitch", votes: 0 },
  { name: "KittyPlays", platform: "Twitch", votes: 0 },
  { name: "Anomaly", platform: "Twitch", votes: 0 },
  { name: "LilyPichu", platform: "Twitch", votes: 0 },
  { name: "Imaqtpie", platform: "Twitch", votes: 0 },
  { name: "JennaJulien", platform: "Twitch", votes: 0 },
  { name: "GiantWaffle", platform: "Twitch", votes: 0 },
  { name: "Amaz", platform: "Twitch", votes: 0 },
  { name: "Papaplatte", platform: "Twitch", votes: 0 },
  { name: "TSM_Bjergsen", platform: "Twitch", votes: 0 },
  { name: "Cloakzy", platform: "Twitch", votes: 0 },
  { name: "Fedmyster", platform: "Twitch", votes: 0 },
  { name: "Cizzorz", platform: "Twitch", votes: 0 },
  { name: "AdinRoss", platform: "Twitch", votes: 0 },
  { name: "Speed", platform: "Twitch", votes: 0 },
  { name: "Vitaly", platform: "Twitch", votes: 0 },
];

function displayStreamers(filteredStreamers) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  filteredStreamers.forEach((streamer) => {
    let div = document.createElement("div");
    let voteButton = document.createElement("button");
    voteButton.textContent = "Vote";
    voteButton.addEventListener("click", () => {
      voteForStreamer(streamer.name);
    });
    div.innerHTML = `${streamer.name} - ${streamer.platform} - Votes: ${streamer.votes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    div.appendChild(voteButton);
    container.appendChild(div);
  });
}

function filterStreamerName(name) {
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(name.toLowerCase())
  );
  displayStreamers(filteredStreamers);
}

function voteForStreamer(name) {
  const userId = getUserId();
  if (!userId) {
    alert("Please log in to vote.");
    return;
  }
  const userVotes = JSON.parse(localStorage.getItem(userId)) || {};
  if (userVotes[name]) {
    alert("You have already voted for this streamer.");
    return;
  }
  const streamerIndex = streamers.findIndex(
    (streamer) => streamer.name === name
  );
  if (streamerIndex !== -1) {
    streamers[streamerIndex].votes++;
    localStorage.setItem(
      userId,
      JSON.stringify({ ...userVotes, [name]: true })
    );
    displayStreamers(streamers);
  }
}

function getUserId() {
  return "user123";
}

displayStreamers(streamers);

const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", function () {
  filterStreamerName(this.value);
});
