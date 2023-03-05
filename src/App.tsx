import { useDataFetching } from './useDataFetching';

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const App = () => {
  const { data, isLoading, hasError } = useDataFetching(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error</div>;

  return (
    <ul>
      {(data as Users[]).map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
