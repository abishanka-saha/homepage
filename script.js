document.addEventListener('DOMContentLoaded', () => {
  const talks = [
    {
      title: \"Provable Security of ASCON Modes\",
      url: \"https://example.com/ascon-talk\"
    },
    {
      title: \"Mirror Theory and Lower Bounds\",
      url: \"https://example.com/mirror-theory\"
    },
    {
      title: \"Post-Quantum MPC Challenges\",
      url: \"https://example.com/pq-mpc-talk\"
    }
  ];

  const talkList = document.getElementById('talkList');
  talks.forEach(talk => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = talk.url;
    a.textContent = talk.title;
    a.target = \"_blank\";
    li.appendChild(a);
    talkList.appendChild(li);
  });
});
