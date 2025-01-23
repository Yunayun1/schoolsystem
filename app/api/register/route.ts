import { NextRequest, NextResponse } from 'next/server';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the JSON request body
    const { firstname, lastname, phone, email, password, role, ...extraData } = body;

    // Validate common fields
    if (!firstname || !lastname || !phone || !email || !password || !role) {
      return NextResponse.json({ error: 'All common fields are required' }, { status: 400 });
    }

    // Validate role
    if (role !== 'student' && role !== 'teacher') {
      return NextResponse.json({ error: 'Invalid role. Must be "student" or "teacher".' }, { status: 400 });
    }

    // Combine firstname and lastname
    const name = `${firstname} ${lastname}`;

    // Step 1: Create the user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Step 2: Prepare data for Firestore
    const userData = {
      name,
      phoneNumber: phone,
      email,
      role,
      createdAt: new Date(),
      ...extraData, // Add additional data if present (e.g., student-specific fields)
    };

    const collectionName = role === 'student' ? 'student' : 'teacher';
    await setDoc(doc(db, collectionName, user.uid), userData);

    // Step 3: Send success response
    return NextResponse.json(
      { message: `${role} registered successfully!`, userId: user.uid },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error registering user:', error);

    // Check if error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message || 'Registration failed' }, { status: 500 });
    }

    // In case the error is not an instance of Error
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
