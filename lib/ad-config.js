const ADS = Object.freeze({
  desktop: Object.freeze({
    key: "33b22026b6cfd10435094eee78c08e35",
    width: 300,
    height: 250,
  }),
  mobile: Object.freeze({
    key: "b63bf3ca168b9914a181b932cd159a2a",
    width: 320,
    height: 50,
  }),
});

function selectAdConfig(isDesktop) {
  return isDesktop ? ADS.desktop : ADS.mobile;
}

function buildAdDocument({ key, width, height }) {
  const options = JSON.stringify({
    key,
    format: "iframe",
    height,
    width,
    params: {},
  });

  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;overflow:hidden;background:transparent}</style></head><body><script>window.atOptions=${options};<\/script><script src="https://www.highperformanceformat.com/${key}/invoke.js"><\/script></body></html>`;
}

module.exports = { ADS, buildAdDocument, selectAdConfig };
