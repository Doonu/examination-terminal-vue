import type { APIProfile, IProfile } from '../../model/profile.types'

export const getProfileConversation = (profile: APIProfile): IProfile => ({
  email: profile.email,
  firstName: profile.first_name,
  lastName: profile.last_name,
  age: profile.age,
  gender: profile.gender,
  id: profile.id,
  role: profile.role,
})
