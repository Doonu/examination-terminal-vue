import type { APITest, ITest } from '@/entities/test'
import type { APICourse, ICourse } from '@/entities/course'

export interface APITestInCourse extends APITest {
  access_test: boolean
}

export interface ITestInCourse extends ITest {
  accessTest: boolean
}

export interface APICourseInCourse extends APICourse {
  tests: APITestInCourse[]
}

export interface ICourseInCourse extends ICourse {
  tests: ITestInCourse[]
}
