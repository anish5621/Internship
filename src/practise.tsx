import { useRef, useCallback } from 'react';
import { UserSchema, type User, type ApiResponse } from './userTypes';
import { useFetchResource, type UseFetchResourceReturn } from '../../react3/src/UseFetchResource';
import { GenericList } from './GenericList';
import { UserCardPreview } from './UserCardPreview';
import { PrimaryButton } from './PrimaryButton';

async function fetchUsersApi(): Promise<ApiResponse<User>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error('Failed to fetch resource.');

  const rawJson: unknown = await response.json();
  const rawArray = Array.isArray(rawJson) ? rawJson : [];

  const validatedUsers: User[] = rawArray.map((item, index) =>
    UserSchema.parse({
      id: String(item.id ?? index),
      name: String(item.name ?? 'Unknown'),
      email: String(item.email ?? 'no-email@test.com'),
      role: 'Developer',
    })
  );

  return { data: validatedUsers, total: validatedUsers.length };
}

export default function App() {
  const listRef = useRef<HTMLUListElement>(null);
  
  const fetcher = useCallback(() => fetchUsersApi(), []);
  const resourceState: UseFetchResourceReturn<User> = useFetchResource(fetcher);

  return (
    <div>
      <h1>Resource Management Dashboard</h1>

      <PrimaryButton onClick={() => console.log('Ref element:', listRef.current)}>
        Log List Container Ref
      </PrimaryButton>

      <div>
        {resourceState.status === 'loading' && <p>Loading users...</p>}

        {resourceState.status === 'error' && <p>Error: {resourceState.error}</p>}

        {resourceState.status === 'success' && (
          <GenericList
            ref={listRef}
            items={resourceState.data.data}
            renderItem={(user) => (
              <UserCardPreview name={user.name} email={user.email} />
            )}
          />
        )}
      </div>
    </div>
  );
}
