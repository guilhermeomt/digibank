import { Server } from 'miragejs';

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({
        customers: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@doe.com',
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/customers', (schema) => {
        return schema.db['customers'];
      });
    },
  });
};
