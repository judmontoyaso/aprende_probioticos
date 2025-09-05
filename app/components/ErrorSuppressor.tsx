'use client';

import { useEffect } from 'react';

export default function ErrorSuppressor({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const originalRemoveChild = Node.prototype.removeChild;
    const originalAppendChild = Node.prototype.appendChild;
    const originalInsertBefore = Node.prototype.insertBefore;

    // @ts-expect-error - Overriding DOM API for error suppression
    Node.prototype.removeChild = function(child) {
      try {
        if (this && child && this.contains(child)) {
          return originalRemoveChild.call(this, child);
        }
        return child;
      } catch (e) {
        console.warn('Prevented removeChild error:', e);
        return child;
      }
    };

    // @ts-expect-error - Overriding DOM API for error suppression
    Node.prototype.appendChild = function(child) {
      try {
        if (this && child) {
          return originalAppendChild.call(this, child);
        }
        return child;
      } catch (e) {
        console.warn('Prevented appendChild error:', e);
        return child;
      }
    };

    // @ts-expect-error - Overriding DOM API for error suppression
    Node.prototype.insertBefore = function(newNode, referenceNode) {
      try {
        if (this && newNode) {
          return originalInsertBefore.call(this, newNode, referenceNode);
        }
        return newNode;
      } catch (e) {
        console.warn('Prevented insertBefore error:', e);
        return newNode;
      }
    };

    return () => {
      Node.prototype.removeChild = originalRemoveChild;
      Node.prototype.appendChild = originalAppendChild;
      Node.prototype.insertBefore = originalInsertBefore;
    };
  }, []);

  return <>{children}</>;
}
