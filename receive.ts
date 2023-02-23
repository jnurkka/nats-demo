import { connect } from 'ts-nats';

const main = async () => {
  const nc = await connect({ url: 'nats://localhost:4222' });
  console.log('connected to NATS server, listening for messages to topic "hello"')
  nc.subscribe('hello', (err, msg) => {
    if (err) {
      console.log(err);
    } else {
      if (msg.data) {
        console.log(msg.data.toString());
      }
    }
  })
}

main();