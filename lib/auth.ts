"use client";
import { useState, useEffect } from 'react';
import { authService } from './api-client';

export interface User {
  id: string;
  nome: string;
  email: string;
  username: string;
  role: 'admin' | 'user' | 'host';
  isActive?: boolean;
  created_at?: string;
}

export interface UserWithoutPassword {
  id: string;
  nome: string;
  email: string;
  username: string;
  role: 'admin' | 'user' | 'host';
  created_at?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserWithoutPassword | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

// Mapeamento de username para email (para compatibilidade)
const USERNAME_TO_EMAIL_MAP: { [key: string]: string } = {
  'marcos.silva': 'marcos.silva@limpebras.com',
  'admin': 'admin@test.com',
  'admin@test.com': 'admin@test.com', // Para compatibilidade
  'usuario1': 'usuario1@limpebras.com',
  'usuario2': 'usuario2@limpebras.com'
};

// Sistema de autenticação desabilitado - sempre autenticado
export function useAuth(): AuthState {
  return {
    isAuthenticated: true,
    user: {
      id: '1',
      nome: 'Usuário',
      email: 'usuario@limpebras.com',
      username: 'usuario',
      role: 'admin',
      created_at: new Date().toISOString()
    },
    isLoading: false,
    login: async () => true,
    logout: () => {},
    isAdmin: true
  };
}

// Função para gerenciar usuários (apenas para admins)
export function useUserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);
      // Aqui você implementaria uma função para listar usuários do backend
      // Por enquanto, vamos manter vazio
      setUsers([]);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const addUser = async (userData: { email: string; password: string; nome: string; role: 'admin' | 'user' | 'host'; isActive?: boolean }) => {
    try {
      const response = await authService.register(userData);
      await loadUsers(); // Recarregar lista
      return response.user;
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      throw error;
    }
  };

  const updateUser = async (id: string, updates: Partial<User>) => {
    try {
      await authService.updateProfile(updates);
      await loadUsers(); // Recarregar lista
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw error;
    }
  };

  const deleteUser = async (id: string) => {
    try {
      // Implementar delete no backend se necessário
      await loadUsers(); // Recarregar lista
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      throw error;
    }
  };

  const toggleUserStatus = async (id: string) => {
    try {
      // Implementar toggle status no backend se necessário
      await loadUsers(); // Recarregar lista
    } catch (error) {
      console.error('Erro ao alterar status do usuário:', error);
      throw error;
    }
  };

  return {
    users,
    loading,
    addUser,
    updateUser,
    deleteUser,
    toggleUserStatus,
    refreshUsers: loadUsers
  };
}