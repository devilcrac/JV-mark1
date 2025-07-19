// Utility functions for handling null/undefined values safely

export const safeAccess = <T>(obj: any, path: string, defaultValue: T): T => {
  try {
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
      if (current === null || current === undefined) {
        return defaultValue;
      }
      current = current[key];
    }
    
    return current !== undefined ? current : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const isValidObject = (obj: any): boolean => {
  return obj !== null && obj !== undefined && typeof obj === 'object';
};

export const safeTypeCheck = (obj: any, expectedType: string): boolean => {
  if (!isValidObject(obj)) return false;
  return obj.type === expectedType;
};

// Error boundary hook for React components
export const useErrorHandler = () => {
  const handleError = React.useCallback((error: Error, errorInfo?: any) => {
    console.error('Application error:', error, errorInfo);
    
    // You can add error reporting service here
    // Example: Sentry.captureException(error);
  }, []);

  return handleError;
};