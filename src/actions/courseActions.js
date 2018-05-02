export function createCourse(course) {
  return { type: 'CREATE_COURSE', course};
}
// reducer: accept state and an action,, and returns a new state
