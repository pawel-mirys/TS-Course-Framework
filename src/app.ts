import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './interfaces';
import { User } from './models/User';

const URL = 'http://localhost:3000/users';

const users = new Collection(URL, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
