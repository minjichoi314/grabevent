(() => {
  'use strict';

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
    '할 수 있다는 믿음은 행동을 시작하게 하는 가장 작은 불씨다.',
    '오늘 버틴 것만으로도 당신은 충분히 대단하다.',
    '천천히 가도 괜찮다. 당신의 속도가 곧 정답이다.',
    '조금 흔들려도 방향을 잃은 것은 아니다.',
    '작은 성취를 쌓다 보면 어느새 큰 자신감이 된다.',
    '지금 필요한 것은 완벽함보다 한 번의 실행이다.',
    '포기하지 않은 하루는 분명 의미가 있다.',
    '당신의 내일은 오늘의 선택으로 조금씩 만들어진다.',
    '두려움 뒤에는 아직 만나지 못한 가능성이 있다.',
    '잘하려고 애쓴 시간은 절대 사라지지 않는다.',
    '한 걸음의 차이가 결국 전혀 다른 풍경을 만든다.',
    '쉬어 가는 것도 앞으로 가는 과정의 일부다.',
    '오늘의 당신은 어제보다 하나 더 경험한 사람이다.',
    '모든 시작은 서툴러도 충분히 가치 있다.',
    '결과보다 중요한 것은 다시 시도할 수 있는 마음이다.',
    '당신의 속도보다 중요한 것은 당신의 방향이다.',
    '한 번의 용기가 오래된 망설임을 끝낼 수 있다.',
    '지금의 노력은 보이지 않아도 분명 쌓이고 있다.',
    '끝까지 가는 힘은 거창함보다 꾸준함에서 나온다.',
    '당신에게 필요한 답은 종종 한 걸음 뒤에 있다.',
    '작은 기회도 붙잡는 순간 큰 전환점이 될 수 있다.',
    '오늘을 잘 살아낸 것만으로도 충분히 의미 있다.',
    '성장은 늘 눈에 보이는 속도로 일어나지 않는다.',
    '한계를 정하기 전에 한 번 더 시도해 보자.',
    '마음이 지쳤다면 속도를 줄여도 괜찮다.',
    '당신의 노력은 결과가 늦게 와도 가치가 줄지 않는다.',
    '실수는 멈춤의 이유가 아니라 배우는 재료다.',
    '작은 결심 하나가 삶의 흐름을 바꾸기도 한다.',
    '잘하고 싶은 마음이 있다면 이미 절반은 시작한 것이다.',
    '당신은 생각보다 더 많은 것을 이미 해냈다.',
    '오늘의 실패가 내일의 가능성을 지우지는 않는다.',
    '필요한 순간에 다시 일어나는 힘이 진짜 힘이다.',
    '지금 서 있는 자리도 누군가의 꿈이었던 곳일 수 있다.',
    '불확실해도 움직이면 길은 조금씩 선명해진다.',
    '조금 부족해 보여도 지금의 최선을 믿어도 된다.',
    '당신의 한 걸음은 생각보다 멀리 이어진다.',
    '기회는 준비된 마음뿐 아니라 움직이는 마음에도 찾아온다.',
    '오늘의 용기는 내일의 자신감을 만든다.',
    '평범한 하루를 성실히 보내는 것도 큰 능력이다.',
    '당신의 노력에는 당신만의 시간이 필요하다.',
    '비교 대신 어제의 나보다 한 걸음 나아가면 된다.',
    '답이 보이지 않을 때는 할 수 있는 한 가지부터 시작하자.',
    '조금 늦어도 당신의 타이밍은 틀리지 않았다.',
    '넘어진 횟수보다 다시 일어난 횟수가 당신을 만든다.',
    '작은 변화는 반복될 때 인생의 방향이 된다.',
    '오늘 당신이 선택한 용기가 미래의 기억이 된다.',
    '할 수 있는 일을 꾸준히 하면 할 수 있는 일이 늘어난다.',
    '당신은 이미 여기까지 오는 방법을 스스로 찾아냈다.',
    '불안함 속에서도 움직인다면 그것이 바로 용기다.',
    '모든 좋은 결과에는 보이지 않는 준비의 시간이 있다.',
    '오늘은 완벽한 날이 아니라 시작하기 좋은 날이다.',
    '한 번의 시도는 가능성을 현실 쪽으로 움직인다.',
    '잘 안 되는 날에도 당신의 가치는 달라지지 않는다.',
    '작은 성공을 기뻐하는 사람이 더 오래 앞으로 간다.',
    '마음속의 가능성은 행동으로 옮길 때 모습을 드러낸다.',
    '당신이 견딘 시간도 결국 당신의 힘이 된다.',
    '오늘의 한 번이 내일의 습관을 만든다.',
    '무엇이든 처음에는 낯설고 서툴 수 있다.',
    '자신을 믿는 연습도 매일 조금씩 할 수 있다.',
    '힘든 길을 걷고 있다는 것은 멈춰 있다는 뜻이 아니다.',
    '가능성은 확신이 생긴 뒤가 아니라 움직일 때 커진다.',
    '한 번 더 웃고 한 번 더 해보는 하루면 충분하다.',
    '지금의 작은 선택이 미래의 큰 안도를 만들 수 있다.',
    '당신의 오늘은 아직 끝나지 않았다.',
    '성공은 멀리 있는 한 번보다 가까운 반복에서 온다.',
    '용기는 큰 소리가 아니라 조용히 다시 해보는 마음이다.',
    '조급함 대신 꾸준함을 선택해도 충분히 빠르다.',
    '오늘의 경험은 내일의 판단을 더 단단하게 만든다.',
    '잘되지 않아도 계속 배우고 있다면 멈춘 것이 아니다.',
    '당신에게는 새로운 선택을 할 다음 순간이 계속 온다.',
    '스스로에게 건네는 응원 한마디가 의외로 오래 간다.',
    '어려운 순간을 통과한 만큼 당신의 기준은 더 넓어진다.',
    '지금 할 수 있는 최선은 생각보다 강력하다.',
    '한 걸음 물러나는 것도 더 멀리 가기 위한 선택일 수 있다.',
    '당신의 가능성은 아직 다 사용되지 않았다.',
    '시작하기에 늦었다는 생각보다 지금이 가장 빠른 순간이다.',
    '조금의 자신감은 행동하면서 더 커진다.',
    '오늘의 선택이 마음에 들지 않아도 내일 다시 고를 수 있다.',
    '힘들 때는 멀리보다 다음 한 걸음만 보면 된다.',
    '당신의 꾸준함은 언젠가 실력이라는 이름으로 보인다.',
    '완벽한 준비보다 작은 출발이 더 많은 것을 바꾼다.',
    '원하는 방향으로 몸을 돌린 순간 변화는 이미 시작됐다.',
    '오늘의 나를 다그치기보다 응원하는 쪽을 선택해도 된다.',
    '멈췄다가 다시 움직여도 여전히 전진이다.',
    '당신이 만든 작은 기회가 다음 기회를 불러온다.',
    '최선을 다한 하루는 결과와 상관없이 가치가 있다.',
    '새로운 장면은 늘 익숙한 자리에서 한 걸음 나갈 때 시작된다.',
    '오늘도 당신에게는 다시 시작할 수 있는 힘이 있다.'
  ];

  const els = {
    cabinet: document.querySelector('#cabinet'),
    claw: document.querySelector('#claw'),
    railY: document.querySelector('#railY'),
    ballPit: document.querySelector('#ballPit'),
    joystick: document.querySelector('#joystick'),
    stick: document.querySelector('#stick'),
    grabButton: document.querySelector('#grabButton'),
    resetButton: document.querySelector('#resetButton'),
    actionStatus: document.querySelector('#actionStatus'),
    score: document.querySelector('#score'),
    ballCount: document.querySelector('#ballCount'),
    positionReadout: document.querySelector('#positionReadout'),
    resultLayer: document.querySelector('#resultLayer'),
    resultBall: document.querySelector('#resultBall'),
    quoteText: document.querySelector('#quoteText'),
    quoteCounter: document.querySelector('#quoteCounter'),
    continueButton: document.querySelector('#continueButton')
  };

  const BALL_COLORS = ['lime', 'yellow', 'pink', 'blue', 'cream', 'violet'];
  const BALL_POSITIONS = [
    [5,54],[16,34],[27,55],[39,29],[51,50],[64,31],[77,54],[87,37],
    [9,76],[23,72],[36,78],[49,68],[62,76],[76,70],[86,75],[32,43],[57,42],[71,49]
  ];

  let x = 50;
  let y = 24;
  let dragging = false;
  let busy = false;
  let score = 0;
  let activeBalls = [];
  let lastQuoteIndex = -1;
  let quotesShown = 0;
  let keyboardTimer = null;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function renderClaw() {
    els.claw.style.left = `${x}%`;
    els.claw.style.top = `${y}%`;
    els.railY.style.left = `${x}%`;
    els.positionReadout.textContent = `X ${Math.round(x)} · Y ${Math.round(y)}`;
  }

  function renderScore() {
    els.score.textContent = String(score).padStart(3, '0');
    els.ballCount.textContent = String(activeBalls.length).padStart(2, '0');
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
      ball.style.transform = `rotate(${(index * 23) % 30 - 15}deg)`;
      els.ballPit.appendChild(ball);
      return { id: index, x: pos[0] + 5.75, y: pos[1] + 5.75, color, element: ball };
    });
    renderScore();
  }

  function moveBy(dx, dy) {
    if (busy) return;
    x = clamp(x + dx, 10, 90);
    y = clamp(y + dy, 17, 58);
    renderClaw();
  }

  function setJoystickFromPointer(event) {
    const rect = els.joystick.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = event.clientX - cx;
    let dy = event.clientY - cy;
    const maxRadius = rect.width * 0.29;
    const distance = Math.hypot(dx, dy);
    if (distance > maxRadius) {
      dx = (dx / distance) * maxRadius;
      dy = (dy / distance) * maxRadius;
    }
    els.stick.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;

    const nx = dx / maxRadius;
    const ny = dy / maxRadius;
    x = clamp(50 + nx * 40, 10, 90);
    y = clamp(36 + ny * 21, 17, 58);
    renderClaw();
    els.actionStatus.textContent = Math.abs(nx) < .12 && Math.abs(ny) < .12 ? 'CENTER' : 'MOVING';
  }

  function resetStick() {
    els.stick.style.transform = 'translate(-50%, -50%)';
    els.actionStatus.textContent = 'READY';
  }

  function nearestBall() {
    if (!activeBalls.length) return null;

    // Claw coordinates and ball-pit coordinates use different vertical ranges.
    // Convert claw position into an approximate ball-pit target position.
    const targetX = ((x - 5) / 90) * 100;
    const targetY = clamp(((y - 17) / 41) * 78 + 18, 18, 96);

    let best = null;
    let bestDistance = Infinity;
    for (const ball of activeBalls) {
      const dx = ball.x - targetX;
      const dy = ball.y - targetY;
      const distance = Math.hypot(dx, dy * 0.78);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = ball;
      }
    }
    return bestDistance <= 17 ? best : null;
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
    quotesShown += 1;
    els.quoteText.textContent = QUOTES[index];
    els.quoteCounter.textContent = `MESSAGE ${String(index + 1).padStart(3, '0')} / ${QUOTES.length}`;
    const palette = {
      lime: 'radial-gradient(circle at 35% 25%,#dcff9c,#a2e94f 49%,#5f942b)',
      yellow: 'radial-gradient(circle at 35% 25%,#fff493,#f1c833 49%,#a97d0c)',
      pink: 'radial-gradient(circle at 35% 25%,#ffb0e2,#e050b6 49%,#96236f)',
      blue: 'radial-gradient(circle at 35% 25%,#9de1ff,#32a8e9 49%,#16689d)',
      cream: 'radial-gradient(circle at 35% 25%,#fffbdc,#ead8a9 49%,#ab976d)',
      violet: 'radial-gradient(circle at 35% 25%,#dda9ff,#9659dc 49%,#5d2d8d)'
    };
    els.resultBall.style.background = palette[color] || palette.yellow;
    els.resultLayer.hidden = false;
    requestAnimationFrame(() => els.continueButton.focus());
  }

  async function grab() {
    if (busy || els.resultLayer.hidden === false) return;
    busy = true;
    els.grabButton.disabled = true;
    els.grabButton.classList.add('pressed');
    els.actionStatus.textContent = 'GRABBING';
    els.claw.classList.add('grabbing');

    const originalCable = els.claw.querySelector('.cable');
    const downDistance = clamp((63 - y) * 4.2, 55, 175);
    const animation = els.claw.animate([
      { transform: 'translate(-50%, -18px)' },
      { transform: `translate(-50%, ${downDistance}px)`, offset: .48 },
      { transform: `translate(-50%, ${downDistance}px)`, offset: .67 },
      { transform: 'translate(-50%, -18px)' }
    ], { duration: 1250, easing: 'cubic-bezier(.45,0,.25,1)' });

    if (originalCable) {
      originalCable.animate([
        { transform: 'scaleY(1)' },
        { transform: 'scaleY(2.4)', offset: .48 },
        { transform: 'scaleY(2.4)', offset: .67 },
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
      setTimeout(() => showQuote(caught.color), 280);
    } else {
      els.actionStatus.textContent = 'MISS · TRY AGAIN';
      if ('vibrate' in navigator) navigator.vibrate?.(35);
    }

    els.claw.classList.remove('grabbing');
    els.grabButton.classList.remove('pressed');
    els.grabButton.disabled = false;
    busy = false;
  }

  function resetGame() {
    busy = false;
    score = 0;
    x = 50;
    y = 24;
    lastQuoteIndex = -1;
    quotesShown = 0;
    els.resultLayer.hidden = true;
    els.actionStatus.textContent = 'READY';
    els.claw.classList.remove('grabbing');
    els.grabButton.classList.remove('pressed');
    els.grabButton.disabled = false;
    resetStick();
    renderClaw();
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
    const controlled = ['arrowleft','arrowright','arrowup','arrowdown','a','d','w','s',' '];
    if (!controlled.includes(key)) return;
    event.preventDefault();
    clearTimeout(keyboardTimer);
    if (key === 'arrowleft' || key === 'a') moveBy(-3.2, 0);
    if (key === 'arrowright' || key === 'd') moveBy(3.2, 0);
    if (key === 'arrowup' || key === 'w') moveBy(0, -2.6);
    if (key === 'arrowdown' || key === 's') moveBy(0, 2.6);
    if (key === ' ') grab();
    keyboardTimer = setTimeout(() => { els.actionStatus.textContent = 'READY'; }, 180);
  }, { passive: false });

  createBalls();
  renderClaw();
  if (QUOTES.length !== 100) {
    console.warn(`명언 개수: ${QUOTES.length}개 (100개가 필요합니다.)`);
  }
})();
