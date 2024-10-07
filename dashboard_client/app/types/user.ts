interface User {
    name: string;
    email: string;
    id: string;
    isActivated: boolean;
}

interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}
