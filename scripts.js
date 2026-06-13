document.addEventListener('DOMContentLoaded', function () {
  function getScrollPosition(target) {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    if (target === 'top') {
      return 0;
    }

    if (target === 'middle') {
      return Math.max(0, Math.round((scrollHeight - clientHeight) / 2));
    }

    if (target === 'bottom') {
      return Math.max(0, scrollHeight - clientHeight);
    }

    return null;
  }

  function scrollToPositionSlowly(position) {
    const start = window.scrollY;
    const distance = position - start;
    const duration = 1200; // desplazamiento más lento
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, start + distance * ease);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function bindHoverScrollToPosition(element, position) {
    element.addEventListener('mouseenter', function () {
      scrollToPositionSlowly(position);
    });
  }

  document.querySelectorAll('button[data-target]').forEach(function (button) {
    const targetKey = button.dataset.target;
    const position = getScrollPosition(targetKey);
    if (position === null) {
      return;
    }

    bindHoverScrollToPosition(button, position);
  });
});
