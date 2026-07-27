import api from "../lib/axios";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "../types/auth";

class AuthService {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/auth/login",
      data
    );

    return response.data;
  }

  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/auth/register",
      data
    );

    return response.data;
  }

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>("/auth/me");

    return response.data;
  }

  async logout(): Promise<void> {
    // Placeholder for future backend logout endpoint
    return Promise.resolve();
  }
}

export default new AuthService();