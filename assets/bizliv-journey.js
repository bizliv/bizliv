/* No new analytics provider or storage. Uses the page's existing Google tag only. */
(() => {
  const script = document.currentScript;
  const source = script?.dataset.source || 'unknown';
  const knownSources = new Set(['studio', 'compass-story', 'apps', 'apps-shopping-list',
    'apps-nomireco', 'apps-go-home-navi', 'apps-online-meetings-schedule',
    'park', 'coach', 'design', 'bizliv', 'bizliv-about', 'diagnosis', 'media']);
  const incoming = new URL(location.href).searchParams.get('from');
  const entry = knownSources.has(incoming) ? incoming : source;
  const report = (name, fields) => {
    if (typeof window.gtag === 'function') window.gtag('event', name, fields);
  };
  if (knownSources.has(incoming)) {
    report('bizliv_journey_view', { entry_point: entry, destination: source });
  }
  // Transfer only a known entry label, never an arbitrary URL or diagnosis answers.
  document.querySelectorAll('a[href*="scheduler.zoom.us/"]').forEach((link) => {
    const url = new URL(link.href);
    if (url.hostname !== 'scheduler.zoom.us' || !url.pathname.endsWith('/idea-consultation')) return;
    url.searchParams.set('utm_source', 'bizliv-studio');
    url.searchParams.set('utm_medium', 'referral');
    url.searchParams.set('utm_campaign', 'product-consultation');
    url.searchParams.set('utm_content', entry);
    link.href = url.href;
  });
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a');
    if (!link) return;
    let action = link.dataset.bzlAction;
    if (!action && link.hostname === 'apps.apple.com') action = 'app_store';
    if (!action && link.hostname === 'todays-compass.com') action = 'product';
    if (!action && link.hostname === 'scheduler.zoom.us' && link.pathname.endsWith('/idea-consultation')) action = 'consultation';
    if (!action) return;
    report(action === 'consultation' ? 'bizliv_consultation_click' : 'bizliv_journey_click', {
      entry_point: entry,
      source_page: source,
      action,
      placement: link.closest('section[id]')?.id || link.closest('nav')?.getAttribute('aria-label') || 'page',
      channel: link.dataset.channel || ''
    });
  });
})();
