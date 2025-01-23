import { NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  admin.initializeApp();
}

export async function POST() {
  const email = 'person@admin.com';
  const password = '123456';

  try {
    // Create user in Firebase Authentication
    const userRecord = await getAuth().createUser({ email, password });
    console.log('Admin user created:', userRecord.uid);

    // Add user to Firestore admin collection
    const db = getFirestore();
    await db.collection('admin').doc(userRecord.uid).set({
      email,
      role: 'admin',
    });

    console.log('Admin user added to Firestore');
    return NextResponse.json({ message: 'Admin user created successfully' });
  } catch (error) {
    console.error('Error creating admin user:', error);
    return NextResponse.json({ error: 'Failed to create admin user' }, { status: 500 });
  }
}
