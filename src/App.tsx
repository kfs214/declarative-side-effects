import { useDataFetching } from './useDataFetching';
import { User } from './types';

export const App = () => {
  // comment/uncomment 'ctx.status(400)' in src\mocks\handlers.ts
  // to toggle ok and error response.

  const { data, isLoading, hasError } = useDataFetching(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error</div>;

  return (
    <ul>
      {(data as User[]).map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
