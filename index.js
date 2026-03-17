export default {
  async fetch(request) {
    const url = new URL(request.url);

    const uuid = "3cdc256f-1e45-4923-b20f-1bb78f8576d0";

    if (url.pathname === `/${uuid}`) {
      return new Response("OK");
    }

    if (url.pathname === `/sub/${uuid}`) {
      const sub = `vless://${uuid}@${url.hostname}:443?encryption=none&security=tls&type=ws&host=${url.hostname}&path=%2F#fast`;
      return new Response(btoa(sub));
    }

    return new Response("running");
  }
};
