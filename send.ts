import { connect } from 'ts-nats';

const main = async () => {
  const nc = await connect({ url: 'nats://localhost:4222' });
  setInterval(() => {
    console.log('publishing to topic "hello"')
    nc.publish('hello', 'Hello World!');
  }, 1000);
}

main();