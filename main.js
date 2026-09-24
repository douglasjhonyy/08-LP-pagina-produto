// 1) Header muda de aparência ao rolar a página
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
 
  // 2) Accordion do FAQ
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
 
      // fecha os outros itens abertos
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      });
 
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
 
  // 3) Contador regressivo da oferta (24h a partir de agora)
  const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
  function updateCountdown() {
    const now = new Date().getTime();
    const diff = Math.max(0, endTime - now);
 
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
 
    document.getElementById('cd-h').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(minutes).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(seconds).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
 
  // 4) Menu mobile simples
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('mobile-open');
  });