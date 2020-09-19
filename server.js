const zmq = require("zeromq")

async function run() {

  var i=0;
  const fact="FACT";
  const sock = new zmq.Reply

  await sock.bind("tcp://127.0.0.1:3000")

  
  for await (const [msg] of sock) {
    //var resultado=2 * parseInt(msg, 10);
    //var paquete={resultado:resultado};
    //await sock.send("4")
      i+=1;
      var orden = msg;
      var orden_compra = JSON.parse(orden);

      console.log(orden_compra);
      num_factura=fact.concat(i)

      //factura=recorre el json de renzo y almacenar junto con num_factura y
      //igv y total

      //Por cada orden de compra que reciba, genera factura, almacena en su bd
      //y emite a cuentas x cobrar(send)
      const sock_cuentasxcobrar = new zmq.Request
      sock_cuentasxcobrar.connect("tcp://127.0.0.1:3001")
      await sock_cuentasxcobrar.send(JSON.stringify(factura));

  }
}

run()