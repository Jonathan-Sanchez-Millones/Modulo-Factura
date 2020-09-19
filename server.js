const zmq = require("zeromq")

async function run() {
  const sock = new zmq.Reply

  await sock.bind("tcp://127.0.0.1:3000")

  for await (const [msg] of sock) {
    var resultado=2 * parseInt(msg, 10);
    var paquete={resultado:resultado};
    console.log(paquete);
    await sock.send(JSON.stringify(paquete));
  }
}

run()