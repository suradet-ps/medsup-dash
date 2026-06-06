import type { User } from '@supabase/supabase-js';

import { defineStore } from 'pinia';
import { ref } from 'vue';

import { supabase } from '@/services/supabase';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const loading = ref(false);
  const initialized = ref(false);
  let unsubscribe: (() => void) | null = null;

  async function init() {
    if (initialized.value) {
      return;
    }

    try {
      const { data } = await supabase.auth.getSession();
      user.value = data.session?.user ?? null;
    }
    catch (error) {
      console.error('Auth Init Error:', error instanceof Error ? error.message : error);
      user.value = null;
    }
    finally {
      initialized.value = true;
    }

    if (!unsubscribe) {
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        user.value = session?.user ?? null;
      });
      unsubscribe = data.subscription.unsubscribe;
    }
  }

  async function login(email: string, pass: string) {
    try {
      loading.value = true;
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: pass,
      });
      if (error) {
        throw error;
      }
      user.value = data.user;
      return true;
    }
    catch (error) {
      console.error('Login Error:', error instanceof Error ? error.message : error);
      throw error;
    }
    finally {
      loading.value = false;
    }
  }

  async function logout() {
    try {
      await supabase.auth.signOut();
    }
    catch (error) {
      console.error('Logout Error:', error instanceof Error ? error.message : error);
    }
    finally {
      user.value = null;
    }
  }

  return { user, loading, initialized, init, login, logout };
});
