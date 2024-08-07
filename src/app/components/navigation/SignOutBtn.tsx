'use client';
import { signOutUser } from '@/actions/authActions';

export default function SignOutBtn() {
  return (
    <button onClick={async () => signOutUser()}>Sign Out</button>
  )
}
