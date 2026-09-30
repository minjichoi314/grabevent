(() => {
  const QUOTES = [
    '오늘의 작은 시도가 내일의 큰 변화를 만든다.',
    '완벽하지 않아도 시작한 당신은 이미 앞으로 가고 있다.',
    '용기는 두렵지 않은 것이 아니라 두려워도 한 걸음 내딛는 것이다.',
    '지금까지 잘 버텨온 당신이라면 다음 한 걸음도 충분히 해낼 수 있다.',
    '느려도 괜찮다. 멈추지만 않으면 결국 도착한다.',
    '당신이 생각하는 것보다 당신은 훨씬 강하다.',
    '오늘의 노력이 언젠가 당신을 가장 빛나는 곳으로 데려간다.',
    '모든 좋은 변화는 아주 작은 선택 하나에서 시작된다.',
    '실패는 끝이 아니라 방향을 다시 잡는 순간이다.',
    '당신의 가능성은 오늘의 결과보다 훨씬 크다.',
    '한 번 더 해보는 사람이 결국 새로운 장면을 만든다.',
    '지금의 당신에게도 충분히 멋진 다음 페이지가 남아 있다.',
    '포기하지 않는 마음은 언젠가 분명히 길을 만든다.',
    '조금 부족해도 꾸준함은 언제나 강한 힘이 된다.',
    '오늘 웃을 수 있다면 이미 좋은 하루가 시작된 것이다.',
    '작은 성취를 소중히 여기는 사람이 큰 성취도 만든다.',
    '당신의 속도로 가도 괜찮다. 중요한 건 멈추지 않는 것이다.',
    '결과가 늦게 와도 노력은 사라지지 않는다.',
    '지금의 고민도 언젠가 당신을 단단하게 만든다.',
    '한 걸음의 용기가 새로운 가능성을 연다.',
    '자신을 믿는 순간 세상도 조금 다르게 보이기 시작한다.',
    '오늘 할 수 있는 최선을 다하면 그것으로 충분하다.',
    '당신의 하루는 생각보다 더 큰 의미를 품고 있다.',
    '꾸준함은 눈에 보이지 않아도 가장 확실한 성장이다.',
    '지친 날에도 다시 일어나는 마음이 진짜 힘이다.',
    '당신의 진심은 결국 가장 멀리 닿는다.',
    '시작이 작아도 끝은 얼마든지 커질 수 있다.',
    '마음먹은 방향으로 한 번 더 나아가 보자.',
    '오늘의 선택이 미래의 당신을 만든다.',
    '부드러운 마음도 충분히 강할 수 있다.',
    '천천히 가는 날도 분명 앞으로 가는 날이다.',
    '당신의 노력은 아직 보이지 않아도 쌓이고 있다.',
    '지금 이 순간도 새로운 기회의 시작이다.',
    '잘하고 싶다는 마음만으로도 이미 충분히 소중하다.',
    '어제보다 아주 조금만 나아가도 그것은 성장이다.',
    '당신의 오늘을 응원하는 사람이 분명히 있다.',
    '실수는 배움의 다른 이름일 뿐이다.',
    '오늘의 용기가 내일의 자신감을 만든다.',
    '가장 느린 걸음도 멈춘 걸음보다 훨씬 멀리 간다.',
    '당신에게는 아직 열리지 않은 좋은 문이 많다.',
    '지금의 한 번이 생각보다 큰 변화를 만든다.',
    '스스로를 격려할 줄 아는 사람이 끝까지 간다.',
    '기회는 준비된 사람에게만 오는 것이 아니라 움직이는 사람에게도 온다.',
    '조용한 노력은 가장 오래 빛난다.',
    '당신의 하루는 충분히 아름답게 다시 시작될 수 있다.',
    '작은 용기 하나가 큰 물결을 만든다.',
    '오늘의 미소가 내일의 희망이 된다.',
    '흔들려도 괜찮다. 넘어지지 않으면 된다.',
    '지금의 나를 믿어주는 것부터 시작해 보자.',
    '당신의 성장은 비교가 아니라 지속에서 온다.',
    '마음이 향하는 곳에 한 걸음 더 가까이 가보자.',
    '좋은 날은 기다리는 것이 아니라 만들어가는 것이다.',
    '당신은 이미 충분히 애쓰고 있고 충분히 잘하고 있다.',
    '지금 이 순간의 노력은 반드시 어디론가 이어진다.',
    '할 수 있을까보다 해보자는 마음이 더 중요하다.',
    '오늘의 경험은 내일의 자산이 된다.',
    '당신의 가능성은 아직 다 펼쳐지지 않았다.',
    '작은 성공을 반복하면 큰 자신감이 된다.',
    '어려움 속에서도 길을 찾는 사람이 결국 빛난다.',
    '당신만의 리듬으로 끝까지 가면 된다.',
    '잘 풀리지 않는 날도 결국 지나간다.',
    '오늘의 한 번이 삶의 방향을 바꿀 수도 있다.',
    '성장은 늘 조용히 진행된다.',
    '용기를 낸 자신을 먼저 칭찬해 주자.',
    '지금의 선택이 생각보다 멋진 결과를 만든다.',
    '포기하지 않는 마음은 늘 새로운 길을 부른다.',
    '시도했다는 사실만으로도 이미 의미가 있다.',
    '당신의 내일은 오늘보다 더 넓을 수 있다.',
    '좋은 변화는 언제나 작고 사소한 시작에서 온다.',
    '한 번의 도전이 한 번의 후회를 줄인다.',
    '오늘의 땀은 내일의 미소가 된다.',
    '할 수 있다는 믿음은 생각보다 큰 힘을 준다.',
    '지금 버티고 있는 당신은 충분히 대단하다.',
    '조급하지 않아도 된다. 중요한 것은 방향이다.',
    '실패를 겪은 사람만이 더 단단하게 일어선다.',
    '마음속 작은 불씨를 꺼뜨리지 말자.',
    '당신은 늘 다시 시작할 수 있는 사람이다.',
    '아직 끝나지 않았다는 사실이 곧 희망이다.',
    '오늘의 당신도 누군가에게는 큰 힘이 된다.',
    '새로운 하루는 새로운 기회를 함께 데려온다.',
    '멈추지 않는 한 가능성은 계속 살아 있다.',
    '당신의 선한 에너지는 반드시 돌아온다.',
    '지금의 작은 집중이 큰 차이를 만든다.',
    '한 번 더 웃고 한 번 더 해보는 하루면 충분하다.',
    '작은 변화는 반복될 때 인생의 방향이 된다.',
    '긴 호흡으로 가는 사람이 결국 멀리 간다.',
    '조용한 노력도 결국 분명한 흔적을 남긴다.',
    '할 수 있는 일을 꾸준히 하면 할 수 있는 일이 늘어난다.',
    '당신의 시간은 당신만의 속도로 흐르고 있다.',
    '지금 필요한 것은 완벽함보다 지속성이다.',
    '어려운 순간을 통과한 만큼 당신의 기준은 더 넓어진다.',
    '오늘의 용기는 내일의 기회를 부른다.',
    '결과보다 중요한 것은 다시 시도하는 마음이다.',
    '지금의 당신도 충분히 괜찮고 충분히 가능하다.',
    '매일의 작은 성실함이 결국 큰 자신감을 만든다.',
    '한 번 더 해보는 마음이 미래를 바꾼다.',
    '오늘도 당신에게는 다시 시작할 수 있는 힘이 있다.',
    '도전은 결과와 상관없이 당신을 한 단계 키운다.',
    '생각보다 많은 일이 당신의 편이 되어가고 있다.',
    '가벼운 마음으로 시작해도 멋진 결과가 나올 수 있다.'
  ];

  const BALL_COLORS = ['lime', 'yellow', 'pink', 'blue', 'cream', 'violet'];
  const BALL_POSITIONS = [
    [3,58],[14,39],[25,58],[36,34],[47,56],[58,34],[69,56],[80,40],[89,58],
    [8,78],[20,73],[32,79],[44,70],[56,79],[68,71],[80,77],[16,55],[51,43],[73,49],[39,84]
  ];

  const els = {
    claw: document.querySelector('#claw'),
    ballPit: document.querySelector('#ballPit'),
    joystick: document.querySelector('#joystick'),
    stick: document.querySelector('#stick'),
    grabButton: document.querySelector('#grabButton'),
    resetButton: document.querySelector('#resetButton'),
    centerButton: document.querySelector('#centerButton'),
    actionStatus: document.querySelector('#actionStatus'),
    score: document.querySelector('#score'),
    scoreMirror: document.querySelector('#scoreMirror'),
    ballCount: document.querySelector('#ballCount'),
    ballCountMirror: document.querySelector('#ballCountMirror'),
    resultLayer: document.querySelector('#resultLayer'),
    resultBall: document.querySelector('#resultBall'),
    quoteText: document.querySelector('#quoteText'),
    quoteCounter: document.querySelector('#quoteCounter'),
    continueButton: document.querySelector('#continueButton')
  };

  let x = 50;
  let dragging = false;
  let busy = false;
  let score = 0;
  let activeBalls = [];
  let lastQuoteIndex = -1;
  let keyboardTimer = null;
  const joy = {dx: 0, maxRadius: 28};

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function renderClaw() {
    els.claw.style.left = `${x}%`;
  }

  function renderScore() {
    const scoreText = String(score).padStart(3, '0');
    const ballText = String(activeBalls.length).padStart(2, '0');
    els.score.textContent = scoreText;
    els.scoreMirror.textContent = scoreText;
    els.ballCount.textContent = ballText;
    els.ballCountMirror.textContent = ballText;
  }

  function createBalls() {
    els.ballPit.innerHTML = '';
    activeBalls = BALL_POSITIONS.map((pos, index) => {
      const ball = document.createElement('div');
      const color = BALL_COLORS[index % BALL_COLORS.length];
      ball.className = 'ball';
      ball.dataset.color = color;
      ball.style.left = `${pos[0]}%`;
      ball.style.top = `${pos[1]}%`;
      ball.style.transform = `rotate(${(index * 21) % 30 - 15}deg)`;
      els.ballPit.appendChild(ball);
      return { id: index, x: pos[0] + 5.75, y: pos[1] + 5.75, color, element: ball };
    });
    renderScore();
  }

  function moveBy(dx) {
    if (busy) return;
    x = clamp(x + dx, 10, 90);
    renderClaw();
  }

  function updateJoystickVisual(dx) {
    joy.dx = dx;
    els.stick.style.transform = `translateX(${dx}px)`;
    const shaft = document.querySelector('.stick-shaft');
    if (shaft) shaft.style.transform = `rotate(${dx * 0.28}deg)`;
  }

  function setJoystickFromPointer(event) {
    const rect = els.joystick.getBoundingClientRect();
    const baseX = rect.left + Math.min(96, rect.width * 0.26);
    let dx = event.clientX - baseX;
    dx = clamp(dx, -joy.maxRadius, joy.maxRadius);
    updateJoystickVisual(dx);
    const nx = dx / joy.maxRadius;
    x = clamp(50 + nx * 40, 10, 90);
    renderClaw();
    els.actionStatus.textContent = Math.abs(nx) < .12 ? 'READY' : 'MOVING';
  }

  function resetStick() {
    updateJoystickVisual(0);
    els.actionStatus.textContent = 'READY';
  }

  function centerClaw() {
    if (busy) return;
    x = 50;
    renderClaw();
    resetStick();
  }

  function nearestBall() {
    if (!activeBalls.length) return null;
    const targetX = x;
    let best = null;
    let bestDistance = Infinity;
    for (const ball of activeBalls) {
      const dx = Math.abs(ball.x - targetX);
      const weighted = dx + Math.max(0, 50 - ball.y) * 0.02;
      if (weighted < bestDistance) {
        bestDistance = weighted;
        best = ball;
      }
    }
    return bestDistance <= 7.6 ? best : null;
  }

  function pickQuoteIndex() {
    if (QUOTES.length === 1) return 0;
    let index;
    do {
      index = Math.floor(Math.random() * QUOTES.length);
    } while (index === lastQuoteIndex);
    lastQuoteIndex = index;
    return index;
  }

  function showQuote(color) {
    const index = pickQuoteIndex();
    els.quoteText.textContent = QUOTES[index];
    els.quoteCounter.textContent = `MESSAGE ${String(index + 1).padStart(3, '0')} / ${QUOTES.length}`;
    const palette = {
      lime: 'radial-gradient(circle at 35% 25%,#eeffc7,#c7ee7e 49%,#90bf51)',
      yellow: 'radial-gradient(circle at 35% 25%,#fff9c7,#f2da74 49%,#caa53c)',
      pink: 'radial-gradient(circle at 35% 25%,#ffd2eb,#ee9bcb 49%,#bd6396)',
      blue: 'radial-gradient(circle at 35% 25%,#cde9ff,#87c8f2 49%,#5396c8)',
      cream: 'radial-gradient(circle at 35% 25%,#fffdf0,#f0e4c7 49%,#c3ab84)',
      violet: 'radial-gradient(circle at 35% 25%,#e8d5ff,#c1a0ea 49%,#8f6abc)'
    };
    els.resultBall.style.background = palette[color] || palette.yellow;
    els.resultLayer.hidden = false;
    requestAnimationFrame(() => els.continueButton.focus());
  }

  async function grab() {
    if (busy || els.resultLayer.hidden === false) return;
    busy = true;
    els.grabButton.classList.add('pressed');
    els.actionStatus.textContent = 'GRABBING';
    els.claw.classList.add('grabbing');

    const originalCable = els.claw.querySelector('.cable');
    const animation = els.claw.animate([
      { transform: 'translate(-50%, -18px)' },
      { transform: 'translate(-50%, 128px)', offset: .48 },
      { transform: 'translate(-50%, 128px)', offset: .67 },
      { transform: 'translate(-50%, -18px)' }
    ], { duration: 1250, easing: 'cubic-bezier(.45,0,.25,1)' });

    if (originalCable) {
      originalCable.animate([
        { transform: 'scaleY(1)' },
        { transform: 'scaleY(2.45)', offset: .48 },
        { transform: 'scaleY(2.45)', offset: .67 },
        { transform: 'scaleY(1)' }
      ], { duration: 1250, easing: 'cubic-bezier(.45,0,.25,1)' });
    }

    await animation.finished.catch(() => {});

    const caught = nearestBall();
    if (caught) {
      caught.element.classList.add('caught');
      activeBalls = activeBalls.filter(ball => ball !== caught);
      score += 100;
      renderScore();
      els.actionStatus.textContent = 'SUCCESS';
      if ('vibrate' in navigator) navigator.vibrate?.([35, 25, 55]);
      setTimeout(() => showQuote(caught.color), 260);
    } else {
      els.actionStatus.textContent = 'MISS';
      if ('vibrate' in navigator) navigator.vibrate?.(35);
    }

    els.claw.classList.remove('grabbing');
    els.grabButton.classList.remove('pressed');
    busy = false;
  }

  function resetGame() {
    busy = false;
    score = 0;
    x = 50;
    lastQuoteIndex = -1;
    els.resultLayer.hidden = true;
    els.claw.classList.remove('grabbing');
    renderClaw();
    resetStick();
    createBalls();
  }

  els.joystick.addEventListener('pointerdown', event => {
    if (busy) return;
    dragging = true;
    els.joystick.setPointerCapture(event.pointerId);
    setJoystickFromPointer(event);
  });

  els.joystick.addEventListener('pointermove', event => {
    if (!dragging || busy) return;
    setJoystickFromPointer(event);
  });

  function endPointer(event) {
    if (!dragging) return;
    dragging = false;
    try { els.joystick.releasePointerCapture(event.pointerId); } catch (_) {}
    resetStick();
  }

  els.joystick.addEventListener('pointerup', endPointer);
  els.joystick.addEventListener('pointercancel', endPointer);
  els.grabButton.addEventListener('click', grab);
  els.resetButton.addEventListener('click', resetGame);
  els.centerButton.addEventListener('click', centerClaw);
  els.continueButton.addEventListener('click', () => {
    els.resultLayer.hidden = true;
    els.actionStatus.textContent = activeBalls.length ? 'READY' : 'ALL CLEAR';
    els.grabButton.focus();
  });

  document.addEventListener('keydown', event => {
    if (els.resultLayer.hidden === false) {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        els.continueButton.click();
      }
      return;
    }

    const key = event.key.toLowerCase();
    const controlled = ['arrowleft','arrowright','a','d',' ','c','r'];
    if (!controlled.includes(key)) return;
    event.preventDefault();
    clearTimeout(keyboardTimer);
    if (key === 'arrowleft' || key === 'a') moveBy(-3.2);
    if (key === 'arrowright' || key === 'd') moveBy(3.2);
    if (key === ' ') grab();
    if (key === 'c') centerClaw();
    if (key === 'r') resetGame();
    els.actionStatus.textContent = 'MOVING';
    keyboardTimer = setTimeout(() => { els.actionStatus.textContent = 'READY'; }, 180);
  }, { passive: false });

  createBalls();
  renderClaw();
  if (QUOTES.length !== 100) {
    console.warn(`명언 개수: ${QUOTES.length}개 (100개가 필요합니다.)`);
  }
})();
