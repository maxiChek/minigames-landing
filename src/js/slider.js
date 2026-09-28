// Array containing details for all 24 games
const gamesData = [
  {
    title: 'Camper Van: Make It Home',
    img: 'camper-van-make-it-home-card.jpg',
    rating: '4.8',
    likes: '12.4K',
  },
  {
    title: 'Cast n Chill',
    img: 'cast-n-chill-card.jpg',
    rating: '4.7',
    likes: '8.9K',
  },
  {
    title: 'Cat Chess',
    img: 'cat-chess-card.jpg',
    rating: '4.9',
    likes: '15.3K',
  },
  {
    title: 'Cat Mail Co',
    img: 'cat-mail-co-card.jpg',
    rating: '4.6',
    likes: '11.1K',
  },
  {
    title: 'Cozy Solitaire',
    img: 'cozy-solitaire-card.jpg',
    rating: '4.8',
    likes: '9.5K',
  },
  {
    title: 'Cozy Sudoku',
    img: 'cozy-sudoku-card.jpg',
    rating: '4.7',
    likes: '7.2K',
  },
  {
    title: 'Grimshire',
    img: 'grimshire-card.jpg',
    rating: '4.9',
    likes: '21.0K',
  },
  {
    title: 'Heartopia',
    img: 'heartopia-card.jpg',
    rating: '4.8',
    likes: '18.4K',
  },
  {
    title: 'ISLANDERS: New Shores',
    img: 'islanders-new-shores-card.jpg',
    rating: '4.9',
    likes: '54.2K',
  },
  {
    title: 'Koroneko',
    img: 'koroneko-card.jpg',
    rating: '4.5',
    likes: '6.8K',
  },
  {
    title: 'Leaf It Alone',
    img: 'leaf-it-alone-card.jpg',
    rating: '4.7',
    likes: '10.2K',
  },
  {
    title: 'Leafy Corner',
    img: 'leafy-corner-card.jpg',
    rating: '4.6',
    likes: '8.1K',
  },
  {
    title: 'Little Corners',
    img: 'little-corners-card.jpg',
    rating: '4.8',
    likes: '14.7K',
  },
  {
    title: 'Organized Inside',
    img: 'organized-inside-card.jpg',
    rating: '4.9',
    likes: '23.5K',
  },
  {
    title: 'Palia',
    img: 'palia-card.jpg',
    rating: '4.8',
    likes: '45.0K',
  },
  {
    title: 'Shelve the Potions',
    img: 'shelve-the-potions-card.jpg',
    rating: '4.7',
    likes: '13.9K',
  },
  {
    title: 'Tailside: Cozy Cafe Sim',
    img: 'tailside-cozy-cafe-sim-card.jpg',
    rating: '4.9',
    likes: '31.2K',
  },
  {
    title: 'The Wild at Heart',
    img: 'the-wild-at-heart-card.jpg',
    rating: '4.8',
    likes: '19.8K',
  },
  {
    title: 'Tiny Glade',
    img: 'tiny-glade-card.jpg',
    rating: '5.0',
    likes: '62.1K',
  },
  {
    title: 'Tukoni: Forest Keepers',
    img: 'tukoni-forest-keepers-card.jpg',
    rating: '4.9',
    likes: '27.4K',
  },
  {
    title: 'Vacation Cafe Simulator',
    img: 'vacation-cafe-simulator-card.jpg',
    rating: '4.8',
    likes: '28.7K',
  },
  {
    title: 'Whisper of the House',
    img: 'whisper-of-the-house-card.jpg',
    rating: '4.7',
    likes: '16.3K',
  },
  {
    title: 'Winter Burrow',
    img: 'winter-burrow-card.jpg',
    rating: '4.9',
    likes: '32.4K',
  },
  {
    title: 'Wytchwood',
    img: 'wytchwood-card.jpg',
    rating: '4.9',
    likes: '38.9K',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack');
  const prevBtn = document.querySelector('.slider-btn--prev');
  const nextBtn = document.querySelector('.slider-btn--next');

  if (!track) return;

  // Set default centered index (ISLANDERS: New Shores)
  let currentIndex = 8;

  // Render cards HTML markup
  function renderCards() {
    track.innerHTML = gamesData
      .map(
        (game, index) => `
      <article class="game-card ${index === currentIndex ? 'game-card--active' : ''}">
        <img src="./src/assets/images/${game.img}" alt="${game.title}" class="game-card__img">
        <div class="game-card__info">
          <h3 class="game-card__title">${game.title}</h3>
          <div class="game-card__meta">
            ${game.rating ? `<span class="game-card__rating">★ ${game.rating}</span>` : ''}
            <span class="game-card__likes">♡ ${game.likes}</span>
          </div>
        </div>
      </article>
    `,
      )
      .join('');
  }

  // Update position and center the active card
  function updateSlider() {
    const slides = Array.from(track.children);

    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add('game-card--active');
      } else {
        slide.classList.remove('game-card--active');
      }
    });

    const activeSlide = slides[currentIndex];
    if (!activeSlide) return;

    const trackParentWidth = track.parentElement.offsetWidth;
    const activeOffset = activeSlide.offsetLeft;
    const activeWidth = activeSlide.offsetWidth;

    // Calculate shift value to align active card directly in the middle
    const translateAmount =
      activeOffset - trackParentWidth / 2 + activeWidth / 2;
    track.style.transform = `translateX(-${Math.max(0, translateAmount)}px)`;
  }

  // Navigation button listeners
  prevBtn?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (currentIndex < gamesData.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Initial execution
  renderCards();
  updateSlider();

  // Recalculate slider alignment on window resize
  window.addEventListener('resize', updateSlider);
});
