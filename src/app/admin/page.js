// pages/admin/login.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

const AdminLogin = () => {
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLogin = () => {
    // Check if the entered password is correct (replace 'correct_password' with your actual password)
    if (adminPassword === 'Sarang2008') {
      // Redirect to the target page if the password is correct
      window.location.href = '/target';
    } else {
      // Handle incorrect password (you can show an error message or take other actions)
      console.log('Incorrect admin password');
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <label>Password:</label>
      <input
        type="password"
        value={adminPassword}
        onChange={(e) => setAdminPassword(e.target.value)}
      />
      <div py-5>
      <button onClick={handleAdminLogin}>Login</button>
      </div>
      <br />
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default AdminLogin;
