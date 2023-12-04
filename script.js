const btn = document.getElementById('button');

if (btn) {
  btn.addEventListener('click', () => {
    confirm('Хочу у вас работать! Очень способный ученик) Готовы дать мне шанс?')
      ? alert('Спасибо! Буду рада стать частью вашей команды')
      : alert('Не отчаиваюсь! Все еще впереди!');
  });
}
