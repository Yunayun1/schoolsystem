// app/admin/dashboard/page.tsx
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '../Components/AdminLayout/adminLayout';

const AdminDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /login when visiting localhost:3000
    router.push('/Components/home');
  }, [router]);

  return (
    <AdminLayout>
      <h1>Admin Dashboard</h1>
    </AdminLayout>
  );
};

export default AdminDashboard;
