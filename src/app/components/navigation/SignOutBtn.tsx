'use client';
import { signOutUser } from '@/actions/authActions';
import { toast } from 'react-toastify';

export default function SignOutBtn() {
  const handleSignOut = async () => {
    await signOutUser();
    toast.info("Successfully signed out");
  }
  return (
    <button onClick={() => handleSignOut()}>Sign Out</button>
  )
}
