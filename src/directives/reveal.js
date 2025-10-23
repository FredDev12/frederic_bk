// src/directives/reveal.js
export default {
  mounted(el, binding) {
    el.classList.add('reveal');
    if (binding.modifiers?.d1) el.classList.add('reveal-delay-1');
    if (binding.modifiers?.d2) el.classList.add('reveal-delay-2');
    if (binding.modifiers?.d3) el.classList.add('reveal-delay-3');
    if (binding.modifiers?.d4) el.classList.add('reveal-delay-4');

    const once = binding.modifiers?.once ?? true;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          if (once) {
            io.unobserve(el);
          }
        } else if (!once) {
          el.classList.remove('in');
        }
      });
    }, { threshold: 0.15 });

    el.__revealObserver__ = io;
    io.observe(el);
  },
  unmounted(el) {
    if (el.__revealObserver__) {
      el.__revealObserver__.disconnect();
      delete el.__revealObserver__;
    }
  }
}
