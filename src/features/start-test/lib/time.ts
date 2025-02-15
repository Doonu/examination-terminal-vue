import type { ITime } from '../model/time.types'
import type { Ref } from 'vue'

export const initialValue: ITime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

export const updateTime = (timeState: Ref<ITime>, timeInterval: number, deadlineDate?: number) => {
  if (!deadlineDate || !timeState) return
  const targetDate = deadlineDate * 1000

  const now = +new Date()
  const diff = targetDate - now

  if (diff < 0) {
    clearInterval(timeInterval)
    timeState.value = initialValue
    return
  }

  timeState.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}
