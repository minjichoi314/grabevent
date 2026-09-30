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

  const BALL_COLORS = ['lime','yellow','pink','blue','cream','violet'];
  const BALL_POSITIONS = [
    [3,56],[14,36],[25,58],[36,31],[47,55],[58,32],[69,55],[80,38],[88,57],
    [8,76],[20,71],[32,78],[44,69],[56,78],[68,70],[80,76],[16,52],[51,41],[73,47],[39,83]
  ];

  const els = {
    claw: document.querySelector('#claw'),
    ballPit: document.querySelector('#ballPit'),
    joystick: document.querySelector('#joystick'),
    stick: document.querySelector('#stick'),
    stickShaft: document.querySelector('#stickShaft'),
    leftButton: document.querySelector('#leftButton'),
    rightButton: document.querySelector('#rightButton'),
    upButton: document.querySelector('#upButton'),
    downButton: document.querySelector('#downButton'),
    grabButton: document.querySelector('#grabButton'),
    resultLayer: document.querySelector('#resultLayer'),
    resultBall: document.querySelector('#resultBall'),
    quoteText: document.querySelector('#quoteText'),
    continueButton: document.querySelector('#continueButton')
  };

  let x=50, y=18, dragging=false, busy=false, activeBalls=[], lastQuoteIndex=-1;
  const joy={dx:0,dy:0,max:34};
  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));

  function renderClaw(){
    els.claw.style.left=`${x}%`;
    els.claw.style.top=`${y}%`;
  }

  function createBalls(){
    els.ballPit.innerHTML='';
    activeBalls=BALL_POSITIONS.map((pos,index)=>{
      const ball=document.createElement('div');
      const color=BALL_COLORS[index%BALL_COLORS.length];
      ball.className='ball';
      ball.dataset.color=color;
      ball.style.left=`${pos[0]}%`;
      ball.style.top=`${pos[1]}%`;
      els.ballPit.appendChild(ball);
      return {id:index,x:pos[0]+5.75,y:pos[1]+5.75,color,element:ball};
    });
  }

  function move(dx,dy){
    if(busy) return;
    x=clamp(x+dx,10,90);
    y=clamp(y+dy,8,46);
    renderClaw();
  }

  function pressVisual(button,on){button?.classList.toggle('pressed',on)}
  function bindHold(button,dx,dy){
    let timer=null;
    const start=e=>{e.preventDefault(); if(busy)return; pressVisual(button,true); move(dx,dy); timer=setInterval(()=>move(dx,dy),90);};
    const stop=()=>{pressVisual(button,false); clearInterval(timer); timer=null;};
    button.addEventListener('pointerdown',start);
    button.addEventListener('pointerup',stop);
    button.addEventListener('pointercancel',stop);
    button.addEventListener('pointerleave',stop);
  }
  bindHold(els.leftButton,-2.8,0);
  bindHold(els.rightButton,2.8,0);
  bindHold(els.upButton,0,-2.3);
  bindHold(els.downButton,0,2.3);

  function setJoystick(e){
    const r=els.joystick.getBoundingClientRect();
    const cx=r.left+Math.min(115,r.width*.28);
    const cy=r.top+84;
    let dx=e.clientX-cx, dy=e.clientY-cy;
    const d=Math.hypot(dx,dy);
    if(d>joy.max){dx=dx/d*joy.max;dy=dy/d*joy.max}
    joy.dx=dx;joy.dy=dy;
    els.stick.style.transform=`translate(${dx}px,${dy}px)`;
    els.stickShaft.style.transform=`rotate(${dx*.25}deg)`;
    x=clamp(50+(dx/joy.max)*40,10,90);
    y=clamp(24+(dy/joy.max)*18,8,46);
    renderClaw();
  }
  function resetJoystick(){joy.dx=0;joy.dy=0;els.stick.style.transform='translate(0,0)';els.stickShaft.style.transform='rotate(0deg)';}
  els.joystick.addEventListener('pointerdown',e=>{if(busy)return;dragging=true;els.joystick.setPointerCapture(e.pointerId);setJoystick(e)});
  els.joystick.addEventListener('pointermove',e=>{if(dragging&&!busy)setJoystick(e)});
  const endJoy=e=>{if(!dragging)return;dragging=false;try{els.joystick.releasePointerCapture(e.pointerId)}catch{}resetJoystick()};
  els.joystick.addEventListener('pointerup',endJoy);
  els.joystick.addEventListener('pointercancel',endJoy);

  function nearestBall(){
    if(!activeBalls.length)return null;
    const targetX=x;
    const targetY=clamp(((y-8)/38)*72+20,20,92);
    let best=null,bestD=Infinity;
    for(const b of activeBalls){
      const d=Math.hypot(b.x-targetX,(b.y-targetY)*.65);
      if(d<bestD){bestD=d;best=b}
    }
    return bestD<=15?best:null;
  }

  function quoteIndex(){
    let i;do{i=Math.floor(Math.random()*QUOTES.length)}while(i===lastQuoteIndex&&QUOTES.length>1);lastQuoteIndex=i;return i;
  }
  function showQuote(color){
    const i=quoteIndex();els.quoteText.textContent=QUOTES[i];
    const palette={lime:'#a9e64c',yellow:'#f3cf3f',pink:'#e25abc',blue:'#24a4ee',cream:'#ead9b1',violet:'#9c63d9'};
    els.resultBall.style.background=`radial-gradient(circle at 35% 25%,#fff8,${palette[color]||'#f3cf3f'} 55%,#6664)`;
    els.resultLayer.hidden=false;
    requestAnimationFrame(()=>els.continueButton.focus());
  }

  async function grab(){
    if(busy||!els.resultLayer.hidden)return;
    busy=true;pressVisual(els.grabButton,true);els.claw.classList.add('grabbing');
    const travel=clamp((58-y)*3.6,60,155);
    const anim=els.claw.animate([
      {transform:'translate(-50%,-18px)'},
      {transform:`translate(-50%,${travel}px)`,offset:.5},
      {transform:`translate(-50%,${travel}px)`,offset:.68},
      {transform:'translate(-50%,-18px)'}
    ],{duration:1200,easing:'cubic-bezier(.45,0,.25,1)'});
    await anim.finished.catch(()=>{});
    const caught=nearestBall();
    if(caught){caught.element.classList.add('caught');activeBalls=activeBalls.filter(b=>b!==caught);setTimeout(()=>showQuote(caught.color),220)}
    els.claw.classList.remove('grabbing');pressVisual(els.grabButton,false);busy=false;
  }
  els.grabButton.addEventListener('click',grab);
  els.continueButton.addEventListener('click',()=>{els.resultLayer.hidden=true});

  document.addEventListener('keydown',e=>{
    if(!els.resultLayer.hidden){if(['Escape','Enter',' '].includes(e.key)){e.preventDefault();els.continueButton.click()}return}
    const k=e.key.toLowerCase();
    if(['arrowleft','arrowright','arrowup','arrowdown',' '].includes(k))e.preventDefault();
    if(k==='arrowleft')move(-3,0);if(k==='arrowright')move(3,0);if(k==='arrowup')move(0,-2.5);if(k==='arrowdown')move(0,2.5);if(k===' ')grab();
  },{passive:false});

  els.resultLayer.hidden=true;
  createBalls();
  renderClaw();
})();
