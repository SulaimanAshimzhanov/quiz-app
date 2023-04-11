

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLocations() {
    const navigate = useNavigate();

    const goToMain = React.useCallback(() => navigate("/"), [navigate]);
    const goToLogin = React.useCallback(() => navigate("/auth/login"), [navigate]);


  return {
    actions: {
        goToMain,
        goToLogin
    }
  }
}
