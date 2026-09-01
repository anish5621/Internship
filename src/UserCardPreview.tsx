import type { User } from './userTypes'; // Updated import path

export type UserCardPreviewProps = Pick<User, 'name' | 'email'> & {
  settings?: Partial<User>;
};

export function UserCardPreview({ name, email }: UserCardPreviewProps) {
  return (
    <div>
      <strong>{name}</strong> — <span>{email}</span>
    </div>
  );
}