// This script powers the countdown, gallery modal, message wall, and quiz.
// Each section is written in plain JavaScript so it is easy to understand and edit.

document.addEventListener('DOMContentLoaded', () => {
  // Countdown target: Ghana's 70th Independence Anniversary on 6 March 2027.
  const celebrationDate = new Date('2027-03-06T00:00:00');

  const countdownEls = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };

  const countdownStatus = document.getElementById('countdown-status');

  function updateCountdown() {
    const now = new Date();
    const difference = celebrationDate.getTime() - now.getTime();

    if (difference <= 0) {
      countdownEls.days.textContent = '00';
      countdownEls.hours.textContent = '00';
      countdownEls.minutes.textContent = '00';
      countdownEls.seconds.textContent = '00';
      countdownStatus.textContent = 'Ghana at 70 is here — Happy Independence Day!';
      return;
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    countdownEls.days.textContent = String(days).padStart(2, '0');
    countdownEls.hours.textContent = String(hours).padStart(2, '0');
    countdownEls.minutes.textContent = String(minutes).padStart(2, '0');
    countdownEls.seconds.textContent = String(seconds).padStart(2, '0');

    countdownStatus.textContent = 'Ghana’s 70th Independence Anniversary is drawing near.';
  }

  // Run the countdown immediately and then update it once every second.
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Photo gallery modal for larger preview images.
  const modal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCaption = document.getElementById('modal-caption');
  const closeModalButton = document.querySelector('.modal-close');

  document.querySelectorAll('.gallery-item').forEach((button) => {
    button.addEventListener('click', () => {
      modalImage.src = button.dataset.image;
      modalImage.alt = button.dataset.title;
      modalTitle.textContent = button.dataset.title;
      modalCaption.textContent = button.dataset.caption;
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }

  closeModalButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true' || event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Celebration message form: validates input and adds the message to the page.
  const celebrationForm = document.getElementById('celebration-form');
  const guestNameInput = document.getElementById('guest-name');
  const guestMessageInput = document.getElementById('guest-message');
  const formFeedback = document.getElementById('form-feedback');
  const messageList = document.getElementById('message-list');

  celebrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = guestNameInput.value.trim();
    const message = guestMessageInput.value.trim();

    if (!name) {
      formFeedback.textContent = 'Please enter your name before sending your message.';
      formFeedback.className = 'form-feedback error';
      guestNameInput.focus();
      return;
    }

    if (!message) {
      formFeedback.textContent = 'Please write a short message to Ghana.';
      formFeedback.className = 'form-feedback error';
      guestMessageInput.focus();
      return;
    }

    const messageEntry = document.createElement('article');
    messageEntry.className = 'message-item';
    messageEntry.innerHTML = `
      <strong>${name}</strong>
      <p>${message}</p>
    `;

    const emptyState = messageList.querySelector('.empty-message');
    if (emptyState) {
      messageList.innerHTML = '';
    }

    messageList.prepend(messageEntry);
    formFeedback.textContent = 'Thank you for celebrating Ghana with us.';
    formFeedback.className = 'form-feedback success';
    celebrationForm.reset();
  });

  document.getElementById('reset-message-form').addEventListener('click', () => {
    celebrationForm.reset();
    formFeedback.textContent = '';
    formFeedback.className = 'form-feedback';
    guestNameInput.focus();
  });

  // Quiz logic: calculate score and feedback after submission.
  const quizForm = document.getElementById('ghana-quiz');
  const quizResult = document.getElementById('quiz-result');

  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const answers = ['q1', 'q2', 'q3', 'q4'];
    let score = 0;

    answers.forEach((questionKey) => {
      const selected = quizForm.querySelector(`input[name="${questionKey}"]:checked`);
      if (selected && Number(selected.value) === 1) {
        score += 1;
      }
    });

    const total = answers.length;

    if (score === total) {
      quizResult.textContent = `Excellent! You scored ${score}/${total}. Ghanaian history and national pride are clearly in your heart.`;
    } else if (score >= 2) {
      quizResult.textContent = `Good effort! You scored ${score}/${total}. Keep learning about Ghana’s journey and heritage.`;
    } else {
      quizResult.textContent = `You scored ${score}/${total}. Keep exploring Ghana’s history and national symbols to improve your score.`;
    }
  });

  document.getElementById('reset-quiz').addEventListener('click', () => {
    quizForm.reset();
    quizResult.textContent = 'Your score will appear here after you submit your answers.';
  });
});
