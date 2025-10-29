'use client';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'; // Cambiar en producción

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  const authenticated = sessionStorage.getItem('admin_authenticated');
  return authenticated === 'true';
}

export function login(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem('admin_authenticated', 'true');
    return true;
  }
  return false;
}

export function logout(): void {
  sessionStorage.removeItem('admin_authenticated');
}
