export const loginUser = (userData) => {
    return fetch('/api/photographer/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

export const findByState = () => {
    return fetch(' api/photographer/state', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const findByCategory = () => {
    return fetch('api/photographer/category', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const createProfile = (userData) => {
    return fetch('api/photographer/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const updateProfile = (userData, token) => {
    return fetch('api/photographer/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
    });
};

export const deleteProfile = (username, token) => {
    return fetch(`api/photographer/delete/${username}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};
