<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { authApi } from '../api/auth'
import TronPanel from '../components/TronPanel.vue'

const route = useRoute()
const { login } = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

onMounted(() => {
  const token = route.query.token as string
  if (token) {
    login(token)
  }
})

const getMasterUrl = async (): Promise<string> => {
  let url = import.meta.env.VITE_MASTER_URL as string
  if (!url) {
    try {
      const cfg = await fetch('/config.json').then(r => r.json())
      url = cfg.masterUrl
    } catch {}
  }
  return url || window.location.origin.replace('mail.', '')
}

const handleLogin = async () => {
  error.value = ''
  loading.value = true
  try {
    const data = await authApi.loginWithPassword(email.value, password.value)
    if (data.success && data.token) {
      login(data.token)
    } else {
      error.value = data.error || 'Invalid email or password'
    }
  } catch {
    error.value = 'Connection error. Please try again.'
  } finally {
    loading.value = false
  }
}

const redirectToMaster = async () => {
  const masterUrl = await getMasterUrl()
  window.location.href = `${masterUrl}/email/sso/callback?return_to=${window.location.hostname}`
}
</script>

<template>
  <div class="relative flex h-screen w-screen items-center justify-center bg-[#081018] overflow-hidden">

    <!-- Dot grid backdrop -->
    <div class="dot-grid-static" aria-hidden="true" />

    <!-- Ambient corner glows -->
    <div class="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full"
         style="background: radial-gradient(circle, rgba(61,139,255,0.08) 0%, transparent 70%);" />
    <div class="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full"
         style="background: radial-gradient(circle, rgba(61,139,255,0.06) 0%, transparent 70%);" />

    <!-- Login panel -->
    <TronPanel :delay="0.2" :scanlines="true" inner-class="p-8 w-full max-w-sm">
      <!-- Header -->
      <div class="boot-in boot-delay-4 mb-8 space-y-1">
        <p class="text-[10px] tracking-[0.25em] text-[#3d8bff] uppercase opacity-70">
          DockFlare // Webmail
        </p>
        <h1 class="text-xl font-semibold tracking-widest text-[#e2e8f0] uppercase">
          Authenticate
        </h1>
        <p class="text-xs text-[#94a3b8]">
          Enter credentials to access terminal
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="boot-in boot-delay-4 space-y-3">
        <div class="space-y-1">
          <label class="text-[10px] tracking-widest text-[#3d8bff] uppercase opacity-80">
            Email Address
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="user@domain.com"
            required
            class="w-full bg-[#081018] border border-[rgba(61,139,255,0.25)] text-[#e2e8f0] placeholder-[#94a3b8]/40 text-sm px-3 py-2 outline-none transition-all focus:border-[#3d8bff] focus:shadow-[0_0_8px_rgba(61,139,255,0.2)]"
            style="border-radius: 0.125rem; font-family: 'JetBrains Mono', monospace;"
          />
        </div>
        <div class="space-y-1">
          <label class="text-[10px] tracking-widest text-[#3d8bff] uppercase opacity-80">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            required
            class="w-full bg-[#081018] border border-[rgba(61,139,255,0.25)] text-[#e2e8f0] placeholder-[#94a3b8]/40 text-sm px-3 py-2 outline-none transition-all focus:border-[#3d8bff] focus:shadow-[0_0_8px_rgba(61,139,255,0.2)]"
            style="border-radius: 0.125rem; font-family: 'JetBrains Mono', monospace;"
          />
        </div>

        <p v-if="error" class="chip chip-error text-xs">
          {{ error }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="mt-2 w-full py-2.5 text-sm font-semibold uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
          style="background-color: #3d8bff; color: #081018; border-radius: 0.125rem; font-family: 'JetBrains Mono', monospace;"
          :style="loading ? {} : {}"
        >
          {{ loading ? '[ AUTHENTICATING... ]' : '[ SIGN IN ]' }}
        </button>
      </form>

      <!-- Divider -->
      <div class="boot-in boot-delay-5 my-5 flex items-center gap-3">
        <div class="h-px flex-1" style="background: rgba(61,139,255,0.15);" />
        <span class="text-[10px] tracking-widest text-[#94a3b8] uppercase opacity-60">or</span>
        <div class="h-px flex-1" style="background: rgba(61,139,255,0.15);" />
      </div>

      <!-- SSO Button -->
      <button
        class="boot-in boot-delay-5 w-full py-2.5 text-sm font-semibold uppercase tracking-widest border transition-all active:scale-95"
        style="border-color: rgba(61,139,255,0.25); color: #3d8bff; background: transparent; border-radius: 0.125rem; font-family: 'JetBrains Mono', monospace;"
        @mouseover="($event.target as HTMLElement).style.borderColor = 'rgba(61,139,255,0.5)'"
        @mouseleave="($event.target as HTMLElement).style.borderColor = 'rgba(61,139,255,0.25)'"
        @click="redirectToMaster"
      >
        [ Admin SSO ]
      </button>
    </TronPanel>
  </div>
</template>
