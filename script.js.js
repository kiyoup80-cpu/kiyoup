// 페이지 로드 후 애니메이션 효과 추가
document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('.welcome-text');
  text.style.opacity = 0;
  setTimeout(() => {
    text.style.transition = 'opacity 1.5s';
    text.style.opacity = 1;
  }, 300);
});